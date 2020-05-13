<template>
  <div id="index">
    <div class = "chart_main">
    <el-row>
      <el-col :span="7">
        <el-row>
          <el-col :span="24">
            <div class = "ind_left">
              <div class="pop_type_item">
                <div class="pop_type_icon fa_bg_1"><i class="fa fa-user fa-fw"></i></div>
                <h3 class="pop_type_title">常住人口</h3>
                <el-row>
                  <el-col :span="10">
                    <p class="pop_type_val">{{leftIndex.popu_total1}}<span class="pop_type_unit">万人</span></p>
                  </el-col>
                  <el-col :span="14">
                    <span class="pop_type_last">同比上周</span>
                    <span class="pop_type_prop" :class = "leftIndex.popu_rate1 >= 0 ?'up':'dn'">
                      <i class="arr_icon" :class = "leftIndex.popu_rate1 >= 0 ?'icon-upArr':'icon-dnArr'"></i>
                      {{leftIndex.popu_rate1}}%
                    </span>
                  </el-col>
                </el-row>
                <div class="pop_type_frIcon icon-dec-line"></div>
              </div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class = "ind_left">
              <div class="pop_type_item">
                <div class="pop_type_icon fa_bg_2"><i class="fa fa-user fa-fw"></i></div>
                <h3 class="pop_type_title">户籍人口</h3>
                <el-row>
                  <el-col :span="10">
                    <p class="pop_type_val">{{leftIndex.popu_total2}}<span class="pop_type_unit">万人</span></p>
                  </el-col>
                  <el-col :span="14">
                    <span class="pop_type_last">同比上周</span>
                    <span class="pop_type_prop" :class = "leftIndex.popu_rate2 >= 0 ?'up':'dn'">
                      <i class="arr_icon" :class = "leftIndex.popu_rate2 >= 0 ?'icon-upArr':'icon-dnArr'"></i>
                      {{leftIndex.popu_rate2}}%
                    </span>
                  </el-col>
                </el-row>
                <div class="pop_type_frIcon icon-dec-line"></div>
              </div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class = "ind_left">
              <div class="pop_type_item">
                <div class="pop_type_icon fa_bg_3"><i class="fa fa-user fa-fw"></i></div>
                <h3 class="pop_type_title">流动人口</h3>
                <el-row>
                  <el-col :span="10">
                    <p class="pop_type_val">{{leftIndex.popu_total3}}<span class="pop_type_unit">万人</span></p>
                  </el-col>
                  <el-col :span="14">
                    <span class="pop_type_last">同比上周</span>
                    <span class="pop_type_prop" :class = "leftIndex.popu_rate3 >= 0 ?'up':'dn'">
                      <i class="arr_icon" :class = "leftIndex.popu_rate3 >= 0 ?'icon-upArr':'icon-dnArr'"></i>
                      {{leftIndex.popu_rate3}}%
                    </span>
                  </el-col>
                </el-row>
                <div class="pop_type_frIcon icon-dec-line"></div>
              </div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class = "ind_left">
              <div class="pop_type_item">
                <div class="pop_type_icon fa_bg_4"><i class="fa fa-user fa-fw"></i></div>
                <h3 class="pop_type_title">劳动力人口比例</h3>
                <el-row>
                  <el-col :span="10">
                    <p class="pop_type_val">{{leftIndex.proportion}}<span class="pop_type_unit">%</span></p>
                  </el-col>
                  <el-col :span="14">
                    <span class="pop_type_last">同比上周</span>
                    <span class="pop_type_prop" :class = "leftIndex.yty_growth4 >= 0 ?'up':'dn'">
                      <i class="arr_icon" :class = "leftIndex.yty_growth4 >= 0 ?'icon-upArr':'icon-dnArr'"></i>
                      {{leftIndex.yty_growth4}}%
                    </span>
                  </el-col>
                </el-row>
                <div class="pop_type_frIcon icon-dec-line"></div>
              </div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class = "ind_left">
              <div class="pop_type_item">
                <div class="pop_type_icon fa_bg_5"><i class="fa fa-user fa-fw"></i></div>
                <h3 class="pop_type_title">老龄人口比</h3>
                <el-row>
                  <el-col :span="10">
                    <p class="pop_type_val">{{leftIndex.yty_growth}}<span class="pop_type_unit">%</span></p>
                  </el-col>
                  <el-col :span="14">
                    <span class="pop_type_last">同比上周</span>
                    <span class="pop_type_prop" :class = "leftIndex.pct_rate >= 0 ?'up':'dn'">
                      <i class="arr_icon" :class = "leftIndex.pct_rate >= 0 ?'icon-upArr':'icon-dnArr'"></i>
                      {{leftIndex.pct_rate}}%
                    </span>
                  </el-col>
                </el-row>
                <div class="pop_type_frIcon icon-dec-line"></div>
              </div>
            </div>
          </el-col>
          <el-col :span="24">
            <div class = "ind_left">
              <div class="pop_type_item">
                <div class="pop_type_icon fa_bg_6"><i class="fa fa-user fa-fw"></i></div>
                <h3 class="pop_type_title">常住人口年龄中位数</h3>
                <el-row>
                  <el-col :span="10">
                    <p class="pop_type_val">{{leftIndex.middle_cnt}}<span class="pop_type_unit">%</span></p>
                  </el-col>
                </el-row>
                <div class="pop_type_frIcon icon-dec-line"></div>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="10">
        <div class = "ind_center" id="ind_chart_map"></div>
      </el-col>
      <el-col :span="7">
        <el-col :span="24">
          <dc-panel title="户籍人口及增长率">
            <div id="pop_bar_1" class="pop_chart_fr"></div>
          </dc-panel>
        </el-col>
        <el-col :span="24">
          <dc-panel title="常住人口及增长率">
            <div id="pop_bar_2" class="pop_chart_fr"></div>
          </dc-panel>
        </el-col>
        <el-col :span="24">
          <dc-panel title="流动人口及增长率">
            <div id="pop_bar_3" class="pop_chart_fr"></div>
          </dc-panel>
        </el-col>
      </el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
  import {config} from '@/utils/chartConfig.js';
  import hainan from '../../static/js/json/hainan.json';
  export default {
    name:"index",
    components: {
    },
    data(){
      return{
        pop_month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        pop_hou_bar:[190,118,172,176,223,84,111,90,94,241,100,110],
        pop_hou_line:[164,218,72,76,180,184,86,190,94,222,100,110],
        pop_fix_bar:[190,118,172,176,223,84,111,90,94,241,100,110],
        pop_fix_line:[164,218,72,76,180,184,86,190,94,222,100,110],
        pop_flow_bar:[190,118,172,176,223,84,111,90,94,241,100,110],
        pop_flow_line:[164,218,72,76,180,184,86,190,94,222,100,110],
        nameB: ['户籍人口','常住人口','流动人口'],
        nameL: '同比增长率',
        tableData:[
          {region:'海口市',coor:[110.326837,20.031624],code:460100000000},
          {region:'三亚市',coor:[109.524255,18.256929],code:460200000000},
          {region:'三沙市',coor:[112.351689,16.838364],code:460300000000},
          {region:'儋州市',coor:[109.565074,19.533091],code:460400000000},
          {region:'五指山市',coor:[109.52483,18.780731],code:469001000000},
          {region:'文昌市',coor:[110.932715,19.616634],code:469005000000},
          {region:'琼海市',coor:[110.480832,19.255009],code:469002000000},
          {region:'万宁市',coor:[110.396559,18.802845],code:469006000000},
          {region:'东方市',coor:[108.65629,19.100448],code:469007000000},
          {region:'定安县',coor:[110.359209,19.683308],code:469021000000},
          {region:'屯昌县',coor:[110.108546,19.357035],code:469022000000},
          {region:'澄迈县',coor:[110.010062,19.744893],code:469023000000},
          {region:'临高县',coor:[109.688244,19.916212],code:469024000000},
          {region:'白沙黎族自治县',coor:[109.455171,19.233017],code:469025000000},
          {region:'昌江黎族自治县',coor:[109.063039,19.30236],code:469026000000},
          {region:'乐东黎族自治县',coor:[109.179933,18.756966],code:469027000000},
          {region:'陵水黎族自治县',coor:[110.042739,18.512332],code:469028000000},
          {region:'保亭黎族自治县',coor:[109.706931,18.647458],code:469029000000},
          {region:'琼中黎族自治县',coor:[109.846811,19.038617],code:469030000000}
        ],
        leftIndex:{"pct_rate":"13.77","popu_rate3":0,"proportion":"32.46","yty_growth4":"","popu_total1":1034.99,"popu_rate2":0,"yty_growth":"13.77","popu_rate1":0.01,"popu_total2":883.62,"middle_cnt":37,"popu_total3":149},
      }
    },
    mounted () {
      this.pop_bar1_data()
      this.pop_bar2_data()
      this.pop_bar3_data()
      this.ind_chart_map_data ()
      this.left_index()
    },
    methods: {
      left_index(){
        this.$get("/t01liqdpopu/leftIndex").then(data => {
          this.leftIndex = data.list[0];
        })
      },
      pop_bar1_data(){
        this.$get("/t01housdrgstpopugrowrate/select").then(data => {
          this.pop_bar1(data.list);
        })
      },
      pop_bar1(data){
        var xData = [];
        var data1 = [];
        var data2 = [];
        var data3 = [];
        for (var i = 0; i < data.length; i++) {
          xData.push(data[i].dateStat)
          data1.push(data[i].popuTotal)
          data2.push(data[i].ytyGrowth)
          var tmp = {}
          tmp.symbolPosition = 'end'
          tmp.value = data[i].popuTotal;

          data3.push(tmp)
        }
        var barWidth = $("#pop_bar_1").width()/data.length*0.3
        var pop_bar=echarts.init(document.getElementById('pop_bar_1'));
        var option = {
          tooltip : {
            trigger: 'axis',
            textStyle: config().textStyle,
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function(params) {
              var result = params[2].name
              result += '<br/>'+params[2].seriesName + '：' + params[2].data+
                "万人</br>" + params[3].seriesName + '：' + params[3].data+' %';
              return result
            }
              },
          legend: { //图例的设置
            show: true, //是否显示图例
            //icon: 'circle',//图例形状，示例为原型
            top: '2%',//图例离底部的距离
            right:"5%",
            itemWidth: config().fontSize, // 图例标记的图形宽度。
            itemHeight: config().fontSize, // 图例标记的图形高度。
            itemGap: config().fontSize, // 图例每项之间的间隔。
            textStyle: config().textStyle,
            data: ['户籍人口', '同比增长率'],//图例的名称数据
          },
          grid: {
            left: '5%',
            right: '5%',
            bottom: '8%',
            top:'20%',
            containLabel: true
          },
          xAxis: {
            data: xData,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              margin:config().fontSize,
              textStyle:config().textStyle
            }
          },
          yAxis: [{
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
              textStyle:config().textStyle
            }
          },{
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
              textStyle:config().textStyle
            }
          }],
          series: [{
            name: '',
            type: 'pictorialBar',
            symbolSize: [barWidth,  barWidth*0.6],
            symbolOffset: [0, -barWidth*0.3],
            z: 12,
            itemStyle: {
              normal: {
                color: '#14b1eb'
              }
            },
            data: data3
          }, {
            name: '',
            type: 'pictorialBar',
            symbolSize: [barWidth, barWidth*0.6],
            symbolOffset: [0, barWidth*0.3],
            z: 12,
            itemStyle: {
              normal: {
                color: '#14b1eb'
              }
            },
            data: data1
          }, {
            type: 'bar',
            name:'户籍人口',
            itemStyle: {
              normal: {
                color: '#14b1eb',
                opacity: .7
              }
            },
            //silent: true,
            barWidth: barWidth, // Make series be overlap
            data: data1
          },
            {
              symbolSize: config().fontSize*8,
              symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABRCAYAAABFTSEIAAAACXBIWXMAAAsSAAALEgHS3X78AAAEp0lEQVR42u3cz4sjRRTA8W9Vd3Vn8mMmjj9WQWSRZQ+CsH+B7MnDIgiCd0E8CYJ/gOAIelo8ehUP/gF6WLw5/gMueFP2sIcF0dHd2Z1kknR11fOQZJJJMtlZd03H7HtQpNOTnpn+8Lrm1etmjIig8e/DKoECKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIqoAJudKTr+osZMNPvBUQBHwHsPF9fB9R0DeHMOQ6T6WOrhEzXBM4swDOL0M6CrArRVoq3t2dGUIb9fTvatg8ZZup1PDBgzPmy98mey6qfzjLz2WaWjEUZKEvGyi9nWyneMOvGIyFQo2Sbg4MUSChpU9IeTTUpJdsEajPZOJeJG5uBZj7rLLduWS5dGm6XNLEELOFUFj54ACJCaychkpDSASK3bwsXL0YgVpWJKwM0iy9Zy8HdGru7jvt3Pbu7w0wES7drTwAbjTHMGCsQcIAnYTC1/wRx0wEnl27JNgZI8HQ6Kc1mQq83RNzaMjPzXqDbjTQaJRFLxIyyMSxAXEkWrhrQzAAmo5HOjCQf7jflILxOkohL+aUPgV4vEGNJo+E5PAy02+UIMEwBxo0CPDP7Dg5SnEtpt1PA0e87XO25FOoh8IYIH2Y5b45RzGAQBiIltZoHxqMcjbksXAVgdc2EQMYzzzdotyeZWKuleULXJtwT4SODfC2QCWR+IF9KnjuX1Xbo99Op7LVE8iXlz0YBTk5SyLEEjo5OLuccEoFUvHfO+reuUPx4zftXAIcx1hdcF+/TvFab4A0Bs0VwqyhpVnkJT89/Q4DDQ0e77YCMwIUsFMeFZD856699URRvX4nxE4A/jbnxXp7v4Zw3ReGNSDHI8wFQjIafuoyn58L/fB6sth/Ybg9fez2TRC6QZcZYvgHsazF+MP7YCyLXcM7gvSXLDGBqYDg+NhwdmSpPoTrAkub0W+f4FSB1fDucIunMHSLpO8WAH0rSy8u+19MBCHB4OHzd2pI+CEUhpigEiN+l6WcdY252jLn5s7Wf472ImPcN8pUl/tEHoV4XWq1Ke4KrLmPsTA3oODpytFoOyJKSyzHyMSIxteWngMW5cSEdDJQUhTdZVgxOz3/+jFJm4+bA2e5JpNU6WZ4Fw99JwnWMKccwpeddP+B7GZTNUPKqybJy0O+Hs1YfMz9swwvpB8fbGDG0GuGkkK7V0hxSmZQpABI8l2z0v3sJf50qpAMJCd2qCulql3LD1lRGQjm7lEsDz0rkxTQOfiPPxUBcuJTbbhss/Y1eyi3NwsmKInmkZsKk5gtPUzNhvp11507CSy/X6XYStpvFudpZw1ZWIOF4Cq6SdtbKbioJyAhRTu3u9yMJXerN+ugvaQQsjcZ8Q3VnZwxlSDhe1lB9GjrSw5b+1avT8+Jw+979nNaOI6U3KpTrWAosxVQmygK4ld8X0ZtK/7eViExD7O1NQPb3T7fsl4/4sBpwYzPwjFbTo95Yl9l9Vd1YN1X/147HebSjary1AHyc5qc+XLQEQx9ve8Kg6xr6hKoCKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIq4JrHP8fEWV8FMTmOAAAAAElFTkSuQmCC',
              name:'同比增长率',
              type: "line",
              yAxisIndex: 1,
              data: data2 ,
              z: 14,
              itemStyle: {
                normal: {
                  borderWidth: 5,
                  color: '#006bff',
                }
              }
            }]
        };
        pop_bar.setOption(option);
        window.onresize = pop_bar.resize;
      },
      pop_bar2_data(){
        this.$get("/t01prmnpopuandgrowrate/select").then(data => {
          //alert(JSON.stringify(data.list))
          this.pop_bar2(data.list);
        })
      },
      pop_bar2(data){
        var xData = [];
        var data1 = [];
        var data2 = [];
        for (var i = 0; i < data.length; i++) {
          xData.push(data[i].dateStat)
          data1.push(data[i].popuTotal)
          data2.push(data[i].ytyGrowth)
        }
        var option = {
          tooltip : {
            formatter: function(params) {
              var result = params[0].name
              result += '<br/>'+params[0].seriesName + '：' + params[0].data+
                "万人</br>" + params[1].seriesName + '：' + params[1].data+' %';
              return result
            }
          },
          legend: {
            data: ['常住人口', '同比增长率'],//图例的名称数据
          },
          xAxis: {
            data: xData,
          },
          yAxis: [{},{}],
          series: [{
            name:'常住人口',
            type: 'bar',
            data: data1,
            barWidth: '40%', //柱子宽度
            //barGap: 1, //柱子之间间距
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#1981F1'
                }, {
                  offset: 1,
                  color: '#59E9E8'
                }]),
                opacity: 1,
              }
            }
          },
            {
              symbolSize: config().fontSize*8,
              symbol: 'image://data:image/png;base64,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',
              name:'同比增长率',
              type: "line",
              yAxisIndex: 1,
              data: data2 ,
              z: 14,
              itemStyle: {
                normal: {
                  borderWidth: 5,
                  color: '#4fff00',
                }
              }
            }]
        };
        this.initChart('pop_bar_2', option, 'bar2')
      },
      pop_bar3_data(){
        this.$get("/t01liqdpopuandgrowrate/select").then(data => {
          //alert(JSON.stringify(data.list))
          this.pop_bar3(data.list);
        })
      },
      pop_bar3(data){
        var xData = [];
        var data1 = [];
        var data2 = [];
        for (var i = 0; i < data.length; i++) {
          xData.push(data[i].dateStat)
          data1.push(data[i].popuTotal)
          data2.push(data[i].ytyGrowth)
        }
        var pop_bar=echarts.init(document.getElementById('pop_bar_3'));
        var option = {
          tooltip : {
            trigger: 'axis',
            textStyle: config().textStyle,
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function(params) {
              //alert(JSON.stringify(params))
              var result = params[0].name
              result += '<br/>'+params[0].seriesName + '：' + params[0].data+
                "万人</br>" + params[2].seriesName + '：' + params[2].data+' %';
              return result
            }
          },
          legend: { //图例的设置
            show: true, //是否显示图例
            //icon: 'circle',//图例形状，示例为原型
            top: '2%',//图例离底部的距离
            right:"5%",
            itemWidth: config().fontSize, // 图例标记的图形宽度。
            itemHeight: config().fontSize, // 图例标记的图形高度。
            itemGap: config().fontSize, // 图例每项之间的间隔。
            textStyle: config().textStyle,
            data: ['流动人口', '同比增长率'],//图例的名称数据
          },
          grid: {
            left: '5%',
            right: '5%',
            bottom: '8%',
            top:'20%',
            containLabel: true
          },
          xAxis: {
            data: xData,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              margin:config().fontSize,
              textStyle:config().textStyle
            }
          },
          yAxis: [{
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
              textStyle:config().textStyle
            }
          },{
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
              textStyle:config().textStyle
            }
          }],
          series: [{
            name:'流动人口',
            data: data1,
            type: 'pictorialBar',
            symbol: 'rect',
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbolClip: true,
            symbolSize: [20,7],
            barWidth: '40%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1, [{
                    offset: 0,
                    color: '#1A89FE'
                  },
                    {
                      offset: 1,
                      color: '#00feff'
                    }
                  ]
                ),
              }
            },
            z: 2
          }, {
            type: 'bar',
            //xAxisIndex: 1,
            barGap: '-100%',
            data: data1,
            barWidth: 30,
            itemStyle: {
              normal: {
                color: '#0F2063',
                barBorderRadius:45,
              }
            },
            z: 1
          },
            {
              symbolSize: config().fontSize*8,
              symbol: 'image://data:image/png;base64,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',
              name:'同比增长率',
              type: "line",
              yAxisIndex: 1,
              data: data2 ,
              z: 14,
              itemStyle: {
                normal: {
                  borderWidth: 5,
                  color: '#fce74a',
                }
              }
            }
          ]
        };
        pop_bar.setOption(option);
        window.onresize = pop_bar.resize;
      },
      ind_chart_map_data(){
        this.$get("/t01prmnpopu/select").then(data => {
          //alert(JSON.stringify(data.list))
          this.ind_chart_map(data.list);
        })
      },
      ind_chart_map(data){
        var ind_chart_map = echarts.init(document.getElementById('ind_chart_map'));
        echarts.registerMap('hainan',  hainan)

        var pd = [];
        var data1 = []
        for (var i = 0; i < data.length; i++) {
          var tmp1 = {}
          for (var j = 0; j < this.tableData.length; j++) {
            if(this.tableData[j].code == data[i].area_code){
               tmp1.name = this.tableData[j].region
            }
          }
          tmp1.value = data[i].popu_total
          tmp1.increment = data[i].popu_total1
          data1.push(tmp1)
        };
        var  option = {
          tooltip: {
            show: true,
            textStyle: config().textStyle,
            formatter: function(params) {
              var str = params.name+'<br/>常住人口：'+params.data.value+' 3人<br/>本月增量：'+
                params.data.increment+' 万人';
              return str;
            }
          },
          visualMap: {
            show:false,
            type: "continuous",
            text: ["高", "低"],
            showLabel: true,
            seriesIndex: [0],
            min: 0,
            // calculable: true,
            max: 200,
            inRange: {
              color: [' #07e7ff', '#034dfe']
            },
            textStyle: config().textStyle,
            bottom: '-5',
            left: 0
          },
          geo: {
            show: true,
            map: 'hainan',
            layoutSize: "300%",
            zoom:5,
            top:'-3%',
            center: [109.76112,19.2472],
            label: {
              normal: {
                show: true,
                textStyle: config().textStyle
              },
              emphasis: {
                show: true,
                textStyle: config().textStyle,
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: 'transparent',
                borderColor: '#02308d',
                borderWidth: 1,
                shadowColor: 'rgba(63, 218, 255, 0.5)',
                shadowBlur: 30
              },
              emphasis: {
                areaColor: '#e2d445',
              }
            }
          },
          series: [{
            name: "mapSer",
            type: "map",
            roam: false,
            geoIndex: 0,
            data: data1
          }, ]
        }

        ind_chart_map.setOption(option);
        window.onresize = ind_chart_map.resize;
      },
    }
  }
