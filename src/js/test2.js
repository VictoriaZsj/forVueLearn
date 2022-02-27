//需求背景：单位时间内触发就重新计数
function debounce(func,delay) {
    let timeout;
    return function (params) {
        let that=this;
        let arg=arguments;
        
        clearTimeout(timeout);
        timeout=setTimeout(()=>{
            func.call(that,arg)
        },delay)
    }
}

function debounce2(func,delay) {
    let timeout;
    return function (params) {
        let that=this;
        let arg=arguments;
        
       let callnow=!timeout;
       if(callnow){
            func.call(that,arg)
        }
        timeout=setTimeout(()=>{
            timeout=null
        },delay)
    }
}



function throttle(func,delay) {
    let timeout;
    return function (params) {
        let that=this;
        let arg=arguments;
        
       let callnow=!timeout;
       if(callnow){
            func.call(that,arg)
        }
        timeout=setTimeout(()=>{
            timeout=null
        },delay)
    }
}

