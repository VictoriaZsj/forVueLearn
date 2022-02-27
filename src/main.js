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

import {makeCall} from './js/until'
makeCall();


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
// function executor(resolve, reject) {
//   let rand = Math.random();
//   console.log(1)
//   console.log(rand)
//   if (rand > 0.5)
//       resolve()
//   else
//       reject('郑斯洁的哈哈哈哈哈哈哈')
// };

// var p0 = new Promise(executor);

// var p1 = p0.then((value) => {
//   console.log("succeed-1")
//   return new Promise(executor)
// })


// var p3 = p1.then((value) => {
//   console.log("succeed-2")
//   return new Promise(executor)
// })

// var p4 = p3.then((value) => {
//   console.log("succeed-3")
//   return new Promise(executor)
// })


// p4.catch((error) => {
//   console.log('333:',error)
// })
// console.log('这里是')


let obj={};

var temp

function defineReactive(data,key,val) {
    Object.defineProperty(data,key,{
      enumerable:true,
      configurable:true,
      get:()=>{
        console.log('你正在访问A')
        return val
      },
      set(newValue){
        console.log('你正在改变A属性',newValue)
        if(val==newValue){
          return
        }
        val=newValue
      }
    })
  
  
}

// Object.defineProperty(obj,'b',{
//   value:5,
//   writable:true,
//   enumerable:false
// })

// Object.defineProperty(obj,'c',{
//   value:7,
//   writable:true,
//   enumerable:true
// })
// console.log(obj)
defineReactive(obj,'a',10)
console.log(obj.a)
obj.a=69;
obj.a++;
console.log(obj.a);

// for(var k in obj){
//   console.log(k)
// }

//父类 Person
function Person() {
  this.sayName = function() {
      return this.name;
  }
}
//子类 Chinese
function Chinese(name) {
  //借助 call 实现继承
  Person.zsjCall(this);
  this.name = name;
  this.ch = function() {
      console.log('我是中国人');
  }
}
//测试
var chinese = new Chinese('成龙');
//调用 父类方法
console.log(chinese.sayName());   



let objjj={
  aa:9,
  bb:5,
  jj:{
    ll:'hhhh',
    pp:'90'
  }
}

console.log(Object.keys(objjj))

const target1 = {
  field1: 1,
  field2: 99,
  field3: 'ConardLi',
  field4: {
      child: 'child',
      child2: {
          child2: 'child2'
      }
  }
};


function clone(target){
  if(typeof target=='object'){
    let cloneTargrt={};
    for(const key in target){
      cloneTargrt[key]=clone(target[key])
    }
    return cloneTargrt
  }else{
    return target
  }

}


function deepClone(target,cache = new Map()){
  if(cache.get(target)){
      return cache.get(target)
  }
  if(target instanceof Object){
      let dist ;
      if(target instanceof Array){
        // 拷贝数组
        dist = [];
      }else if(target instanceof Function){
        // 拷贝函数
        dist = function () {
          return target.call(this, ...arguments);
        };
      }else if(target instanceof RegExp){
        // 拷贝正则表达式
       dist = new RegExp(target.source,target.flags);
      }else if(target instanceof Date){
          dist = new Date(target);
      }else{
        // 拷贝普通对象
        dist = {};
      }
      // 将属性和拷贝后的值作为一个map
      cache.set(target, dist);
      for(let key in target){
          // 过滤掉原型身上的属性
        if (target.hasOwnProperty(key)) {
          dist[key] = deepClone(target[key], cache);
        }
      }

      return dist;
  }else{
      return target;
  }
}





let set = new Set([1, 2, 3, 4, 5, 5, 5, 5, 5])

console.log(set) // Set { 1, 2, 3, 4, 5 }



import { Promise1 } from './js/promise';

const userInfo = { name: "Crayon", province: "Guangdong", city: "Shenzhen" };
const { province, ...location } = userInfo;
console.log(province); // Crayon
console.log(location); // { province: 'Guangdong', city: 'Shenzhen' }

const title = {kk:"china"};
const charts = {...title};
console.log(charts);

const arrayNumbers = [1, 5, 9, 3, 5, 7, 10, 4, 5, 2, 5];
const newNumbers = Array.from(new Set(arrayNumbers));
console.log(newNumbers); 


zskkkk=ddds+4
console.log(ddds)
var zskkkk
var ddds=999


console.log(1);
setTimeout(() => {
  console.log(2)		
  setTimeout(() => {
    console.log(3)		
  })
})

new Promise((resolve, reject) => {
console.log(4)
resolve(5)
}).then((data) => {
console.log(data)
})
setTimeout(() => {
console.log(6)
})
console.log(7)

 function requestTotal(Parr){
  let timeArr=[]
  let time=new Date().getTime()
  Parr.forEach((item,index)=>{
    item.then(()=>{
      timeArr.push({
        index:index,
        time:new Date().getTime()-time
    })
  })
  })
  let arr=[]
  arr=timeArr.map(i=>{
    return i.time
  })


  let max=Math.max(arr)
  let min=Math.min(arr)

  timeArr.forEach(_item,index=>{
    if(_item.time==max) {
      let fast={

        index: index,
        
        time: max,
        
        }
    }
    if(_item.time==min){
      let slow= {

        index: index,
        
        time: min
        
        }
    }
  })

  }

  for (var i = 1; i <= 5; i++) {  
      setTimeout(function timer() {
        console.log(i);
      }, i*1000)
 }


 let person={
   name:'zsj',
   say(){
     console.log(this.name)
   }
 }

 person.say()

 function parent(){
  this.heart='happy'
  this.face='peace'
 }

 function children(){
   
   parent.call(this)
   this.heart='xxddgg'
 }

