// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import { sync } from 'vuex-router-sync';
sync(store, router);

Vue.config.productionTip = false;
import "babel-polyfill";
import FastClick from 'fastclick';
FastClick.attach(document.body);


router.afterEach(function(to, from) {
  console.log('成功浏览到to: ', to.path);
  console.log('成功浏览到from: ', from.path);
});

var Child={
  render: (createElement) =>{
    return createElement('p','text')
  }
};
//
Vue.component('ele', {
    render: (createElement) =>{
      if(this.$slots.default===undefined){
        return createElement('div','没有使用slot')
      }else {
        return createElement('div',this.$slots.default)
      }
    }
  }
)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
