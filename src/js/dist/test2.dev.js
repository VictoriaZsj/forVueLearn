"use strict";

//需求背景：单位时间内触发就重新计数
function debounce(func, delay) {
  var timeout;
  return function (params) {
    var that = this;
    var arg = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.call(that, arg);
    }, delay);
  };
}

function debounce2(func, delay) {
  var timeout;
  return function (params) {
    var that = this;
    var arg = arguments;
    var callnow = !timeout;

    if (callnow) {
      func.call(that, arg);
    }

    timeout = setTimeout(function () {
      timeout = null;
    }, delay);
  };
}

function throttle(func, delay) {
  var timeout;
  return function (params) {
    var that = this;
    var arg = arguments;
    var callnow = !timeout;

    if (callnow) {
      func.call(that, arg);
    }

    timeout = setTimeout(function () {
      timeout = null;
    }, delay);
  };
}