from .attention import AttentionLayer
import numpy as np
import pandas as pd

from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
from keras import backend as K
import tensorflow as tf
from tensorflow.keras.layers import Input, LSTM, Embedding, Concatenate, Dense, TimeDistributed, Bidirectional
from tensorflow.keras.models import Model
from .utils import text_cleaner, load_data


class Summary():
    def __init__(self):
        self.max_text_len = 30
        self.max_summary_len = 8
        self.x_voc = 24912
        self.y_voc = 9090
        latent_dim = 300
        embedding_dim = 300
        self.x_tokenizer, self.y_tokenizer = load_data()

        K.clear_session()

        # Encoder
        encoder_inputs = Input(shape=(self.max_text_len,))

        # embedding layer
        enc_emb = Embedding(self.x_voc, embedding_dim, trainable=True)(encoder_inputs)

        # encoder lstm 1
        encoder_lstm1 = LSTM(latent_dim, return_sequences=True, return_state=True, dropout=0.4, recurrent_dropout=0.4)
        encoder_output1, state_h1, state_c1 = encoder_lstm1(enc_emb)

        # encoder lstm 2
        encoder_lstm2 = LSTM(latent_dim, return_sequences=True, return_state=True, dropout=0.4, recurrent_dropout=0.4)
        encoder_output2, state_h2, state_c2 = encoder_lstm2(encoder_output1)

        # encoder lstm 3
        encoder_lstm3 = LSTM(latent_dim, return_state=True, return_sequences=True, dropout=0.4, recurrent_dropout=0.4)
        encoder_outputs, state_h, state_c = encoder_lstm3(encoder_output2)

        decoder_inputs = Input(shape=(None,))

        # embedding layer
        dec_emb_layer = Embedding(self.y_voc, embedding_dim, trainable=True)

        dec_emb = dec_emb_layer(decoder_inputs)

        decoder_lstm = LSTM(latent_dim, return_sequences=True, return_state=True)
        decoder_outputs, decoder_c, decoder_h = decoder_lstm(dec_emb, initial_state=[state_h, state_c])

        attn_layer = AttentionLayer(name='attention_layer')
        attn_out, attn_states = attn_layer([encoder_outputs, decoder_outputs])

        # Concat attention input and decoder LSTM output
        decoder_concat_input = Concatenate(axis=-1, name='concat_layer')([decoder_outputs, attn_out])

        # dense layer
        decoder_dense = TimeDistributed(Dense(self.y_voc, activation='softmax'))
        decoder_outputs = decoder_dense(decoder_concat_input)

        # Define the model
        model = Model([encoder_inputs, decoder_inputs], decoder_outputs)
        model.load_weights('/code/text_summary/lstm_attention.h5')

        self.encoder_model = Model(inputs=encoder_inputs, outputs=[encoder_outputs, state_h, state_c])

        decoder_state_input_h = Input(shape=(latent_dim,))
        decoder_state_input_c = Input(shape=(latent_dim,))
        decoder_hidden_state_input = Input(shape=(self.max_text_len, latent_dim))

        dec_emb2 = dec_emb_layer(decoder_inputs)
        decoder_outputs2, state_h2, state_c2 = decoder_lstm(dec_emb2, initial_state=[decoder_state_input_h,
                                                                                     decoder_state_input_c])

        # attention inference
        attn_out_inf, attn_states_inf = attn_layer([decoder_hidden_state_input, decoder_outputs2])
        decoder_inf_concat = Concatenate(axis=-1, name='concat')([decoder_outputs2, attn_out_inf])

        # A dense softmax layer to generate prob dist. over the target vocabulary
        decoder_outputs2 = decoder_dense(decoder_inf_concat)

        self.decoder_model = Model(
            [decoder_inputs] + [decoder_hidden_state_input, decoder_state_input_h, decoder_state_input_c],
            [decoder_outputs2] + [state_h2, state_c2])

        self.reverse_target_word_index = self.y_tokenizer.index_word
        self.reverse_source_word_index = self.x_tokenizer.index_word
        self.target_word_index = self.y_tokenizer.word_index

    def decode_sequence(self, text):
        cleaned = text_cleaner(text, 0)
        x_tr_seq = self.x_tokenizer.texts_to_sequences([cleaned])
        seq = pad_sequences(x_tr_seq, maxlen=self.max_text_len, padding='post')

        input_seq = seq.reshape(1, self.max_text_len)
        # Encode the input as state vectors.
        e_out, e_h, e_c = self.encoder_model.predict(input_seq)

        # Generate empty target sequence of length 1.
        target_seq = np.zeros((1, 1))

        # Populate the first word of target sequence with the start word.
        target_seq[0, 0] = self.target_word_index['sostok']

        stop_condition = False
        decoded_sentence = ''
        while not stop_condition:
            output_tokens, h, c = self.decoder_model.predict([target_seq] + [e_out, e_h, e_c])

            # Sample a token

            sampled_token_index = np.argmax(output_tokens[0, -1, :])
            sampled_token = self.reverse_target_word_index[sampled_token_index]

            if (sampled_token != 'eostok'):
                decoded_sentence += ' ' + sampled_token

            # Exit condition: either hit max length or find stop word.
            if (sampled_token == 'eostok' or len(decoded_sentence.split()) >= (self.max_summary_len - 1)):
                stop_condition = True

            # Update the target sequence (of length 1).
            target_seq = np.zeros((1, 1))
            target_seq[0, 0] = sampled_token_index

            e_h, e_c = h, c

        return decoded_sentence
