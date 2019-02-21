import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test1 from '@/components/testComp/test'
Vue.use(Router)

export default new Router({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  transitionOnLoad: false,
  routes: [
    {
      path: '/',
      name: 'test1',
      component: test1
    }
  ]
})
