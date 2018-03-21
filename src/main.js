// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import axios from 'axios'
import router from './router/router.js'
import store from './store/store.js'

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  loading: '../static/loading-svg/loading-bars.svg'
});

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

/* 工具方法 */
// 1、获取url参数
Vue.prototype.getUrlParam = name => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  var q = window.location.pathname.substr(1).match(reg_rewrite);
  if(r != null){
      return unescape(r[2]);
  }else if(q != null){
      return unescape(q[2]);
  }else{
      return null;
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
