"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _vuexRouterSync = require("vuex-router-sync");

require("babel-polyfill");

var _fastclick = _interopRequireDefault(require("fastclick"));

var _until = require("./js/until");

var _promise = require("./js/promise");

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(0, _vuexRouterSync.sync)(_store["default"], _router["default"]);
_vue["default"].config.productionTip = false;

_fastclick["default"].attach(document.body);

(0, _until.makeCall)();

_router["default"].afterEach(function (to, from) {
  console.log('成功浏览到to: ', to.path);
  console.log('成功浏览到from: ', from.path);
});

var Child = {
  render: function render(createElement) {
    return createElement('p', 'text');
  }
}; //

_vue["default"].component('ele', {
  render: function render(createElement) {
    if (_this.$slots["default"] === undefined) {
      return createElement('div', '没有使用slot');
    } else {
      return createElement('div', _this.$slots["default"]);
    }
  }
});
/* eslint-disable no-new */


new _vue["default"]({
  el: '#app',
  router: _router["default"],
  store: _store["default"],
  components: {
    App: _App["default"]
  },
  template: '<App/>'
}); // function executor(resolve, reject) {
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

var obj = {};
var temp;

function defineReactive(data, key, val) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function get() {
      console.log('你正在访问A');
      return val;
    },
    set: function set(newValue) {
      console.log('你正在改变A属性', newValue);

      if (val == newValue) {
        return;
      }

      val = newValue;
    }
  });
} // Object.defineProperty(obj,'b',{
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


defineReactive(obj, 'a', 10);
console.log(obj.a);
obj.a = 69;
obj.a++;
console.log(obj.a); // for(var k in obj){
//   console.log(k)
// }
//父类 Person

function Person() {
  this.sayName = function () {
    return this.name;
  };
} //子类 Chinese


function Chinese(name) {
  //借助 call 实现继承
  Person.zsjCall(this);
  this.name = name;

  this.ch = function () {
    console.log('我是中国人');
  };
} //测试


var chinese = new Chinese('成龙'); //调用 父类方法

console.log(chinese.sayName());
var objjj = {
  aa: 9,
  bb: 5,
  jj: {
    ll: 'hhhh',
    pp: '90'
  }
};
console.log(Object.keys(objjj));
var target1 = {
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

function clone(target) {
  if (_typeof(target) == 'object') {
    var cloneTargrt = {};

    for (var key in target) {
      cloneTargrt[key] = clone(target[key]);
    }

    return cloneTargrt;
  } else {
    return target;
  }
}

function deepClone(target) {
  var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Map();

  if (cache.get(target)) {
    return cache.get(target);
  }

  if (target instanceof Object) {
    var dist;

    if (target instanceof Array) {
      // 拷贝数组
      dist = [];
    } else if (target instanceof Function) {
      // 拷贝函数
      dist = function dist() {
        return target.call.apply(target, [this].concat(Array.prototype.slice.call(arguments)));
      };
    } else if (target instanceof RegExp) {
      // 拷贝正则表达式
      dist = new RegExp(target.source, target.flags);
    } else if (target instanceof Date) {
      dist = new Date(target);
    } else {
      // 拷贝普通对象
      dist = {};
    } // 将属性和拷贝后的值作为一个map


    cache.set(target, dist);

    for (var key in target) {
      // 过滤掉原型身上的属性
      if (target.hasOwnProperty(key)) {
        dist[key] = deepClone(target[key], cache);
      }
    }

    return dist;
  } else {
    return target;
  }
}

var set = new Set([1, 2, 3, 4, 5, 5, 5, 5, 5]);
console.log(set); // Set { 1, 2, 3, 4, 5 }

var userInfo = {
  name: "Crayon",
  province: "Guangdong",
  city: "Shenzhen"
};

var province = userInfo.province,
    location = _objectWithoutProperties(userInfo, ["province"]);

console.log(province); // Crayon

console.log(location); // { province: 'Guangdong', city: 'Shenzhen' }

var title = {
  kk: "china"
};

var charts = _objectSpread({}, title);

console.log(charts);
var arrayNumbers = [1, 5, 9, 3, 5, 7, 10, 4, 5, 2, 5];
var newNumbers = Array.from(new Set(arrayNumbers));
console.log(newNumbers);
zskkkk = ddds + 4;
console.log(ddds);
var zskkkk;
var ddds = 999;
console.log(1);
setTimeout(function () {
  console.log(2);
  setTimeout(function () {
    console.log(3);
  });
});
new Promise(function (resolve, reject) {
  console.log(4);
  resolve(5);
}).then(function (data) {
  console.log(data);
});
setTimeout(function () {
  console.log(6);
});
console.log(7);

function requestTotal(Parr) {
  var timeArr = [];
  var time = new Date().getTime();
  Parr.forEach(function (item, index) {
    item.then(function () {
      timeArr.push({
        index: index,
        time: new Date().getTime() - time
      });
    });
  });
  var arr = [];
  arr = timeArr.map(function (i) {
    return i.time;
  });
  var max = Math.max(arr);
  var min = Math.min(arr);
  timeArr.forEach(_item, function (index) {
    if (_item.time == max) {
      var fast = {
        index: index,
        time: max
      };
    }

    if (_item.time == min) {
      var slow = {
        index: index,
        time: min
      };
    }
  });
}

for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}

var person = {
  name: 'zsj',
  say: function say() {
    console.log(this.name);
  }
};
person.say();

function parent() {
  this.heart = 'happy';
  this.face = 'peace';
}

function children() {
  parent.call(this);
  this.heart = 'xxddgg';
}