import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(Antd);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
