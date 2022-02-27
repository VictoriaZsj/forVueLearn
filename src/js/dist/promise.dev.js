"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Promise1 = Promise1;

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * 
 * Promise1原理的实现
 */
function Promise1(executor) {
  var self = this;
  self.status = 'pending';
  self.data = undefined;
  self.onResolvedCallbacks = [];
  self.onRejectedCallbacks = [];

  function resolve(value) {
    // 如果当前状态不是pending，则不执行
    if (self.status !== 'pending') {
      return;
    } // 将状态改为resolved


    self.status = 'resolved'; // 保存value的值

    self.data = value; // 如果有待执行的callback函数，立即异步执行回调函数onResolved

    if (self.onResolvedCallbacks.length > 0) {
      setTimeout(function () {
        self.onResolvedCallbacks.forEach(function (callbackObj) {
          callbackObj(value);
        });
      });
    }
  }

  ;

  function reject(value) {
    // 如果当前状态不是pending，则不执行
    if (self.status !== 'pending') {
      return;
    } // 将状态改为rejected


    self.status = 'rejected'; // 保存value的值

    self.data = value; // 如果有待执行的callback函数，立即异步执行回调函数onResolved

    if (self.onRejectedCallbacks.length > 0) {
      setTimeout(function () {
        self.onRejectedCallbacks.forEach(function (callbackObj) {
          callbackObj(value);
        });
      });
    }
  }

  ;

  try {
    // 立即同步执行executor
    executor(resolve, reject);
  } catch (e) {
    // 如果执行器抛出异常，promise对象变为rejected状态
    reject(e);
  }
} //手写 Promise.then实现


Promise1.prototype.then = function (onResolved, onRejected) {
  onResolved = typeof onResolved === 'function' ? onResolved : function (value) {
    return value;
  };
  onRejected = typeof onRejected === 'function' ? onRejected : function (reason) {
    throw reason;
  };

  var _self = this;

  return new Promise1(function (resolve, reject) {
    /*
    调用指定回调函数的处理，根据执行结果。改变return的promise状态,主要用于链式then
     */
    function handle(callback) {
      var self = _self;

      try {
        var result = callback(self.data); //self.data就是resolve里的值

        if (result instanceof Promise) {
          // 2. 如果回调函数返回的是promise，return的promise的结果就是这个promise的结果
          result.then(function (value) {
            resolve(value);
          }, //这里又是另一重callback
          function (reason) {
            reject(reason);
          });
        } else {
          // 1. 如果回调函数返回的不是promise，return的promise的状态是resolved，value就是返回的值。
          resolve(result);
        }
      } catch (e) {
        //  3.如果执行onResolved的时候抛出错误，则返回的promise的状态为rejected
        reject(e);
      }
    }

    ;

    if (_self.status === 'pending') {
      // promise当前状态还是pending状态，将回调函数保存起来
      _self.onRejectedCallbacks.push(function () {
        handle(onResolved);
      });

      _self.onRejectedCallbacks.push(function () {
        handle(onRejected);
      });
    } else if (_self.status === 'resolved') {
      setTimeout(function () {
        handle(onResolved);
      });
    } else {
      // 当status === 'rejected'
      setTimeout(function () {
        handle(onRejected);
      });
    }
  });
}; //手写 Promise.catch实现


Promise1.prototype["catch"] = function (onRejected) {
  return this.then(undefined, onRejected);
};

Promise1.all = function (promises) {
  var arr = new Array(promises.length);
  var resolvedCount = 0;
  return new Promise(function (resolve, reject) {
    promises.forEach(function (p, index) {
      Promise.resolve(p).then(function (value) {
        arr[index] = value;
        resolvedCount++;

        if (arr.length == resolvedCount) {
          resolve(arr);
        }
      }, function (error) {
        reject(error);
      });
    });
  });
}; //手写 Promise.race实现


Promise1.race = function (promises) {
  return new Promise(function (resolve, reject) {
    promises.forEach(function (p, index) {
      Promise.resolve(p).then(function (value) {
        resolve(value);
      }, function (error) {
        reject(error);
      });
    });
  });
};

var promise = new Promise1(function (resolve, reject) {
  setTimeout(function () {
    resolve(1); //reject(1)
  }, 100);
});
promise.then(function (value) {
  console.log('郑斯洁1', value);
}, function (err) {
  console.log('郑斯洁2', err);
});
console.log(promise);
var array = [];

function fn2(arr, _ref) {
  var _ref2 = _toArray(_ref);

  arr.forEach(function (item) {
    [].concat(item);

    if (item.children) {
      fn2(item.children);
    }
  });
}

function fn3(arr, _ref3) {
  var _ref4 = _toArray(_ref3);

  arr.forEach(function (element) {});
}