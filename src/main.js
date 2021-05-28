import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyCount from "./components/MyCount"
// 导入axios
import axios from 'axios'
// 配置全局地址
axios.defaults.baseURL = 'https://www.escook.cn'
// 挂载axios到原型链上
Vue.prototype.axios = axios

Vue.component('MyCount', MyCount)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

}).$mount('#app')
