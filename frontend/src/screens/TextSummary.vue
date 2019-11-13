<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <a-form
                        id="components-form-demo-normal-summary"
                        :form="form"
                        class="summary-form"
                        @submit="handleSubmit"
                        layout="vertical"
                >
                    <a-form-item label="Your origin text">
                        <a-textarea
                                rows="6"
                                v-decorator="[
                          'text',
                          { rules: [{ required: true, message: 'Please input your text!' }] },
                        ]"
                                placeholder="Paste your text here..."
                        >
                            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
                        </a-textarea>
                    </a-form-item>
                    <a-form-item>
                        <a-button type="primary" html-type="submit" class="summary-form-button"
                                  :loading="!result.summary_result && submited">
                            Submit
                        </a-button>
                    </a-form-item>
                </a-form>
            </div>
            <div class="col-12">
                <div v-show="submited">
                    <div v-if="!result.summary_result">
                        <a-skeleton active :paragraph="{rows: 2}" title="false"/>
                    </div>
                    <div v-else>
                        <div class="row">
                            <div class="col-12 text-lg-left">
                                <span>-----------------------</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 text-lg-left">
                                <h6>Result: </h6>
                            </div>
                            <div class="col-12 text-lg-left">
                                <em>{{result.summary_result}}</em>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {BACKEND_URL} from '../const'

    export default {
        data() {
            return {
                loading: false,
                submited: false,
                result: {}
            }
        },
        beforeCreate() {
            this.form = this.$form.createForm(this, {name: 'normal_summary'});
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                        this.submited = true;
                        this.result = {};

                        // console.log(localStorage.getItem("shistory"))

                        axios.post(BACKEND_URL + "/summary", values).then(res => {
                            this.result = res.data;
                            if(!localStorage.getItem("shistory")) {
                                localStorage.setItem("shistory", JSON.stringify([res.data]))
                            }
                            else {
                                let older = JSON.parse(localStorage.getItem("shistory"));
                                older.push(res.data);
                                localStorage.setItem("shistory", JSON.stringify(older))
                            }
                        }).catch(error => {
                            if (!error.response) {
                                // network error
                                this.errorStatus = 'Error: Network Error';
                            } else {
                                this.errorStatus = error.response.data.message;
                            }
                        });

                        // setTimeout(() => {
                        //     this.result = {
                        //         "original_text": "It is very delicious",
                        //         "summary_result": " great for"
                        //     }
                        // }, 2000)
                    }
                });
            },
        },
    };
</script>
<style>
    #components-form-demo-normal-summary .summary-form {
        max-width: 300px;
    }

    #components-form-demo-normal-summary .summary-form-forgot {
        float: right;
    }

    #components-form-demo-normal-summary .summary-form-button {
        width: 100%;
    }

    ul.ant-skeleton-paragraph {
        padding-left: 0;
    }

    .ant-row.ant-form-item {
        margin-bottom: 10px;
    }
</style>