</script>
<style lang="scss" scoped>
  #index{
    .ind_left{
      width: 98%;
      height: 14.3vh;
      margin-top: 1vh;
      margin-left: 2%;
      background-image:url('../../static/img/ind_left.png');
      background-repeat: no-repeat;
      background-size: 100% 14.3vh;
    }
    .ind_center{
      height: 91vh;
      width: 100%;
      background-image:url('../../static/img/main_BG.png');
      background-repeat: no-repeat;
      background-size: auto 100%;
      background-position: center;
      margin-top: 1vh;
    }
    .ind_right{
      width: 98%;
      height: 29.6vh;
      margin-top: 1vh;
      margin-right: 2%;
      background-image:url('../../static/img/ind_right.png');
      background-repeat: no-repeat;
      background-size: 100% 29.6vh;
    }
  }
  .pop_type_item {
    padding: 4vh 20vh 0 13vh;
    position: relative;
    height: 10vh;
    .pop_type_icon {
      position: absolute;
      z-index: 1;
      top:4.7vh;
      left: 4.7vh;
      width: 4.7vh;
      height: 4.7vh;
      border-radius: 4.7vh;
      line-height: 4.7vh;
      text-align: center;
      .fa { color: #fff;}
    }
    .fa_bg_1 { background: linear-gradient(#8343ff, #7f26ff)}
    .fa_bg_2 { background: linear-gradient(#facb17, #de8b13)}
    .fa_bg_3 { background: linear-gradient(#25fa91, #08d28c)}
    .fa_bg_4 { background: linear-gradient(#dd5246, #cf281c)}
    .fa_bg_5 { background: linear-gradient(#4accfd, #02aeee)}
    .fa_bg_6 { background: linear-gradient(#842af0, #9350e9)}

    .pop_type_title {
      font-size: 1.4vh;
      color: #a1bcfd;
      margin:.5vh 0;
      white-space: nowrap;
      overflow: hidden;
    }
    .pop_type_val {
      font-size: 2.8vh;
      color: #fff;
      white-space: nowrap;
      overflow: hidden;
      .pop_type_unit {
        font-size: 1.8vh;
        color: #fff;
      }
    }
    .pop_type_last {
      font-size: 1.4vh;
      color: #a1bcfd;
      white-space: nowrap;
      overflow: hidden;
    }
    .pop_type_prop {
      font-size: 1.4vh;
      white-space: nowrap;
      overflow: hidden;
      .arr_icon {
        width: 3.6vh;
        height: 3.6vh;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .pop_type_frIcon {
      position: absolute;
      top:4.7vh;
      right: 5vh;
      width: 14vh;
      height: 5vh;
    }
    .up {color: #0ff1a4;}
    .dn {color: #ff584b;}
  }
  .pop_chart_fr { height: 24.5vh}
  .icon-dnArr { background: url("../../static/img/icon-dnArr.svg") no-repeat 100%;}
  .icon-upArr { background: url("../../static/img/icon-upArr.svg") no-repeat 100%;}
  .icon-dec-line { background: url("../../static/img/icon-dec-line.svg") no-repeat; background-size: 100%;}
</style>
