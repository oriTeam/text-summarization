from flask import Flask, request
from flask import jsonify
from text_summary.text_summary import Summary
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/summary', methods = ['POST', 'GET'])
def hello_world():
    request_data = request.json
    text = request_data.get('text')
    print(text)
    # return "a"
    summary = Summary()
    # text = "I have been drinking this tea for several years. It tastes great. It has excellent health benefits. For example, it enhances my energy level and helps keep my head clear. Overall, it is far superior to many other drinks such as soda or coffee. It is also extremely easy to make the tea. You simply open one bag, pour it into the standard 16 ounce bottle, and put it in the fridge for a couple of hours. It comes out delicious and perfect every time. I don't see how it can get any better than that!"
    res = (summary.decode_sequence(text))
    return jsonify({"original_text": text, "summary_result": res})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
