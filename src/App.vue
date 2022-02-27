<template>
  <div id="app">
     <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
//  import {test} from './js/test.js'
    
export default {
  name: 'App',
  data(){
   return {
     columns: [
       {
         title: '姓名',
         key: 'name'
       },
       {
         title: '年龄',
         key: 'age',
         sortable: true
       },
       {
         title: '出生日期',
         key: 'birthday',
         sortable: true
       },
       {
         title: '地址',
         key: 'address'
       },
     ],
     datas:[
       {
         name:'王小明',
         age:18,
         birthday:'1992-03-21',
         address:'北京市朝阳区'
       },
       {
         name:'张小刚',
         age:18,
         birthday:'1992-03-21',
         address:'北京市朝阳区'
       },
       {
         name:'李小红',
         age:18,
         birthday:'1992-03-21',
         address:'北京市朝阳区'
       }
     ]
   }
  },
  methods:{
    PromiseTest(){
      new Promise(function (resolve, reject) {
          console.log(1111);
          resolve(7777);
          
      }).then(function (value) {
          console.log(value); 
          
          return new Promise(function(resolve, reject){
            let aa=  new Promise(function(resolve, reject){
                resolve(8888);
                // return 66
              });
            resolve(aa);
           
          });
      }).then(function (value) {
         console.log('22',value); 
      })
      },
      testObj(){
        
      },
    handleAddData(){
      this.data.push({
        name:'刘小天',
        age:19,
        birthday:'1998-05-30',
        address:'北京市东城区'
      })
    },
    test(){
      let Aobj={
        name:'zhengsijie',
        age:19,
        url:{
          uuu:'yyyyyyy.com',
          yyy:'hello'
        }
      };
      let Bobj={
        name:'xiaozhang',
        aaa:8
      }
     let cObj= Object.assign(Aobj,Bobj);
     console.log('关于拷贝A：',Aobj)
     console.log('关于拷贝B：',Bobj)
     console.log('关于拷贝C：',cObj)
     
     Aobj.url.uuu='wwwww.com'

     let yObj={...Aobj}
     console.log('关于拷贝yObj：',yObj)
      Aobj.url.yyy='zsj'
      // console.log('关于拷贝yObj：',yObj)

      let a = {
    name: "muyiy",
    book: {
        title: "You Don't Know JS",
        price: "45"
    }
}


    }
    
  },
  mounted(){
    // this.PromiseTest()
    this.test()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
