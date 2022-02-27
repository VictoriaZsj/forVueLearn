
     function Person(){
        this.name = "sssss";
     };

     function test(){
        Person.prototype.School='jgs';
        
        let gfs=new Person();
        Object.defineProperty(gfs,'sex',{
            value:'male',
            enumerable:false
        });
        
        Object.defineProperty(gfs,'hhhhhh',{
            value:'jgs',
            enumerable:true
        });
        //遍历自身所有属性 ，但不包括继承属性
        Object.getOwnPropertyNames(gfs).forEach(function(key) {
            console.log('遍历自身属性 ，但不包括继承属性, 不可枚举的也遍历:',key);//name,sex，hhhhhh
        });
        for(var p in gfs){
            　　console.log('遍历所有可枚举属性 ：',p); //name，School，hhhhhh
        }
        console.log('遍历自身可枚举属性：',Object.keys(gfs))  

        console.log('是否可枚举：',gfs.propertyIsEnumerable('sex'))
    };

    test()

    export let count = 1;
    export function printCount() {
        ++count;
    }

    var x = 5;
    var addX = function (value) {
        return value + x;
      };
    //   module.exports.x = x;
    //   module.exports.addX = addX;

    let printCount1 = () =>{ 
         ++count1
         return count1;
     }
     var count1 = 1;

     var obj= {
        'x':x,
        'addX':addX,
        'printCount1': printCount1,
         'count1': count1
    }

    //  module.exports.x =x;
    //  module.exports.addX =addX;
    //  module.exports.printCount1 =printCount1;
    //  module.exports.count1 =count1;

     module.exports=obj 
    
   


