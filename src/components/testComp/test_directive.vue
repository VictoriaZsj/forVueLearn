<template>
  <div v-cloak>
    指令就是将一些特性应用到DOM上，对底层DOM进行操作
    自定义指令（对DOM进行底层操作）
    <input type="text" v-focus>
    <div v-testDirective="{msg:'hello',name:'Aresn'}"></div>
    <div class="main" v-clickoutside="handleClose">
      <button @click="show=!show" v-time="timeNow">点击显示下拉菜单</button>
      <div class="dropDown" v-show="show" >
        <p v-time="timeBefore">下拉框的内容，点击外面区域可以关闭</p>
      </div>
    </div>
  </div>
</template>
<script>
    import {mapActions,mapState} from 'vuex'
    import Time from '@/js/time.js'
    export default {
        name:'testDierctive',
        data(){
            return{
                message:'some zhengsijie',
                show:false,
                timeNow:(new Date()).getTime(),
                timeBefore:1549795561000
            }
        },
        directives:{
            focus:{
              inserted:function (el) {
                  el.focus()
              }
            },
            testDirective:{
                bind:(el,binding,vnode)=>{
                    el.innerHTML =
                        'name:' +binding.name +'<br>'+
                        'value:' +binding.value +'<br>'+
                        'expression:' +binding.expression +'<br>'+
                        'arg:' +binding.arg +'<br>'+
                        'modifiers:' +JSON.stringify(binding.modifiers) +'<br>'+
                        'vnode:' +Object.keys(vnode).join('--') +'<br>'
                }
            },
            clickoutside:{
                bind:(el,binding,vnode)=>{
                    function callback_documentHandle(e){
                         if(el.contains(e.target)){
                             console.log(777)
                             return false
                         }
                         if(binding.expression){
                             binding.value(e)//执行handleClose
                         }
                    }
                    el._vueClickOutside_=callback_documentHandle;
                    document.addEventListener('click',callback_documentHandle)
                },
                unbind:(el,binding)=>{
                    document.removeEventListener('click',callback_documentHandle);
                    delete el._vueClickOutside_;
                }
            },
            time:{
                bind:(el,binding,vnode)=>{
                    el.innerHTML=Time.time.getFormatTime(binding.value);
                    el._timeout_=setInterval(function () {
                        el.innerHTML=Time.getFormatTime(binding.value);
                    },60000)

                },
                unbind:(el,binding,vnode)=>{
                    clearInterval(el._timeout_);
                    delete el._timeout_
                }
            }
        },
        methods:{
            handleClose(){
                this.show=false
            }
        },
        mounted(){
            // function allpro(obj){
            //     var keys=[];
            //     var values=[];
            //     for(var key in obj){
            //         //只遍历对象自身的属性，而不包含继承于原型链上的属性。
            //         // if (obj.hasOwnProperty(key) === true){
            //         //
            //         // }
            //         keys.push(key);
            //         values.push(obj[key]);
            //     }
            //     // console.log("keys is ："+keys+" and values is ："+values);
            // }
            // // Object.prototype.bar = 1;// 修改Object.prototype
            // var o={"name":"wjy","age":26,"sex":"female"};//定义一个object对象
            // allpro(o);
            }
    }
</script>
<style lang="less" scoped>
      [v-cloak]{
        display: none;
      }
      .main{
        margin: 0 auto;
        width: 125px;
      }
      button{
        display: block;
        width: 100%;
        color: #fff;
        background-color: #39f;
        border: 0;
        padding: 6px;
        text-align: center;
        font-size: 12px;
        border-radius: 4px;
        cursor:pointer;
        outline: none;
        position: relative;
      }
      button:active{
        top: 1px;
        left: 1px;
      }
      .dropDown{
        width: 100%;
        height: 150px;
        margin: 5px 0;
        font-size: 12px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 1px 6px rgba(0,0,0,2);
        p{
          display: inline-block;
          padding: 6px;
        }
      }
</style>
