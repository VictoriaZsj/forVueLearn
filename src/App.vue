<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // data(){
  //  return {
  //    columns: [
  //      {
  //        title: '姓名',
  //        key: 'name'
  //      },
  //      {
  //        title: '年龄',
  //        key: 'age',
  //        sortable: true
  //      },
  //      {
  //        title: '出生日期',
  //        key: 'birthday',
  //        sortable: true
  //      },
  //      {
  //        title: '地址',
  //        key: 'address'
  //      },
  //    ],
  //    datas:[
  //      {
  //        name:'王小明',
  //        age:18,
  //        birthday:'1992-03-21',
  //        address:'北京市朝阳区'
  //      },
  //      {
  //        name:'张小刚',
  //        age:18,
  //        birthday:'1992-03-21',
  //        address:'北京市朝阳区'
  //      },
  //      {
  //        name:'李小红',
  //        age:18,
  //        birthday:'1992-03-21',
  //        address:'北京市朝阳区'
  //      }
  //    ]
  //  }
  // },
  // methods:{
  //   handleAddData(){
  //     this.data,push({
  //       name:'刘小天',
  //       age:19,
  //       birthday:'1998-05-30',
  //       address:'北京市东城区'
  //     })
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
