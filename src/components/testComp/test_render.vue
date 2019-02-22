<template>
  <div v-cloak>
    <!--<ele></ele>-->
  </div>
</template>
<script>
  // var Child={
  //   render: (createElement) =>{
  //     return createElement('p','eeee')
  //   }
  // }
  // let ele={
  //   name: 'ele',
    // render: (createElement) =>{
    //       return createElement('div',
    //         Array.apply(null,{
    //           length:5
    //         }).map(function () {
    //           return createElement(Child)
    //         })
    //       )
    //   },
    // render: (createElement) =>{
    //   if(this.$slots.default===undefined){
    //     return createElement('div','没有使用slot')
    //   }else {
    //     return createElement('div',this.$slot.default)
    //   }
    // },
    // props:{
    //   list1:{
    //     type:Array,
    //     default:()=>{
    //       return []
    //     }
    //   }
    // },
    // render:(createElement)=> {
    //   if (this.list1.length) {
    //       return createElement('ul',this.list.map((item)=>{
    //         return createElement('li',item);
    //     }));
    //    }else {
    //       return createElement('p','列表为空')
    //   }
    // }
  // }


  import {mapActions,mapState} from 'vuex'
  export default {
    name:'testRender',
    data(){
      return{
        list:[
          '《打打闹闹》',
          '《收到我的》',
          '《但是忘记》'
        ]
      }
    },
    directives:{
    },

    methods:{

    },
    components:{

    },

    mounted(){

    }
  }
</script>
<style lang="less" scoped>


</style>
