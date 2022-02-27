<template>
  <div v-cloak>

  </div>
</template>
<script>
  import {mapActions,mapState} from 'vuex'
  export default {
    name:'table',
    data:()=>{
      return {
        currentColumns:[],
        currentData:[]
      }
    },
    props: {
      columns: {
        type: Array,
        default: () => {
          return []
        }
      },
      datas: {
        type: Array,
        default: () => {
          return []
        }
      }
    },

    render: (h) =>{
      var _this=this;
      var ths=[];
      this.currentColumns.forEach((col,index)=>{
        if(col.sortable){
          ths.push(h('th'),[
            h('span',col.title),
            h('a',{
              class:{
                on:col.sortable==='asc'
              },
              on:{
                click:()=>{
                  _this.handleSortByAsc(index)
                }
              }
            },'^'),
            h('a',{
              class:{
                on:col.sortable==='desc'
              },
              on:{
                click:()=>{
                  _this.handleSortByDesc(index)
                }
              }
            },'!'),
          ])
        }else{
          ths.push(h('th',col.title))
        }
      });
      var trs=[];
      this.currentData.forEach((row)=>{
        var tds=[];
        _this.currentColumns.forEach((cell)=>{
          tds.push(h('td',row[cell.key]))
        });
        trs.push(h('tr',tds))
      });
      return h('table',[
        h('thead',[
          h('tr',ths),
          h('tbody',trs)
        ])
      ])
    },
    methods:{
      
      makeColumns:()=>{
        this.currentColumns=this.columns.map((col,index)=>{
          col._sortType='normal';
          col._index=index;
          return col;
        })
      },
      makeData:()=>{
        this.currentData=this.data.map(()=>{
          row._index=index;
          return row
        })
      },
      handleSortByAsc:(index)=>{
        var key =this.currentColumns[index].key;
        this.currentColumns.forEach((col=>{
          col._sortType='normal'
        }));
        this.currentColumns[index]._sortType='asc';
        this.currentData.sort((a,b)=>{
          return a[key]>b[key]?1:-1
        })
      },
      handleSortByDesc:(index)=>{
        var key =this.currentColumns[index].key;
        this.currentColumns.forEach((col=>{
          col._sortType='normal'
        }));
        this.currentColumns[index]._sortType='desc';
        this.currentData.sort((a,b)=>{
          return a[key]<b[key]?1:-1
        })
      }
    },
    watch:{
      datas:()=>{
        this.makeData();

      }
    },
    mounted(){

    }
  }
</script>
<style lang="less" scoped>


</style>
