<template>
    <div id="index">
        <div class="chart_main">
            <el-row>
                <el-col :span="7">
                    <div class="charts charts_left" style=" margin-top: 0;">
                        <div class="chart_titles">
                            <div class="chart_title">产业结构</div>
                            <div class="chart_btn">
                                <div class="chart_btnTi chart_btnTi_l" :class="btn1 == 1?'chart_btnTi_act':''" @click = "leftChartCheage1(1)">产业占比
                                </div>
                                <div class="chart_btnTi chart_btnTi_r" :class="btn1 == 2?'chart_btnTi_act':''" @click = "leftChartCheage1(2)">产业趋势
                                </div>
                            </div>
                        </div>
                        <p class="sub_title">三产业占比</p>
                        <div class="chart_item" id="left_chart1">

                        </div>
                    </div>
                    <div class="charts charts_left">
                        <div class="chart_titles">
                            <div class="chart_title">产业规模</div>
                            <div class="chart_btn">
                                <div class="chart_btnTi chart_btnTi_l" :class="btn2 == 1?'chart_btnTi_act':''" @click = "leftChartCheage2(1)">产出占比
                                </div>
                                <div class="chart_btnTi chart_btnTi_r" :class="btn2 == 2?'chart_btnTi_act':''" @click = "leftChartCheage2(2)">产出趋势
                                </div>
                            </div>
                        </div>
                        <p class="sub_title">近五年三产业产出增长趋势</p>
                        <div class="chart_item" id="left_chart2">

                        </div>
                    </div>
                    <div class="charts charts_left">
                        <div class="chart_titles" style="border-bottom: 1px rgba(72,128,187,0.3) solid">
                            <div class="chart_title">产业概览</div>
                        </div>
                        <div class="overview ">
                            <div class="overview_img">
                                <div style="margin: auto;text-align: center;margin-top: 2.5vh">
                                    <el-image class="it_img" :src="img_url"  @click="overviewInfo(img_url)">
                                    </el-image>
                                </div>
                            </div>
                            <div class="overview_btn" @click="overviewChange()"></div>
                            <div class="overview_value" id="overview_pie"></div>
                        </div>
                        <div class="overview_title">
                            <div>{{overview_name}}</div>
                            <div>产业链完整度</div>
                        </div>
                        <div class="btn_line">
                            <div :class="line_act == 0?'line_act':''"></div>
                            <div :class="line_act == 1?'line_act':''"></div>
                            <div :class="line_act == 2?'line_act':''"></div>
                            <div :class="line_act == 3?'line_act':''"></div>
                            <div :class="line_act == 4?'line_act':''"></div>
                            <div :class="line_act == 5?'line_act':''"></div>
                            <div :class="line_act == 6?'line_act':''"></div>
                            <div :class="line_act == 7?'line_act':''"></div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="10">
                    <div class="top_btn">
                        <div class="btn_text" :class="map_ind == 0?'btn_text_act':''" @click="industryChange(0)">
                            <div>
                                <div class="btn_border bdr1">
                                </div>
                                <div class="btn_border bdr2">
                                </div>
                            </div>
                            <div style="width: 14.2vh">
                                <p class="btn_qu"></p>
                                <span class="btn_name">第一产业</span>
                            </div>
                            <div>
                                <div class="btn_border bdr3">
                                </div>
                                <div class="btn_border bdr4">
                                </div>
                            </div>
                        </div>
                        <div class="btn_text" :class="map_ind == 1?'btn_text_act':''" @click="industryChange(1)">
                            <div>
                                <div class="btn_border bdr1">
                                </div>
                                <div class="btn_border bdr2">
                                </div>
                            </div>
                            <div style="width: 14.2vh">
                                <p class="btn_qu"></p>
                                <span class="btn_name">第二产业</span>
                            </div>
                            <div>
                                <div class="btn_border bdr3">
                                </div>
                                <div class="btn_border bdr4">
                                </div>
                            </div>
                        </div>
                        <div class="btn_text" :class="map_ind == 2?'btn_text_act':''" @click="industryChange(2)">
                            <div>
                                <div class="btn_border bdr1">
                                </div>
                                <div class="btn_border bdr2">
                                </div>
                            </div>
                            <div style="width: 14.2vh">
                                <p class="btn_qu"></p>
                                <span class="btn_name">第三产业</span>
                            </div>
                            <div>
                                <div class="btn_border bdr3">
                                </div>
                                <div class="btn_border bdr4">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="charts_center" id="main_chart"></div>
                    <div class="line_date">
                        <div style="text-align: center;margin: auto;display: flex">
                            <div v-for="(item, index) in dateList"  :key = "item.date" class="date_it">
                                <div :class="index == pointInd?'date_point_act':''" class = "date_point" @click = "mapChange(index)">
                                    <div class="date_point1">
                                        <div class="date_point2">
                                            <div class="date_value">{{item.date}}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="date_line" :style="index==(dateList.length-1)?date_style1:date_style"></div>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="7">
                    <div class="charts charts_right">
                        <div class="chart_titles" style="border-bottom: 1px rgba(72,128,187,1) solid">
                            <div class="chart_title">产业PMI</div>
                        </div>
                        <p class="sub_title">产业当前PMI指数</p>
                        <div class="right_chart1">
                            <div style="display: flex">
                                <div class="right_chart1_tit tit_up">
                                    <span>增长型</span>
                                    <span>制造业</span>
                                </div>
                                <div class="it_progress">
                                    <el-progress class="progress_up" :percentage="70"></el-progress>
                                </div>
                            </div>
                            <div style="display: flex">
                                <div class="right_chart1_tit tit_down">
                                    <span>衰退型</span>
                                    <span>非制造业</span>
                                </div>
                                <div class="it_progress">
                                    <el-progress class="progress_down" :percentage="32"></el-progress>
                                </div>
                            </div>
                        </div>
                        <div class="right_chart2">
                            <p class="sub_title">企业规模PMI指数变化趋势</p>
                            <div id="right_chart1" class="right_chart"></div>
                        </div>
                        <div class="right_chart3">
                            <p class="sub_title">制造业分类指数趋势</p>
                            <div id="right_chart2" class="right_chart"></div>
                        </div>
                        <div class="right_chart4">
                            <p class="sub_title">近5年产业PMI</p>
                            <div id="right_chart3" class="right_chart" style="border: 0"></div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import car from '../assets/img/development/car.png';
    import dianlu from '../assets/img/development/dianlu.png';
    import guangdianzi from'../assets/img/development/guangdianzi.png';
    import hangkong from '../assets/img/development/hangkong.png';
    import jiankang from '../assets/img/development/jiankang.png';
    import shuzi from '../assets/img/development/shuzi.png';
    import xinnengyuan from'../assets/img/development/xinnengyuan.png';
    import zhineng from '../assets/img/development/zhineng.png';
    import dot_1 from'../assets/img/industrial/dot-1.png';
    import echarts from 'echarts';
    import {config} from '../utils/chartConfig'
    import wuhan from '../utils/wuhan.json';
    import $ from 'jquery';

    export default {
        name: "index",
        components: {},
        data() {
            return {
                btn1: 1,
                btn2:2,
                line_act: 0,

                img_url: car,
                map_ind: 0,
                dateList: [{id: 0, date: '2016'}, {id: 1, date: '2017'}, {id: 2, date: '2018'}, {id: 3, date: '2019'}, {id: 4, date: '2020'}],
                date_style: 'width:200px',
                date_style1: 'width:0px',
                pointInd: 0,
                overview_name: '',
                img_list: [car, dianlu, guangdianzi, hangkong, jiankang, shuzi, xinnengyuan, zhineng],
                overviewValue: [{name: '汽车产业', value: 75},
                    {name: '集成电路产业', value: 63},
                    {name: '光电子信息产业', value: 78},
                    {name: '航空航天产业', value: 55},
                    {name: '大健康产业', value: 41},
                    {name: '数字产业', value: 89},
                    {name: '新能源与新材料产业', value: 91},
                    {name: '智能制造及高端装备产业', value: 34}],
                tableData: [
                    {region: '黄陂区', coor: [114.375967,30.889105], code: 460100000000,value:123},
                    {region: '新洲区', coor: [114.803704,30.849429], code: 460100000000,value:321},
                    {region: '东西湖区', coor: [114.1483,30.626937], code: 460100000000,value:211},
                    {region: '蔡甸区', coor: [114.022969,30.588147], code: 460100000000,value:89},
                    {region: '汉南区', coor: [114.087359,30.33812], code: 460100000000,value:44},
                    {region: '江夏区', coor: [114.357569,30.267278], code: 460100000000,value:12},
                    {region: '武昌区', coor: [114.323075,30.562278], code: 460100000000,value:217},
                    {region: '汉阳区', coor: [114.232238,30.561282], code: 460100000000,value:165},
                    {region: '青山区', coor: [114.431159,30.6508], code: 460100000000,value:111},

                ],
            }
        },
        mounted() {
            this.date_style = 'width:' + $('.line_date').width() / (this.dateList.length - 1) * 0.7 + 'px'
            this.img_url = this.img_list[this.line_act]
            this.overview_name = this.overviewValue[this.line_act].name
            this.overview_pie(this.overviewValue[0].value)
            setInterval(() => {
                if(this.$route.path == '/index'){
                    this.overviewChange()
                }
            }, 8000)
            this.left_chart1()
            this.left_chart2()
            this.right_chart1()
            this.right_chart2()
            this.right_chart3()
            this.main_chart()
        },
        methods: {
            mapChange(val){
                this.pointInd = val
            },
            industryChange(val) {
                this.map_ind = val
            },
            overviewInfo(img){
                if(img == this.img_list[0]){
                    this.$router.push('/car-development')
                }
            },
            overviewChange() {
                if (this.line_act == 7) {
                    this.line_act = 0
                } else {
                    this.line_act++
                }
                this.img_url = this.img_list[this.line_act]
                this.overview_pie(this.overviewValue[this.line_act].value)
                this.overview_name = this.overviewValue[this.line_act].name
            },
            overview_pie(data) {
                var chart = echarts.init(document.getElementById('overview_pie'));
                var max = 100; //满刻度大小
                var option = {
                    title: {
                        text: data + '%',
                        top: '40%',
                        left: 'center',
                        textStyle: {
                            color: '#fff',
                            fontSize: config().fontSize * 1.77777738
                        }
                    },
                    "color": ["#fff", 'rgba(255,255,255,.5)', 'rgba(255,255,255,.2)'],
                    "series": [
                        {
                            "type": "pie",
                            "center": ["50%", "50%"],
                            "radius": ["58%", "68%"],
                            "hoverAnimation": false,

                            "data": [{
                                "name": "",
                                "value": data,
                                "itemStyle": {
                                    "normal": {
                                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            "offset": 0,
                                            "color": '#fff'
                                        }, {
                                            "offset": 0.1,
                                            "color": '#66dffc'
                                        }, {
                                            "offset": 0.2,
                                            "color": '#0099ff'
                                        }, {
                                            "offset": 0.5,
                                            "color": '#0099ff'
                                        }, {
                                            "offset": 0.7,
                                            "color": '#0099ff'
                                        }, {
                                            "offset": 0.9,
                                            "color": '#66dffc'
                                        }, {
                                            "offset": 1,
                                            "color": '#fff'
                                        }]),
                                    }
                                },
                                "label": {
                                    "show": false,
                                },
                                labelLine: {
                                    show: false,
                                    emphasis: {
                                        show: false
                                    }
                                }
                            },
                                { //画剩余的刻度圆环
                                    "name": "",
                                    "value": max - data,
                                    "itemStyle": {
                                        "normal": {
                                            color: '#1E5484'
                                        }
                                    },
                                    "label": {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false,
                                        emphasis: {
                                            show: false
                                        }
                                    },
                                }
                            ]
                        },
                        {
                            "type": "pie",
                            "center": ["50%", "50%"],
                            "radius": ["59%", "59%"],
                            "hoverAnimation": false,

                            "data": [{
                                "name": "",
                                "value": data,
                                "itemStyle": {
                                    "normal": {
                                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            "offset": 0,
                                            "color": '#fff'
                                        }, {
                                            "offset": 0.1,
                                            "color": '#66dffc'
                                        }, {
                                            "offset": 0.2,
                                            "color": '#0099ff'
                                        }, {
                                            "offset": 0.5,
                                            "color": '#0099ff'
                                        }, {
                                            "offset": 0.7,
                                            "color": '#0099ff'
                                        }, {
                                            "offset": 0.9,
                                            "color": '#66dffc'
                                        }, {
                                            "offset": 1,
                                            "color": '#fff'
                                        }]),
                                    }
                                },
                                "label": {
                                    "show": false,
                                },
                                labelLine: {
                                    show: false,
                                    emphasis: {
                                        show: false
                                    }
                                }
                            },
                                {//画中间的图标
                                    "name": "",
                                    "value": 0,
                                    "label": {
                                        position: 'inside',
                                        backgroundColor: {
                                            image: 'data:'+dot_1
                                        },
                                        width: config().fontSize*2.5,
                                        height: config().fontSize*2.5,
                                        borderRadius: config().fontSize*2.5,
                                        padding: config().fontSize*2.5,
                                    }
                                },
                                { //画剩余的刻度圆环
                                    "name": "",
                                    "value": max - data,
                                    "itemStyle": {
                                        "normal": {
                                            color: '#1E5484'
                                        }
                                    },
                                    "label": {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false,
                                        emphasis: {
                                            show: false
                                        }
                                    },
                                }
                            ]
                        },
                        {
                            "type": "pie",
                            "center": ["50%", "50%"],
                            "radius": ["50%", "54%"],
                            "hoverAnimation": false,
                            "data": [{
                                "name": "",
                                "value": 1,
                                "itemStyle": {
                                    "normal": {
                                        "color": '#54dcfc',
                                    }
                                },
                                "label": {
                                    "show": false,
                                },
                                labelLine: {
                                    show: false,
                                    emphasis: {
                                        show: false
                                    }
                                }
                            }
                            ]
                        },
                    ]
                }
                chart.setOption(option, true)
                window.onresize = chart.resize;

            },
            leftChartCheage1(val){
                this.btn1 = val
            },
            leftChartCheage2(val){
                this.btn2 = val
            },
            left_chart1() {
                var chart = echarts.init(document.getElementById('left_chart1'));
                var option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        icon: 'circle',
                        right:'3%',
                        top:'30%',
                        itemGap: config().fontSize,
                        itemWidth: config().fontSize,
                        itemHeight: config().fontSize,
                        textStyle: {
                            color:'#8CD1FA',
                            fontSize:config().fontSize
                        },
                        data: ['第一产业', '第二产业', '第三产业'],
                    },
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        radius: '70%',
                        roseType: 'radius',
                        center: ['40%', '50%'],
                        data: [{
                            value: 285,
                            name: '第一产业',
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: '#27E5FE'
                                }, {
                                    offset: 1,
                                    color: '#0498FF'
                                }])
                            },
                        },
                            {
                                value: 410,
                                name: '第二产业',
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                        offset: 0,
                                        color: '#12D661'
                                    }, {
                                        offset: 1,
                                        color: '#2AF7A7'
                                    }])
                                },
                            },
                            {
                                value: 274,
                                name: '第三产业',
                                itemStyle: {
                                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                        offset: 0,
                                        color: '#FFB400'
                                    }, {
                                        offset: 1,
                                        color: '#FFB400'
                                    }])
                                },
                            }
                        ],
                        label: {
                            normal: {
                                formatter: function (val) {
                                    return val.percent + '%'
                                },
                                textStyle:{
                                    color:'#fff',
                                    fontSize:config().fontSize
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: 'rgb(98,137,169)',
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20,

                            }
                        },
                        itemStyle: {
                            normal: {
                                shadowColor: 'rgba(0, 0, 0, 0.8)',
                                shadowBlur: 50,
                            }
                        }
                    }]
                };
                chart.setOption(option, true)
                window.onresize = chart.resize;
            },
            left_chart2() {
                var chart = echarts.init(document.getElementById('left_chart2'));
                var option = {
                    tooltip: {
                        trigger: 'axis',
                    },
                    legend: {
                        type: 'scroll',
                        icon: 'circle',
                        left:'3%',
                        top:'3%',
                        itemWidth: config().fontSize,
                        itemHeight: config().fontSize,
                        textStyle: {
                            color:'#8CD1FA',
                            fontSize:config().fontSize
                        },
                        data: ['第一产业','第二产业','第三产业',],
                    },
                    grid: {
                        top: '22%',
                        left: '2%',
                        right: '4%',
                        bottom: '6%',
                        containLabel: true
                    },
                    xAxis: [{
                        axisLabel: {
                            //rotate:45,//斜体字可不用
                            textStyle: config().textStyle
                        },
                        boundaryGap: false,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                //type: 'dashed',
                                color: 'rgba(101,114,149,0.3)'
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                //type: 'dashed',
                                color: 'rgba(101,114,149,0.3)'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        data: ['2016', '2017', '2018', '2019', '2020'],

                    }],

                    yAxis: [{
                        type: 'value',
                        nameTextStyle: {
                            color: '#fff',
                            fontSize: config().fontSize,
                            padding: [0, 0, 0, -config().fontSize * 2.5],
                        },
                        axisTick: {
                            show: false
                        },
                        splitNumber:5,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                //type: 'dashed',
                                color: 'rgba(101,114,149,0.3)'
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                //type: 'dashed',
                                color: 'rgba(101,114,149,0.3)'
                            }
                        },//设置横线样式
                        axisLabel: {
                            formatter: "{value}",
                            textStyle: config().textStyle
                        },
                    }],
                    series: [
                        {
                            name: '第一产业',
                            type: 'line',
                           smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: config().fontSize,
                            lineStyle: {
                                normal: {
                                    color: "#0696FC",
                                    // shadowColor: 'rgba(0, 0, 0, .3)',
                                    // shadowBlur: 0,
                                    // shadowOffsetY: 5,
                                    // shadowOffsetX: 5,
                                },
                            },
                            itemStyle: {
                                color: "#0696FC",
                                borderColor: 'rgba(6,150,252,0.3)',
                                borderWidth: config().fontSize/1.5
                            },
                            tooltip: {
                                show: false
                            },
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(6,150,252,0.3)'
                                    },
                                        {
                                            offset: 1,
                                            color: 'rgba(6,150,252,0)'
                                        }
                                    ], false),
                                    shadowColor: 'rgba(6,150,252,0.9)',
                                    shadowBlur: 20
                                }
                            },
                            data: [281.55, 398.35, 214.02, 179.55, 289.57,],
                        },
                        {
                            name: '第二产业',
                            type: 'line',
                            smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: config().fontSize,
                            lineStyle: {
                                normal: {
                                    color: "#2AF7A7",
                                    // shadowColor: 'rgba(0, 0, 0, .3)',
                                    // shadowBlur: 0,
                                    // shadowOffsetY: 5,
                                    // shadowOffsetX: 5,
                                },
                            },
                            itemStyle: {
                                color: "#2AF7A7",
                                borderColor: 'rgba(42,247,167,0.3)',
                                borderWidth: config().fontSize/1.5
                            },
                            tooltip: {
                                show: false
                            },
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(42,247,167,0.3)'
                                    },
                                        {
                                            offset: 1,
                                            color: 'rgba(42,247,167,0)'
                                        }
                                    ], false),
                                    shadowColor: 'rgba(42,247,167,0.9)',
                                    shadowBlur: 20
                                }
                            },
                            data: [221.75, 298.35, 114.02, 279.55, 209.57,],
                        },
                        {
                            name: '第三产业',
                            type: 'line',
                            smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: config().fontSize*0.8,
                            lineStyle: {
                                normal: {
                                    color: "#FFF100",
                                },
                            },
                            itemStyle: {
                                color: "rgba(255,241,0,1)",
                                borderColor: 'rgba(255,241,0,0.3)',
                                borderWidth: config().fontSize/1.5
                            },
                            tooltip: {
                                show: false
                            },
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(255,241,0,0.3)'
                                    },
                                        {
                                            offset: 1,
                                            color: 'rgba(255,241,0,0)'
                                        }
                                    ], false),
                                    shadowColor: 'rgba(255,241,0,1)',
                                    shadowBlur: 20
                                }
                            },
                            data: [502.84, 205.97, 332.79, 281.55, 398.35,]
                        },
                    ]
                };
                chart.setOption(option, true)
                window.onresize = chart.resize;
            },
            right_chart1() {
                var chart = echarts.init(document.getElementById('right_chart1'));
                var option = {
                    tooltip: {
                        trigger: 'axis',
                    },
                    legend: {
                        type: 'scroll',
                        icon: 'circle',
                        left:'3%',
                        top:'3%',
                        itemWidth: config().fontSize,
                        itemHeight: config().fontSize,
                        textStyle: {
                            color:'#8CD1FA',
                            fontSize:config().fontSize
                        },
                        data: ['大型企业','中型企业','小型企业'],
                    },
                    grid: {
                        top: '22%',
                        left: '1%',
                        right: '1%',
                        bottom: '6%',
                        containLabel: true
                    },
                    xAxis: [{
                        axisLabel: {
                            //rotate:45,//斜体字可不用
                            textStyle: config().textStyle
                        },
                        boundaryGap: false,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                //type: 'dashed',
                                color: 'rgba(101,114,149,0.3)'
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                //type: 'dashed',
                                color: 'rgba(101,114,149,0.3)'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        data: ['2016', '2017', '2018', '2019', '2020'],

                    }],
                    yAxis: [{
                        type: 'value',
                        nameTextStyle: {
                            color: '#fff',
                            fontSize: config().fontSize,
                            padding: [0, 0, 0, -config().fontSize * 2.5],
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                //type: 'dashed',
                                color: 'rgba(101,114,149,0.3)'
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                //type: 'dashed',
                                color: 'rgba(101,114,149,0.3)'
                            }
                        },//设置横线样式
                        axisLabel: {
                            formatter: "{value}",
                            textStyle: config().textStyle
                        },
                    }],
                    series: [
                        {
                            name: '大型企业',
                            type: 'line',
                            smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: config().fontSize,
                            lineStyle: {
                                normal: {
                                    color: "#0598FE",
                                    // shadowColor: 'rgba(0, 0, 0, .3)',
                                    // shadowBlur: 0,
                                    // shadowOffsetY: 5,
                                    // shadowOffsetX: 5,
                                },
                            },
                            itemStyle: {
                                color: "#0598FE",
                            },
                            data: [281.55, 398.35, 214.02, 179.55, 289.57,],
                        },
                        {
                            name: '中型企业',
                            type: 'line',
                            smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: config().fontSize*0.8,
                            lineStyle: {
                                normal: {
                                    color: "#2AF7A7",
                                },
                            },
                            itemStyle: {
                                color: '#2AF7A7',
                            },
                            data: [502.84, 205.97, 332.79, 281.55, 398.35,]
                        },
                        {
                            name: '小型企业',
                            type: 'line',
                            smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: config().fontSize*0.8,
                            lineStyle: {
                                normal: {
                                    color: "#FFF100",
                                },
                            },
                            itemStyle: {
                                color: "#FEF000",
                            },
                            tooltip: {
                                show: false
                            },
                            data: [202.84, 305.97, 132.79, 181.55, 298.35,]
                        },
                        {
                            name: '',
                            type: 'line',
                            smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: 0,
                            lineStyle: {
                                normal: {
                                    type:'dashed',
                                    color: "#FF0000",
                                },
                            },
                            itemStyle: {
                                color: "#FF0000",
                            },
                            data: [200, 200, 200, 200, 200]
                        },
                    ]
                };
                chart.setOption(option, true)
                window.onresize = chart.resize;
            },
            right_chart2() {
                var chart = echarts.init(document.getElementById('right_chart2'));
                var option = {
                    tooltip: {
                        trigger: 'axis',
                    },
                    legend: {
                        //type: 'scroll',
                        icon: 'circle',
                        left:'3%',
                        top:'3%',
                        itemWidth: config().fontSize,
                        itemHeight: config().fontSize,
                        textStyle: {
                            color:'#8CD1FA',
                            fontSize:config().fontSize
                        },
                        data: ['新订单指数','原材料库存指数','供应商配送时间指数','生产指数','从业人员指数'],
                    },
                    grid: {
                        top: '32%',
                        left: '1%',
                        right: '1%',
                        bottom: '6%',
                        containLabel: true
                    },
                    xAxis: [{
                        axisLabel: {
                            //rotate:45,//斜体字可不用
                            textStyle: config().textStyle
                        },
                        boundaryGap: false,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                //type: 'dashed',
                                color: 'rgba(101,114,149,0.3)'
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                //type: 'dashed',
                                color: 'rgba(101,114,149,0.3)'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        data: ['2016', '2017', '2018', '2019', '2020'],

                    }],
                    yAxis: [{
                        type: 'value',
                        nameTextStyle: {
                            color: '#fff',
                            fontSize: config().fontSize,
                            padding: [0, 0, 0, -config().fontSize * 2.5],
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                //type: 'dashed',
                                color: 'rgba(101,114,149,0.3)'
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                //type: 'dashed',
                                color: 'rgba(101,114,149,0.3)'
                            }
                        },//设置横线样式
                        axisLabel: {
                            formatter: "{value}",
                            textStyle: config().textStyle
                        },
                    }],
                    series: [
                        {
                            name: '新订单指数',
                            type: 'line',
                            smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: config().fontSize,
                            lineStyle: {
                                normal: {
                                    color: "#0598FE",
                                    // shadowColor: 'rgba(0, 0, 0, .3)',
                                    // shadowBlur: 0,
                                    // shadowOffsetY: 5,
                                    // shadowOffsetX: 5,
                                },
                            },
                            itemStyle: {
                                color: "#0598FE",
                            },
                            data: [281.55, 398.35, 214.02, 179.55, 289.57,],
                        },
                        {
                            name: '原材料库存指数',
                            type: 'line',
                            smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: config().fontSize*0.8,
                            lineStyle: {
                                normal: {
                                    color: "#2AF7A7",
                                },
                            },
                            itemStyle: {
                                color: '#2AF7A7',
                            },
                            data: [502.84, 205.97, 332.79, 281.55, 398.35,]
                        },
                        {
                            name: '供应商配送时间指数',
                            type: 'line',
                            smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: config().fontSize*0.8,
                            lineStyle: {
                                normal: {
                                    color: "#FFF100",
                                },
                            },
                            itemStyle: {
                                color: "#FEF000",
                            },
                            tooltip: {
                                show: false
                            },
                            data: [202.84, 305.97, 132.79, 181.55, 298.35,]
                        },
                        {
                            name: '生产指数',
                            type: 'line',
                            smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: config().fontSize*0.8,
                            lineStyle: {
                                normal: {
                                    color: "#FF8707",
                                },
                            },
                            itemStyle: {
                                color: "#FF8707",
                            },
                            tooltip: {
                                show: false
                            },
                            data: [302.84, 305.97, 182.79, 171.55, 308.35,]
                        },
                        {
                            name: '从业人员指数',
                            type: 'line',
                            smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: config().fontSize*0.8,
                            lineStyle: {
                                normal: {
                                    color: "#FF4242",
                                },
                            },
                            itemStyle: {
                                color: "#FF4242",
                            },
                            tooltip: {
                                show: false
                            },
                            data: [212.84, 345.97, 102.79, 221.55, 178.35,]
                        },
                        {
                            name: '',
                            type: 'line',
                            smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: 0,
                            lineStyle: {
                                normal: {
                                    type:'dashed',
                                    color: "#FF0000",
                                },
                            },
                            itemStyle: {
                                color: "#FF0000",
                            },
                            data: [200, 200, 200, 200, 200]
                        },
                    ]
                };
                chart.setOption(option, true)
                window.onresize = chart.resize;
            },
            right_chart3() {
                var chart = echarts.init(document.getElementById('right_chart3'));
                var option = {
                    tooltip: {
                        trigger: 'axis',
                    },
                    legend: {
                        type: 'scroll',
                        icon: 'circle',
                        left:'3%',
                        top:'3%',
                        itemWidth: config().fontSize,
                        itemHeight: config().fontSize,
                        textStyle: {
                            color:'#8CD1FA',
                            fontSize:config().fontSize
                        },
                        data: ['制造业','非制造业'],
                    },
                    grid: {
                        top: '22%',
                        left: '1%',
                        right: '1%',
                        bottom: '6%',
                        containLabel: true
                    },
                    xAxis: [{
                        axisLabel: {
                            //rotate:45,//斜体字可不用
                            textStyle: config().textStyle
                        },
                        boundaryGap: false,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                //type: 'dashed',
                                color: 'rgba(101,114,149,0.3)'
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                //type: 'dashed',
                                color: 'rgba(101,114,149,0.3)'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        data: ['2016', '2017', '2018', '2019', '2020'],

                    }],

                    yAxis: [{
                        type: 'value',
                        nameTextStyle: {
                            color: '#fff',
                            fontSize: config().fontSize,
                            padding: [0, 0, 0, -config().fontSize * 2.5],
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                //type: 'dashed',
                                color: 'rgba(101,114,149,0.3)'
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                //type: 'dashed',
                                color: 'rgba(101,114,149,0.3)'
                            }
                        },//设置横线样式
                        axisLabel: {
                            formatter: "{value}",
                            textStyle: config().textStyle
                        },
                    }],
                    series: [
                        {
                            name: '制造业',
                            type: 'line',
                            smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: config().fontSize,
                            lineStyle: {
                                normal: {
                                    color: "#0696FC",
                                    // shadowColor: 'rgba(0, 0, 0, .3)',
                                    // shadowBlur: 0,
                                    // shadowOffsetY: 5,
                                    // shadowOffsetX: 5,
                                },
                            },
                            itemStyle: {
                                color: "#0696FC",
                                borderColor: 'rgba(6,150,252,0.3)',
                                borderWidth: config().fontSize/1.5
                            },
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(6,150,252,0.3)'
                                    },
                                        {
                                            offset: 1,
                                            color: 'rgba(6,150,252,0)'
                                        }
                                    ], false),
                                    shadowColor: 'rgba(6,150,252,0.9)',
                                    shadowBlur: 20
                                }
                            },
                            data: [281.55, 398.35, 214.02, 179.55, 289.57,],
                        },
                        {
                            name: '非制造业',
                            type: 'line',
                            smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: config().fontSize*0.8,
                            lineStyle: {
                                normal: {
                                    color: "#FFF100",
                                },
                            },
                            itemStyle: {
                                color: "rgba(255,241,0,1)",
                                borderColor: 'rgba(255,241,0,0.3)',
                                borderWidth: config().fontSize/1.5
                            },
                            tooltip: {
                                show: false
                            },
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(255,241,0,0.3)'
                                    },
                                        {
                                            offset: 1,
                                            color: 'rgba(255,241,0,0)'
                                        }
                                    ], false),
                                    shadowColor: 'rgba(255,241,0,1)',
                                    shadowBlur: 20
                                }
                            },
                            data: [502.84, 205.97, 332.79, 281.55, 398.35,]
                        },
                        {
                            name: '',
                            type: 'line',
                            smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: 0,
                            lineStyle: {
                                normal: {
                                    type:'dashed',
                                    color: "#FF0000",
                                },
                            },
                            itemStyle: {
                                color: "#FF0000",
                            },
                            data: [200, 200, 200, 200, 200]
                        },
                    ]
                };
                chart.setOption(option, true)
                window.onresize = chart.resize;
            },
            main_chart() {
                var chart = echarts.init(document.getElementById('main_chart'));
                echarts.registerMap('wuhan', wuhan)
                var pd = []
                for (var i = 0; i < this.tableData.length; i++) {
                    var tmp = {}
                    var d = []
                    tmp.name = this.tableData[i].region
                    d.push(this.tableData[i].coor[0], this.tableData[i].coor[1]);
                    d.push(1, 1, this.tableData[i].value)
                    tmp.value = d
                    pd.push(tmp)
                }
                var option = {
                    tooltip: {
                        trigger: 'item',
                        textStyle: config().textStyle,
                        formatter: function (params) {
                            var st = params.value[2] + '</br>老年人口占比：' + params.value[3] + ' %</br>排名：' + params.value[4]
                            return st
                        }
                    },
                    legend: {
                        orient: 'vertical',
                        y: 'bottom',
                        x: 'right',
                        data: ['pm2.5'],
                        textStyle: config().textStyle,
                    },
                    geo: {
                        show: true,
                        map: 'wuhan',
                        aspectScale: 1,
                        zoom: 1,
                        center: [114.300078, 30.61749],
                        label: {
                            normal: {
                                show: true,
                                textStyle: config().textStyle,
                            },
                            emphasis: {
                                show: true,
                                textStyle: config().textStyle,
                            }
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: {
                                    type: 'radial',
                                    x: 0.5,
                                    y: 0.5,
                                    r: 0.8,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(20,60,120,1)' // 0% 处的颜色
                                    }, {
                                        offset: 0.4,
                                        color: 'rgba(20,60,120,0.4)' // 0% 处的颜色
                                    },{
                                        offset: 1,
                                        color: 'rgba(73,196,255,0.5)' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                borderColor: {
                                    type: 'radial',
                                    x: 0.5,
                                    y: 0.5,
                                    r: 0.5,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(73,196,255,1)' // 0% 处的颜色
                                    },{
                                        offset: 0.7,
                                        color: 'rgba(73,196,255,0.6)' // 100% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(73,196,255,0.3)' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                borderWidth: config().fontSize/6,
                                shadowColor: 'rgba(63, 218, 255, 0.5)',
                                shadowBlur: 30
                            },
                            emphasis: {
                                areaColor: '#2B91B7',
                            }
                        }
                    },
                    // visualMap: {
                    //     show: false,
                    //     max: 14,
                    //     min: 1,
                    //     dimension: 4,
                    //     seriesIndex: 0,
                    //     calculable: true,
                    //     inRange: {
                    //         color: ['#ff3800', '#ff4f00', '#ff8c00', '#ffc900', '#e8ff00', '#6dff00', '#00ff23']
                    //     }
                    // },
                    series: [
                        { //城市点位
                            name: 'city',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            symbol: 'circle',
                            symbolSize: function (val) {
                                var size = config().fontSize *val[4] / 48
                                if(size<5){
                                    size = 5
                                }else if(size>20){
                                    size = 20
                                }
                                return size//val[3]*1.5-18
                            },
                            rippleEffect: {
                                brushType: 'stroke'
                            },
                            itemStyle: {
                                normal: {
                                    color: 'yellow',
                                    shadowBlur: 1,
                                    shadowColor: 'yellow'
                                }
                            },
                            zlevel: 9,
                            data: pd,
                        },
                    ]
                };
                chart.setOption(option, true)
                window.onresize = chart.resize;
            },
        }
    }
