import {def} from './utils.js'

//将一个正常的object转换为每个层级的属性都是响应式（可以被侦测的）的object
export default class Observer{

    constructor(value){
        console.log('我是Observer构造器',value)
        //给实例（this,一定要注意，构造函数中的this不是表示类本身，而是实例）添加了—__ob__属性，值是这次new的实例
        value.__ob__
        def(value,__ob__,this,this,false)
    }
}