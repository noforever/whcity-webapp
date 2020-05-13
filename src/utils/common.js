import Vue from 'vue'
import {config} from '@/utils/chartConfig'

window.isString = (o)=>{return Object.prototype.toString.call(o) == '[object String]'}
window.isObject = (o)=>{return Object.prototype.toString.call(o) == '[object Object]'}
window.isNumber = (o)=>{return Object.prototype.toString.call(o) == '[object Number]'}
window.isArray = (o)=>{return Object.prototype.toString.call(o) == '[object Array]'}
window.isFunction = (o)=>{return Object.prototype.toString.call(o) == '[object Function]'}

Vue.prototype.$get = function (url, parm){
  let dataParm = parm || {}
  return new Promise((resolve, reject) => {
    this.$http({
      url: this.$http.adornUrl(url),
      method: 'get',
      params: this.$http.adornParams(dataParm)
    }).then(({data}) => {
      if (data && data.code != 0) {
        this.$message(data.msg || '系统异常')
        return
      }
      resolve(data)
    }).catch(err => {
      reject(err)
    })
  })
}

Vue.prototype.$post = function (url, data, parm){
  parm = parm || {}
  let dataParm = isObject(data) ? this.$http.adornData(data) : JSON.stringify(data)
  let option = Object.assign({
    url: this.$http.adornUrl(url),
    method: 'post',
    data: dataParm
  }, parm)
  return new Promise((resolve, reject) => {
    this.$http(option).then(({data}) => {
      if (data && data.code != 0) {
        this.$message(data.msg || '系统异常')
        return
      }
      resolve(data)
    }).catch(err => {
      reject(err)
    })
  })
}

//生成echarts图表
let basOption = {
  barBas(){
    let _config = config()
    return {
      tooltip : {
        trigger: 'axis',
        textStyle: _config.textStyle,
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: { //图例的设置
        show: true, //是否显示图例
        top: '2%',//图例离底部的距离
        right:"5%",
        itemWidth: _config.fontSize, // 图例标记的图形宽度。
        itemHeight: _config.fontSize, // 图例标记的图形高度。
        itemGap: _config.fontSize, // 图例每项之间的间隔。
        textStyle: _config.textStyle,
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '8%',
        top:'20%',
        containLabel: true
      },
    }
  },
  //柱样式
  bar1(){
    let _config = config()
    return {
      main:this.barBas(),
      part:{
        xAxis: {
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            margin:_config.fontSize,
            textStyle:_config.textStyle
          }
        },
        yAxis: {
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle:_config.textStyle
          }
        },
      }
    }
  },
  //柱线样式
  bar2(){
    let _config = config()
    return {
      main:this.barBas(),
      part:{
        xAxis: {
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            margin:_config.fontSize,
            textStyle:_config.textStyle
          }
        },
        yAxis: [
          {
            splitLine: {
              lineStyle: {
                type: 'solid',
                color: 'rgba(146,146,141,0.3)',
                width: 1,
              }
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle:_config.textStyle
            }
          },
          {
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              formatter: "{value} %",
              textStyle:_config.textStyle
            }
          }
        ],
      }
    }
  }
}
function mergeOption(option, type){
  let bas = basOption[type](), ks = Object.keys(bas.part)
  let res = $.extend(true,{}, bas.main, option);
  ks.forEach(k=>{
    if(isObject(res[k])){
      res[k] = $.extend(true, {}, bas.part[k], res[k])
    }else if(isArray(res[k]) && isArray(bas.part[k])){
      for(let i = 0; i < res[k].length; i++){
        res[k][i] = $.extend(true, {}, bas.part[k][i], res[k][i])
      }
    }
    else if(isArray(res[k])){
      for(let i = 0; i < res[k].length; i++){
        res[k][i] = $.extend(true, {}, bas.part[k], res[k][i])
      }
    }
  })
  return res
}
Vue.prototype.initChart = function(id, option, type){
  let $el = isString(id) ? document.getElementById(id) : id
  type = type || 'bar1'
  let option1 = mergeOption(option, type)
  let myChart=echarts.init($el)
  myChart.setOption(option1)
  window.onresize = myChart.resize
  return myChart
}


export function convertData(data){


}
