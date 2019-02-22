import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import testDirective from '@/components/testComp/test_directive'
import testRender from '@/components/testComp/test_render'
Vue.use(Router)

export default new Router({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  transitionOnLoad: false,
  routes: [
    // {
    //   path: '/',
    //   name: 'testDirective',
    //   component: testDirective
    // },
    {
      path: '/',
      name: 'testRender',
      component: testRender
    }
  ]
})
