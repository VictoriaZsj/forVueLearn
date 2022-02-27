


var example = require('./test.js');//如果参数字符串以“./”开头，则表示加载的是一个位于相对路径
console.log('111111111:',example); // 5
console.log(example.addX(1));

console.log(' module.exports:',example.count1); // 1
console.log( example.printCount1()) // 2
console.log(' module.exports:',example.count1);
// main1.js


 // index.js

 import  { count, printCount } from './test.js';       

 console.log('222',count)
//  printCount()
 console.log('777',count)

var time={
    //获取当前时间戳
    getUnix:function () {
        var date=new Date();
        return date.getTime();
    },
    //获取今天0点0分0秒的时间戳
    getTodayUnix:function () {
        var date=new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    //获取今年1月1日0点0分0秒的时间戳
    getYearUnix:function () {
        var date=new Date();
        date.setMonth(0);
        date.setDate(1);
        date.setHours(0);
        date.setMinutes(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    //获取标准年月日
    getLastDate:function (time) {
        var date=new Date(time);
        var month=date.getMonth()+1<10?'0'+date.getMonth()+1:date.getMonth()+1;
        var day=date.getFullYear()+'-'+month+'-'+day
    },
    //转换时间
    getFormatTime:function (timestamp) {
        var now =this.getUnix();
        var today=this.getTodayUnix();
        var year=this.getYearUnix();
        var timer=(now-timestamp)/1000;
        var tip='';

        if(timer<=0||Math.floor(timer/60<=0)){
            tip='刚刚'
        }else if(timer<3600){
            tip=Math.floor(timer/60)+'分钟前'
        }else if(timer>=3600&&(timestamp-today>=0)){
            tip=Math.floor(timer/3600)+'小时前'
        }else if(timer/86400<=31){
            tip=Math.ceil(timer/86400)+'天前'
        }else {
            tip=this.getLastDate(timestamp)
        }
        return tip;
    }
}
module.exports ={time}