</script>
<style lang="scss" scoped>
    #index {
        overflow-x:hidden;
        overflow-y:hidden;
        .charts {
            margin-top: 1.7vh;
            border: 1px #426380 solid;
            background: linear-gradient(to left, #2fa6f6, #2fa6f6) left top no-repeat,
            linear-gradient(to bottom, #2fa6f6, #2fa6f6) left top no-repeat,
            linear-gradient(to left, #2fa6f6, #2fa6f6) right top no-repeat,
            linear-gradient(to bottom, #2fa6f6, #2fa6f6) right top no-repeat,
            linear-gradient(to left, #2fa6f6, #2fa6f6) left bottom no-repeat,
            linear-gradient(to bottom, #2fa6f6, #2fa6f6) left bottom no-repeat,
            linear-gradient(to left, #2fa6f6, #2fa6f6) right bottom no-repeat,
            linear-gradient(to left, #2fa6f6, #2fa6f6) right bottom no-repeat;
            background-size: 1px 2vh, 2vh 1px, 1px 2vh, 2vh 1px;
            .chart_titles {
                margin: 0 2vh;
                border-bottom: 1px #4880bb solid;
                height: 5vh;
                display: flex;
                .chart_title {
                    width: 50%;
                    line-height: 5vh;
                    text-align: left;
                    font-size: 2.314815vh;
                    color: #fff;
                    font-weight: 700;
                }
                .chart_btn {
                    width: 49%;
                    border: 1px #0696FC solid;
                    height: 3vh;
                    border-radius: 1.5vh;
                    margin-top: 1vh;
                    display: flex;
                    background-color: rgba(6, 150, 252, 0.2);
                    .chart_btnTi {
                        width: 50%;
                        height: 100%;
                        line-height: 3vh;
                        text-align: center;
                        font-size: 1.851852vh;
                        color: #0696FC;
                        cursor: pointer;
                    }
                    .chart_btnTi_l {
                        border-top-left-radius: 1.5vh;
                        border-bottom-left-radius: 1.5vh;
                    }
                    .chart_btnTi_r {
                        border-top-right-radius: 1.5vh;
                        border-bottom-right-radius: 1.5vh;
                    }
                    .chart_btnTi_act {
                        background-color: #0696FC;
                        color: #fff;
                    }
                }
            }
            .sub_title {
                line-height: 2vh;
                margin-top: 1vh;
                font-size: 1.851852vh;
                text-align: center;
                color: #ffffff;
                font-weight: 600;
            }
            .chart_item {
                width: 96%;
                margin-left: 2%;
                height: 20vh;
            }
            .overview {
                height: 19vh;
                width: 96%;
                margin-left: 2%;
                display: flex;
                .overview_img {
                    width: 48.5%;
                    .it_img {
                        height: 11vh;
                        width: 11vh;
                        cursor: pointer;
                    }
                }
                .overview_btn {
                    width: 3%;
                    height: 16vh;
                    margin-top: 3vh;
                    cursor: pointer;
                    background-image: url('../assets/img/development/xian.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                }
                .overview_value {
                    width: 48.5%;
                    height: 16vh;
                }
            }
            .overview_title {
                position: relative;
                height: 3vh;
                width: 100%;
                top: -4vh;
                display: flex;
                div {
                    width: 50%;
                    line-height: 3vh;
                    font-size: 2.037037vh;
                    text-align: center;
                    color: #fff;
                    font-weight: 600;
                }
            }
            .btn_line {
                width: 90%;
                display: flex;
                margin-top: -1.5vh;
                margin-left: 5%;
                div {
                    width: 12.5%;
                    height: 0.3vh;
                    margin-top: 0.05vh;
                    background-color: #3775A7;
                }
                .line_act {
                    background-color: #32F1FE;
                    margin-top: 0;
                    height: 0.4vh;
                }
            }
        }
        .charts_left {
            width: 94%;
            margin-left: 3%;
            height: 28vh;
        }
        .charts_right {
            width: 94%;
            margin-left: 3%;
            height: 88.4vh;
            margin-top: 0;
            .right_chart1 {
                height: 10vh;
                margin-top: 0.5vh;
                padding-bottom: 0.5vh;
                border-bottom: 1px rgba(72, 128, 187, 1) dashed;
                width: 92%;
                margin-left: 4%;
                .right_chart1_tit {
                    width: 36%;
                    font-size: 1.851852vh;
                    line-height: 4.5vh;
                }
                span:nth-child(2) {
                    padding: 0 0.5vh;
                    font-weight: 600;
                    color: #fff;
                }
                .tit_up {
                    color: rgba(18, 214, 97, 1);
                    span:nth-child(1) {
                        font-size: 1.48145vh;
                        padding: 0 0.5vh;
                        border: 1px rgba(18, 214, 97, 1) solid;
                        border-radius: 0.5vh;
                    }
                }
                .tit_down {
                    color: rgba(255, 66, 66, 1);
                    span:nth-child(1) {
                        font-size: 1.48145vh;
                        padding: 0 0.5vh;
                        border: 1px rgba(255, 66, 66, 1) solid;
                        border-radius: 0.5vh;
                    }
                }
                .it_progress {
                  width: 59%;
                }
            }
            .right_chart {
                width: 92%;
                margin-left: 4%;
                height: 19.5vh;
                border-bottom: 1px rgba(72, 128, 187, 1) dashed;
            }
        }
        .top_btn {
            position: absolute;
            height: 6vh;
            width: 36%;
            left: 32%;
            display: flex;
            .btn_text {
                text-align: center;
                line-height: 3.5vh;
                display: flex;
                color: #71D3FF;
                font-size: 1.85185vh;
                width: 15vh;
                font-weight: 700;
                margin: auto;
                z-index: 1;
                cursor: pointer;
                border-radius: 0.5vh;
                border: 0.1px #4880bb solid;
                background: -moz-linear-gradient(top, #12408C, #2C67CA);
                padding-top: -0.1vh;
                .btn_border {
                    width: 0.8vh;
                    height: 0.8vh;
                }
                .bdr1 {
                    border-top: 0.1vh #fff solid;
                    border-left: 0.1vh #fff solid;
                    border-radius: 0.5vh 0 0 0;
                    margin-top: -0.1vh;
                    margin-left: -0.1vh;
                }
                .bdr2 {
                    border-bottom: 0.1vh #fff solid;
                    border-left: 0.1vh #fff solid;
                    border-radius: 0 0 0 0.5vh;
                    margin-left: -0.1vh;
                    margin-top: 1.8vh;
                }
                .bdr3 {
                    border-top: 0.1vh #fff solid;
                    border-right: 0.1vh #fff solid;
                    border-radius: 0 0.5vh 0 0;
                    margin-top: -0.1vh;
                }
                .bdr4 {
                    border-bottom: 0.1vh #fff solid;
                    border-right: 0.1vh #fff solid;
                    border-radius: 0 0 0.5vh 0;
                    margin-top: 1.8vh;
                }
            }
            .btn_text_act, .btn_text:hover {
                color: #fff;
                background: -moz-linear-gradient(top, #1E70D3, #0498FF);
            }
        }
        .charts_center {
            width: 100%;
            height: 88.4vh;
        }
        .line_date {
            height: 1vh;
            width: 40%;
            position: absolute;
            left: 30%;
            bottom: 6%;
            display: flex;
            text-align: center;
            margin: auto;
            .date_it {
                display: flex;
                .date_point {
                    height: 0.6vh;
                    width: 0.6vh;
                    cursor: pointer;
                    border-radius: 0.5vh;
                    .date_point2 {
                        height: 1vh;
                        width: 1vh;
                        border-radius: 0.5vh;
                        background-color: #0696FC;
                        .date_value {
                            position: absolute;
                            text-align: center;
                            font-size: 1.851852vh;
                            width: 6vh;
                            color: #0696FC;
                            margin-left: -2.5vh;
                            line-height: 3vh;
                            margin-top: 1.3vh;
                        }
                    }
                }
                .date_point_act,.date_point:hover {
                    .date_point1{
                        height: 1.4vh;
                        width: 1.4vh;
                        margin-top: -0.4vh;
                        border-radius: 2vh;
                        padding: 0.2vh;
                        background-color: rgba(6,150,252,0.6);
                        position: absolute;
                        margin-left: -0.45vh;
                    }
                    .date_point2 {
                        height: 0.9vh;
                        width: 0.9vh;
                        border-radius: 1vh;
                        background-color: #fff;
                        border: 0.3vh #0696FC solid;
                        .date_value {
                            top: 0.4vh;
                            position: absolute;
                            text-align: center;
                            font-size: 1.851852vh;
                            width: 6vh;
                            color: #fff;
                            margin-left: -2.5vh;
                            line-height: 3vh;
                            margin-top: 1.3vh;
                        }
                    }
                }
                .date_line {
                    height: 0.2vh;
                    margin-top: 0.4vh;
                    background-color: #0696FC;
                }
            }

        }
    }

    /deep/ .overview_img {
        .el-image__error {
            background-color: transparent;
        }
        .el-image__inner {
            background-color: transparent;
        }
        .el-image__placeholder {
            background-color: transparent;
        }
    }

    /deep/ .it_progress {
        .el-progress {
            line-height: 4vh;
        }
        .el-progress-bar__outer {
            height: 2.6vh !important;
        }
        .el-progress-bar__outer {
            border-radius: 0;
        }
        .el-progress__text {
            font-size: 2vh !important;
        }
        .el-progress-bar__inner {
            height: 2vh;
            margin-top: 0.3vh;
            margin-left: 0.3vh;
            border-radius: 0;
        }
        .el-progress-bar__innerText {
            font-size: 2vh;
            line-height: 2.4vh;
            padding-left: 1vh;
        }
        .progress_up {
            .el-progress__text {
                color: rgba(18, 214, 97, 1);
            }
            .el-progress-bar__outer {
                border: 1px rgba(18, 214, 97, 1) solid;
                background-color: rgba(18, 214, 97, 0.2);
            }
            .el-progress-bar__inner {
                background-color: rgba(18, 214, 97, 1);
            }
        }
        .progress_down {
            .el-progress__text {
                color: rgba(255, 66, 66, 1);
            }
            .el-progress-bar__outer {
                border: 1px rgba(255, 66, 66, 1) solid;
                background-color: rgba(255, 66, 66, 0.2);
            }
            .el-progress-bar__inner {
                background-color: rgba(255, 66, 66, 1);
            }
        }
    }
</style>
