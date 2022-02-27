  
  /**
   * 
   * Promise1原理的实现
   */
export function Promise1(executor){

    var self=this;
    self.status='pending';
    self.data=undefined;

    self.onResolvedCallbacks=[];
    self.onRejectedCallbacks=[];

    function resolve(value) {
        // 如果当前状态不是pending，则不执行
        if(self.status !== 'pending'){
            return 
        }
        // 将状态改为resolved
        self.status = 'resolved'
        // 保存value的值
        self.data = value
    
        // 如果有待执行的callback函数，立即异步执行回调函数onResolved
        if (self.onResolvedCallbacks.length>0){
            setTimeout(()=>{
                self.onResolvedCallbacks.forEach(callbackObj=>{ 
                    callbackObj(value)
                })
            })
        }
    };
    
  
    function reject(value) {
        // 如果当前状态不是pending，则不执行
        if(self.status !== 'pending'){
            return
        }
        // 将状态改为rejected
        self.status = 'rejected'
        // 保存value的值
        self.data = value
    
        // 如果有待执行的callback函数，立即异步执行回调函数onResolved
        if (self.onRejectedCallbacks.length>0){
            setTimeout(()=>{
                self.onRejectedCallbacks.forEach(callbackObj=>{ 
                    callbackObj(value)
                })
            })
        }
    };
 

    try{
        // 立即同步执行executor
        executor(resolve,reject)
    }catch (e) { // 如果执行器抛出异常，promise对象变为rejected状态
        reject(e)
    }
}

//手写 Promise.then实现
Promise1.prototype.then = function(onResolved,onRejected){
    onResolved = typeof onResolved === 'function'? onResolved: value => value
    onRejected = typeof onRejected === 'function'? onRejected: reason => {throw reason}
    var _self = this

    return new Promise1((resolve,reject)=>{

        /*
        调用指定回调函数的处理，根据执行结果。改变return的promise状态,主要用于链式then
         */
        function handle(callback) {
            var  self=_self
            try{
                const result = callback(self.data)  //self.data就是resolve里的值
                if (result instanceof Promise){
                    // 2. 如果回调函数返回的是promise，return的promise的结果就是这个promise的结果
                    result.then(
                        value => {resolve(value)},//这里又是另一重callback
                        reason => {reject(reason)}
                    )
                } else {
                    // 1. 如果回调函数返回的不是promise，return的promise的状态是resolved，value就是返回的值。
                    resolve(result)
                }
            }catch (e) {
                //  3.如果执行onResolved的时候抛出错误，则返回的promise的状态为rejected
                reject(e)
            }
        };


        if(_self.status === 'pending'){
            // promise当前状态还是pending状态，将回调函数保存起来
            _self.onRejectedCallbacks.push(
                ()=>{
                    handle(onResolved)
                }
            )
            _self.onRejectedCallbacks.push(
                ()=>{
                    handle(onRejected)
            })
        }else if(_self.status === 'resolved'){
            setTimeout(()=>{
                handle(onResolved)
            })
        }else{ // 当status === 'rejected'
            setTimeout(()=>{
                handle(onRejected)
            })
        }
    })

}
//手写 Promise.catch实现
Promise1.prototype.catch = function(onRejected){
    return this.then(undefined,onRejected)
}



Promise1.all=function(promises){
    const arr=new Array(promises.length);
    let resolvedCount=0;
    return new Promise((resolve,reject)=>{
      promises.forEach((p,index) => {
        Promise.resolve(p).then(
          (value)=>{
              arr[index]=value
              resolvedCount++
              if(arr.length==resolvedCount){
                resolve(arr)
              }
            },
          (error)=>{
              reject(error)
          })
    });
    })
  }
  //手写 Promise.race实现
Promise1.race=function(promises){
    return new Promise((resolve,reject)=>{
      promises.forEach((p,index) => {
        Promise.resolve(p).then(
          (value)=>{
                resolve(value)
            },
          (error)=>{
              reject(error)
          })
    });
    })
  }


var promise = new Promise1((resolve,reject)=>{
    setTimeout(function () {
        resolve(1)
        //reject(1)
    },100)
  })
promise.then(
    value=>{console.log('郑斯洁1',value)},
    err=>{console.log('郑斯洁2',err)}
    )
  
console.log(promise)


let array=[]
function fn2(arr,[]){
    
    arr.forEach(item => {
        [].concat(item);
        if(item.children){
            fn2(item.children)
        }
    });

}

let array=[]
function fn3(arr){
    arr.forEach(item => {
        if 
    });

}