"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = debounce;
exports.debounce2 = debounce2;
exports.throttle = throttle;
exports.throttle2 = throttle2;
exports.makeCall = makeCall;

//一直触发，一直重新创建计时器重新计时
// 防抖--非立即执行版
function debounce(func, delay) {
  var timeout;
  return function (params) {
    var that = this;
    var arg = Array.prototype.slice.call(arguments);
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.call(that, arg);
    }, delay);
  };
} //防抖--立即执行版


function debounce2(func, delay) {
  var timeout;
  return function (params) {
    var that = this;
    var arg = Array.prototype.slice.call(arguments);
    var callnow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, delay); //起了一个计时作用

    if (callnow) func.call(that, arg);
  };
} //时间段内，触发不会再执行  
//节流
//时间戳版


function throttle(func, wait) {
  var previous = 0;
  return function (params) {
    var _now = new Date().getTime();

    var args = arguments;
    var that = this;

    if (_now - previous > wait) {
      func.apply(that, args);
      previous = _now;
    }
  };
} //定时器版


function throttle2(func, wait) {
  var timeout;
  return function (params) {
    var that = this;
    var args = arguments;

    if (!timeout) {
      func.apply(func, args);
      timeout = setTimeout(function () {
        timeout = null;
      }, wait);
    }
  };
} //手写call


function makeCall() {
  // Function.prototype.callNew=function(){
  //   let ctx=arguments[0]||window;
  //   ctx.fn=this;
  //   let arg=[...arguments];
  //   ctx.fn(arg);
  //   delete  ctx.fn
  //   return ctx
  // }
  Function.prototype.zsjCall = function () {
    var ctx = arguments[0] || window;
    ctx.fn = this; //给context添加一个方法 指向this

    var args = [];

    for (var index = 1; index < arguments.length; index++) {
      args.push(arguments[index]);
    }

    var result = ctx.fn.apply(ctx, args);
    delete ctx.fn;
    return result;
  };
} //去重


function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log('error');
    return;
  }

  var flag;
  var res = [arr[0]];

  for (var i = 0; i < arr.length; i++) {
    flag = true;

    for (var j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        flag = false;
        break;
      }
    }

    if (flag) {
      res.push(arr[i]);
    }
  }

  return res;
}

function unique2(arr) {
  if (!Array.isArray(arr)) {
    console.log('error');
    return;
  }

  var flag;
  var res = [];
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      res.push(arr[i]);
    } else {
      obj[arr[i]] = true;
    }
  }

  return res;
} //浅拷贝


function shallowClone(source) {
  var target = {};

  for (var i in source) {
    if (source.hasOwnProperty(i)) {
      target[i] = source[i];
    }
  }

  return target;
} //浅拷贝--Object.assign()任意多个的源对象自身的可枚举属性拷贝给目标对象
//展开运算符...
//slice() concat()