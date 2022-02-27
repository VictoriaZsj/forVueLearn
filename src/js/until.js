
//一直触发，一直重新创建计时器重新计时
    // 防抖--非立即执行版
    export function debounce(func,delay) {
    let timeout;
    return function (params) {
      const that=this;
      const arg=[...arguments];
      if(timeout)clearTimeout (timeout);
      timeout=setTimeout(()=>{
        func.call(that,arg)
      },delay)
    }
  }
  //防抖--立即执行版
  export function debounce2(func,delay) {
    let timeout;
    return function (params) {
      const that=this;
      const arg=[...arguments];
      const callnow=!timeout;
      timeout=setTimeout(()=>{
        timeout=null;
      },delay) //起了一个计时作用
      if(callnow) func.call(that,arg)
    }
  }

  
//时间段内，触发不会再执行  
  //节流
  //时间戳版
  export function throttle(func,wait) {
      var previous=0;
      return function (params) {
        let _now=new Date().getTime();
        let args=arguments;
        let that=this;
      if(_now-previous>wait){
        func.apply(that,args);
        previous=_now;
      }
    }
  }
  //定时器版
  export function throttle2(func,wait) {
      let timeout;
      return function (params) {
          let that=this;
          let args=arguments;
          if(!timeout){
              func.apply(func,args)
              timeout=setTimeout(()=>{
                  timeout=null;
              },wait)
          }
      }
  }

  //手写call

export function makeCall(){
  // Function.prototype.callNew=function(){
  //   let ctx=arguments[0]||window;
  //   ctx.fn=this;
  //   let arg=[...arguments];
  //   ctx.fn(arg);
  //   delete  ctx.fn
  //   return ctx
  // }
    Function.prototype.zsjCall=function () {
      var ctx=arguments[0]||window;
      ctx.fn=this;//给context添加一个方法 指向this
      var args=[];
      for (let index = 1; index < arguments.length; index++) {
        args.push(arguments[index])
      }
      
      var result=ctx.fn(...args)
      delete ctx.fn;  
      return result
    }
}

//去重

function unique(arr){
    if(!Array.isArray(arr)){
      console.log('error')
      return
    }
    let flag
    let res=[arr[0]];
    for(let i=0;i<arr.length;i++){
      flag =true
      for(let j=0;j<res.length;j++){
        if(arr[i]===res[j]){
          flag=false
          break
        }
      }
      if(flag){
        res.push(arr[i])
      }

    }
    return res
  }
  function unique2(arr){
    if(!Array.isArray(arr)){
      console.log('error')
      return
    }
    let flag
    let res=[];
    let obj={}
    for(let i=0;i<arr.length;i++){
      if(!obj[arr[i]]){
        res.push(arr[i])
      }else{
        obj[arr[i]]=true
      }
      
    }
    return res
  }

//浅拷贝
  function shallowClone(source) {
    var target = {};
    for(var i in source) {
        if (source.hasOwnProperty(i)) {
            target[i] = source[i];
        }
    }
    return target;
}

//浅拷贝--Object.assign()任意多个的源对象自身的可枚举属性拷贝给目标对象
 //展开运算符...

 //slice() concat()


