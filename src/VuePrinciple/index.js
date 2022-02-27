import defineReactive from './defineReative.js'
import Observer from './Observer.js'

var obj={
    a:{
        m:{
            n:5
        }
    },
    b:2
}

function observe(value) {
    if(typeof value !='object')return;
    var ob;
     if(typeof value._ob_!='undefined'){
         ob=value._ob_;
     }else{
         ob=new Observer(value);
     }
     return ob
}

observe(obj)