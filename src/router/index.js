import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import testDirective from '@/components/testComp/test_directive'
import testCss from '@/components/testComp/testCss'
// import testRender from '@/components/testComp/test_render'
Vue.use(Router)

// console.log('模块化文件在初始阶段就编译执行了')
export default new Router({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  transitionOnLoad: false,
  routes: [
    {
      path: '/',
      name: 'testDirective',
      component: testDirective
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/testCss',
      name: 'testCss',
      component: testCss
    },
    // {
    //   path: '/testRender',
    //   name: 'testRender',
    //   component: testRender
    // }
  ]
})
