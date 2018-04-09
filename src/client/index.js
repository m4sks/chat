import Vue from 'vue/dist/vue.common.js'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios';
// import axios from 'axios';
import App from './App'
import routes from './router'
import './style.css'

Vue.use(VueRouter);
// Vue.use(VueAxios, axios);

const router = new VueRouter({ 
  routes,
  mode: 'history'
});
// new Vue(Vue.util.extend({ router })).$mount('#app');

// const router = new VueRouter({
//   routes,
//   mode: 'history'
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})