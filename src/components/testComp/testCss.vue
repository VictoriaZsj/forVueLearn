<template>
  <div id='testCss'>
    <div class="fahter clearfix">
        <div class="column center">center</div>
        <div class="column left">left</div>
        <div class="column right">right</div>
    </div>
    <div class="footer"></div>

    
   </div>



</template>

<style lang="less" scoped>

#testCss{
    .container {
      position: relative;
    }
    body {
      min-width: 550px;
    }
    .column {
      min-height: 100px;
    }
    .left {
      float: left;
      width: 200px;
      background: #ffbbff;
    }
    .center {
      margin: 0 150px 0 200px;
      background: #bfefff;
    }
    .right {
      float: right;
      width: 150px;
      background: #eeee00;
    }
}
</style>


<script>
 


  import {mapActions,mapState} from 'vuex'
  export default {
    name:'testCss',
    data(){
      return{
          a:'摸板字符串'
      }
    },
    directives:{
    },

    methods:{
       aaa(){
            console.log(`${this.a}`)
        },
        //promise的用法
         promiseFunc(){
             let p1=new Promise((resolve,reject)=>{
                if(false){
                     resolve(1)
                }else{
                    reject(2)
                }
               
             });
             
             
             let p2=new Promise((resolve,reject)=>{
                if(false){
                     resolve(11)
                }else{
                    reject(22)
                }
               
             });
             let p3=new Promise((resolve,reject)=>{
                if(false){
                     resolve(111)
                }else{
                    reject(222)
                }
               
             });
              let ppp=Promise.all([p1,p2,p3])
              ppp.then((succ)=>{
                  console.log(succ)
              },(err)=>{
                  console.log(err)
              })
            
         }
         //

    },
    components:{
      
    },

    mounted(){
        this.promiseFunc()
    }
  }
</script>
