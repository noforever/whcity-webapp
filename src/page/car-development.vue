<template>
    <div id="car_dev">
        <div class="chart_main">
            <div class="it_nav">
                <span>站点导航：</span>
                <span>首页</span>
                <span>》</span>
                <span>产业发展</span>
                <span>》</span>
                <span>汽车行业详情</span>
                <div class="back_btn" @click="back()">返 回</div>
            </div>
            <el-row>
                <el-col :span="24">
                    <div class="main_top">
                        <el-row>
                            <el-col :span="16">
                                <div class="it_main it_main_l">
                                    <div class="top_ioc">汽车产业详情</div>
                                    <div style="display: flex">
                                        <div class="main_left">
                                            <div class="car_info">
                                                <div class="car_info1">
                                                    <div class="car_info1_tit">企业总数</div>
                                                    <div class="car_info1_val" id="car_info1_val">124357</div>
                                                </div>
                                                <div class="car_info2">
                                                    <div class="car_info1_tit">产业占比</div>
                                                    <div class="car_info1_val">18%</div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="car_info_btn" :class="btn1==0?'car_info_btn_act':''"
                                                     @click="itChange(0)">
                                                    <span>发展现状</span>
                                                </div>
                                                <div class="car_info_btn" :class="btn1==1?'car_info_btn_act':''"
                                                     @click="itChange(1)">
                                                    <span>产业供应链</span>
                                                </div>
                                                <div class="car_info_btn" :class="btn1==2?'car_info_btn_act':''"
                                                     @click="itChange(2)">
                                                    <span>产业链研判</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="legend">
                                            <div class="it_leg">
                                                <div class="leg_ioc leg_ioc1"></div>
                                                <div class="leg_text leg_text1">上游企业</div>
                                            </div>
                                            <div class="it_leg">
                                                <div class="leg_ioc leg_ioc2"></div>
                                                <div class="leg_text leg_text2">中游企业</div>
                                            </div>
                                            <div class="it_leg">
                                                <div class="leg_ioc leg_ioc3"></div>
                                                <div class="leg_text leg_text3">下游企业</div>
                                            </div>
                                        </div>
                                        <div class="main_right" id="map_chart">

                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="it_main it_main_r">
                                    <div class="right_btn">
                                        <p :class="btn2 == 0?'p_act':''">重点企业</p>
                                        <p :class="btn2 == 1?'p_act':''">实时资讯</p>
                                        <p :class="btn2 == 2?'p_act':''">产业政策</p>
                                    </div>
                                    <div class="right_text">
                                        <el-scrollbar view-class="view-box dc-collapse-menu" :native="false"
                                                      style="height: 53.5vh">
                                            <div class="right_text_iten right_text_iten1">
                                                <div class="text_tit">
                                                    <p></p><span>产业链上游</span>
                                                </div>
                                                <div class="text_table">
                                                    <div class="tltleBox"><span>企业名称</span><span>主营业务收入</span></div>
                                                    <div class="textBox" v-for="(item,index) in tableData"
                                                         :class="{'textBox1':index%2 == 1}" :key="index"><span>{{item.name}}</span><span>{{item.value}}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="right_text_iten right_text_iten2">
                                                <div class="text_tit">
                                                    <p></p><span>产业链上游</span>
                                                </div>
                                                <div class="text_table">
                                                    <div class="tltleBox"><span>企业名称</span><span>主营业务收入</span></div>
                                                    <div class="textBox" v-for="(item,index) in tableData"
                                                         :class="{'textBox1':index%2 == 1}" :key="index"><span>{{item.name}}</span><span>{{item.value}}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="right_text_iten right_text_iten3">
                                                <div class="text_tit">
                                                    <p></p><span>产业链上游</span>
                                                </div>
                                                <div class="text_table">
                                                    <div class="tltleBox"><span>企业名称</span><span>主营业务收入</span></div>
                                                    <div class="textBox" v-for="(item,index) in tableData"
                                                         :class="{'textBox1':index%2 == 1}" :key="index"><span>{{item.name}}</span><span>{{item.value}}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-scrollbar>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="main_bottom">
                        <el-row>
                            <el-col :span="16">
                                <div class="it_main it_main_l">
                                    <div class="bottom_tit1">产业链概况</div>
                                    <div class="bottom_infos">
                                        <div class="bottom_info">
                                            <div class="info_chart" id="pie_chart1"></div>
                                            <div class="info_text info_text1">
                                                <div class="info_text_name">产业链上游</div>
                                                <div class="info_text_value">
                                                    <span>24357</span>
                                                    <span>家</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom_info">
                                            <div class="info_chart" id="pie_chart2"></div>
                                            <div class="info_text info_text2">
                                                <div class="info_text_name">产业链中游</div>
                                                <div class="info_text_value">
                                                    <span>24357</span>
                                                    <span>家</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bottom_info">
                                            <div class="info_chart" id="pie_chart3"></div>
                                            <div class="info_text info_text3">
                                                <div class="info_text_name">产业链下游</div>
                                                <div class="info_text_value">
                                                    <span>24357</span>
                                                    <span>家</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="it_main it_main_r">
                                    <div class="right_chart_tit">
                                        <div class="chart_tit">企业数量增长趋势</div>
                                        <div class="chart_btn">
                                            <div :class="btn3 == 1?'_btn_act':''">月度</div>
                                            <div :class="btn3 == 2?'_btn_act':''">年度</div>
                                        </div>
                                    </div>
                                    <div class="b_r_chart" id="line_chart"></div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>

        </div>
    </div>
</template>

<script>
    import echarts from 'echarts';
    import {config} from '../utils/chartConfig'
    import wuhan from '../utils/wuhan.json';
    import it_up from '../../static/img/industrial/md_u.png';
    import it_center from '../../static/img/industrial/md_c.png';
    import it_down from '../../static/img/industrial/md_d.png';
    import dot_1 from '../../static/img/industrial/dot-1.png';
    import dot_2 from '../../static/img/industrial/dot-2.png';
    import dot_3 from '../../static/img/industrial/dot-3.png';
    import tc_left from '../../static/img/industrial/tc_left.png';
    import tc_right from '../../static/img/industrial/tc_right.png';
    import df from '../../static/img/industrial/df.png';

    export default {
        name: "car-development",
        data() {
            return {
                btn1: -1,
                btn2: 0,
                btn3: 1,
                nav: [
                    {title: '发展现状', path: '/industrial-development'},
                    {title: '产业供应链', path: ''},
                    {title: '产业链研判', path: ''},
                ],
                tableData: [
                    {name: '宝武钢铁有限公司', value: 231456},
                    {name: '武汉花木塑料公司', value: 231456},
                    {name: '武汉花木塑料公司', value: 231456},
                    {name: '武汉花木塑料公司', value: 231456},
                ],
                mapData: [
                    {region: '黄陂区', coor: [114.375967, 30.889105], code: 460100000000, value: 123},
                    {region: '新洲区', coor: [114.803704, 30.849429], code: 460100000000, value: 321},
                    {region: '东西湖区', coor: [114.1483, 30.626937], code: 460100000000, value: 211},
                    {region: '蔡甸区', coor: [114.022969, 30.588147], code: 460100000000, value: 89},
                    {region: '汉南区', coor: [114.087359, 30.33812], code: 460100000000, value: 44},
                    {region: '江夏区', coor: [114.357569, 30.267278], code: 460100000000, value: 12},
                    {region: '武昌区', coor: [114.323075, 30.562278], code: 460100000000, value: 217},
                    {region: '汉阳区', coor: [114.232238, 30.561282], code: 460100000000, value: 165},
                    {region: '青山区', coor: [114.431159, 30.6508], code: 460100000000, value: 111},
                ],
                color: [['#2ADFFE', '#0194FF'], ['#2AF7A7', '#1FE76F'], ['#FFB400', '#FFF100']],
            }
        },
        mounted() {
            this.main_chart()
            this.pie_charts('pie_chart1', 29.7, this.color[0], dot_1)
            this.pie_charts('pie_chart2', 55.8, this.color[1], dot_2)
            this.pie_charts('pie_chart3', 14.5, this.color[2], dot_3)
            this.line_chart()
        },
        methods: {
            itChange(val) {
                this.btn1 = val
                if (this.nav[val].path != '') {
                    this.$router.push(this.nav[val].path)
                }
            },
            back() {
                this.$router.push('/index')
            },
            main_chart() {
                var chart = echarts.init(document.getElementById('map_chart'));
                echarts.registerMap('wuhan', wuhan)
                var pd1 = []
                var pd2 = []
                var pd3 = []
                for (var i = 0; i < this.mapData.length; i++) {
                    var tmp = {}
                    var d = []
                    tmp.name = this.mapData[i].region
                    d.push(this.mapData[i].coor[0], this.mapData[i].coor[1]);
                    d.push(1, 1, this.mapData[i].value)
                    tmp.value = d
                    if (this.mapData[i].value < 100) {
                        pd3.push(tmp)
                    } else if (this.mapData[i].value > 99 && this.mapData[i].value < 200) {
                        pd2.push(tmp)
                    } else if (this.mapData[i].value > 199) {
                        pd1.push(tmp)
                    }
                }
                var option = {
                    tooltip: {
                        trigger: 'item',
                        position: 'top',
                        //enterable: false,
                        //transitionDuration:0,
                        backgroundColor: 'rgba(50,50,50,0)',
                        textStyle: config().textStyle,
                        formatter: function (params) {
                            //30.562278
                            //alert(JSON.stringify(params))
                            var str = '<div style="height: 20vh;width: 40vh;position: absolute;margin-left: -39.5vh;margin-top: -16.3vh"><img height="100%" width="100%" src = ' + tc_left + '>' +
                                '<div style="position: absolute;margin-top: -21vh;">' +
                                '<div style="font-size: 1.63vh;color: #47ABEF;margin-left: 8vh">东风汽车公司</div>' +
                                '<div style="font-size: 1.63vh;color: #47ABEF;display: flex">' +
                                '<div style="width: 9vh;height: 9vh;margin-top: 1.8vh;margin-left: 1.8vh">' +
                                '<img height="100%" width="100%" src = ' + df + '>' +
                                '</div>' +
                                '<div style="width: 16vh;margin-left: 1vh;margin-top: 3.3vh;font-size: 1.482vh;color: #fff">' +
                                '<div style="line-height: 2vh">统一代码：123223433544</div>' +
                                '<div style="line-height: 2vh">企业性质：国有企业</div>' +
                                '<div style="line-height: 2vh">是否上市：是</div>' +
                                '           </div>' +
                                '</div>' +
                                '</div>' +
                                '</div>';
                            var str1 = '<div style="height: 20vh;width: 40vh;position: absolute;margin-left:0;margin-top: -16.3vh"><img height="100%" width="100%" src = ' + tc_right + '>' +
                                '<div style="position: absolute;margin-top: -21vh;margin-left: 7.5vh">' +
                                '<div style="font-size: 1.63vh;color: #47ABEF;margin-left: 8vh">东风汽车公司</div>' +
                                '<div style="font-size: 1.63vh;color: #47ABEF;display: flex">' +
                                '<div style="width: 9vh;height: 9vh;margin-top: 1.8vh;margin-left: 1.8vh">' +
                                '<img height="100%" width="100%" src = ' + df + '>' +
                                '</div>' +
                                '<div style="width: 16vh;margin-left: 1vh;margin-top: 3.3vh;font-size: 1.482vh;color: #fff">' +
                                '<div style="line-height: 2vh">统一代码：123223433544</div>' +
                                '<div style="line-height: 2vh">企业性质：国有企业</div>' +
                                '<div style="line-height: 2vh">是否上市：是</div>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '</div>';
                            if (params.value[0] <= 114.323075) {
                                return str
                            } else {
                                return str1
                            }
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
                        zoom: 1.2,
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
                                    }, {
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
                                    }, {
                                        offset: 0.7,
                                        color: 'rgba(73,196,255,0.6)' // 100% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: 'rgba(73,196,255,0.3)' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                borderWidth: config().fontSize / 6,
                                shadowColor: 'rgba(63, 218, 255, 0.5)',
                                shadowBlur: 30
                            },
                            emphasis: {
                                areaColor: '#2B91B7',
                            }
                        }
                    },
                    series: [
                        { //城市点位
                            name: 'city',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            symbol: 'image://' + it_up,
                            symbolSize: [config().fontSize, config().fontSize * 1.5],
                            itemStyle: {
                                normal: {
                                    color: '#FFF100'
                                }
                            },
                            zlevel: 9,
                            data: pd1,
                        },
                        { //城市点位
                            name: 'city',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            symbol: 'image://' + it_center,
                            symbolSize: [config().fontSize, config().fontSize * 1.5],
                            itemStyle: {
                                normal: {
                                    color: '#FFF100'
                                }
                            },
                            zlevel: 9,
                            data: pd2,
                        },
                        { //城市点位
                            name: 'city',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            symbol: 'image://' + it_down,
                            symbolSize: [config().fontSize, config().fontSize * 1.5],
                            itemStyle: {
                                normal: {
                                    color: '#FFF100'
                                }
                            },
                            zlevel: 9,
                            data: pd3,
                        },
                    ]
                };
                chart.setOption(option)
                window.onresize = chart.resize;
                //chart.clear ()
            },
            pie_charts(id, data, color, img) {
                var chart = echarts.init(document.getElementById(id));
                var max = 100; //满刻度大小
                var option = {
                    title: {
                        text: data + '%',
                        top: '40%',
                        left: 'center',
                        textStyle: {
                            color: '#fff',
                            fontSize: config().fontSize * 1.8
                        }
                    },
                    "color": ["#fff", 'rgba(255,255,255,.5)', 'rgba(255,255,255,.2)'],
                    "series": [
                        {
                            "type": "pie",
                            "center": ["50%", "50%"],
                            "radius": ["68%", "84%"],
                            "hoverAnimation": false,
                            "data": [{
                                "name": "",
                                "value": data,
                                "itemStyle": {
                                    "normal": {
                                        "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            "offset": 0,
                                            "color": color[0]
                                        }, {
                                            "offset": 1,
                                            "color": color[1]
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
                            "radius": ["72%", "72%"],
                            "hoverAnimation": false,

                            "data": [
                                {
                                    "name": "",
                                    "value": 0,
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
                                            image: 'data:' + img
                                        },
                                        width: config().fontSize * 2.5,
                                        height: config().fontSize * 2.5,
                                        borderRadius: config().fontSize * 2.5,
                                        padding: config().fontSize * 2.5,
                                    }
                                },
                                { //画剩余的刻度圆环
                                    "name": "",
                                    "value": 1,
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
                    ]
                }
                chart.setOption(option, true)
                window.onresize = chart.resize;

            },
            line_chart() {
                var chart = echarts.init(document.getElementById('line_chart'));
                var option = {
                    tooltip: {
                        trigger: 'axis',
                    },
                    grid: {
                        top: '14%',
                        left: '3%',
                        right: '5%',
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
                        data: ['1月', '2月', '3月', '4月', '5月'],

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
                            show: false,
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
                            symbolSize: config().fontSize * 1.3,
                            z: 1,
                            lineStyle: {
                                normal: {
                                    color: "#40FF9A",
                                    // shadowColor: 'rgba(0, 0, 0, .3)',
                                    // shadowBlur: 0,
                                    // shadowOffsetY: 5,
                                    // shadowOffsetX: 5,
                                },
                            },
                            itemStyle: {
                                color: "40FF9A",
                                borderColor: 'rgba(64,255,154,0.3)',
                                borderWidth: config().fontSize / 1.3
                            },
                            data: [281.55, 398.35, 214.02, 179.55, 289.57,],
                        },
                        {
                            name: '制造业',
                            type: 'line',
                            smooth: true, //是否平滑
                            showAllSymbol: true,
                            // symbol: 'image://./static/images/guang-circle.png',
                            symbol: 'circle',
                            symbolSize: config().fontSize * 1,
                            z: 2,
                            lineStyle: {
                                normal: {
                                    color: "#40FF9A",
                                    // shadowColor: 'rgba(0, 0, 0, .3)',
                                    // shadowBlur: 0,
                                    // shadowOffsetY: 5,
                                    // shadowOffsetX: 5,
                                },
                            },
                            itemStyle: {
                                color: "#fff",
                                borderColor: 'rgba(64,255,154,1)',
                                borderWidth: config().fontSize / 6
                            },
                            data: [281.55, 398.35, 214.02, 179.55, 289.57,],
                        }
                    ]
                };
                chart.setOption(option, true)
                window.onresize = chart.resize;
            },
        }
    }
</script>

<style lang="scss" scoped>
    @font-face {
        font-family: 'lcd';
        src: url('../assets/font/digital-7.ttf');
    }

    #car_dev {
        overflow-x: hidden;
        overflow-y: hidden;
        .it_nav {
            padding-left: 4vh;
            width: 100%;
            font-size: 1.66667vh;
            text-align: left;
            color: #fff;
            line-height: 3vh;
            display: flex;
            .back_btn {
                height: 3.5vh;
                width: 13vh;
                text-align: center;
                line-height: 3.5vh;
                position: absolute;
                cursor: pointer;
                right: 4vh;
                border-radius: 0.1vh;
                background: -moz-linear-gradient(top, #1E70D3, #0498FF);
            }
        }
        .main_top {
            height: 61vh;
            .it_main {
                height: 60vh;
                margin-top: 1vh;
                .top_ioc {
                    width: 100%;
                    height: 4.5vh;
                    font-size: 2.4074vh;
                    font-weight: 700;
                    line-height: 4.5vh;
                    color: #1BC0F3;
                    text-align: center;
                    background-image: url('../../static/img/industrial/det_ioc.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                }
                .legend {
                    height: 15vh;
                    width: 10vw;
                    position: absolute;
                    margin-left: 53vw;
                    margin-top: 40vh;
                    .it_leg{
                        display: flex;
                        height: 5vh;
                    }
                    .leg_ioc{
                        width: 2vh;
                        height: 3vh;
                    }
                    .leg_ioc1{
                        background-image: url('../../static/img/industrial/md_u.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                    }
                    .leg_ioc2{
                        background-image: url('../../static/img/industrial/md_c.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                    }
                    .leg_ioc3{
                        background-image: url('../../static/img/industrial/md_d.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                    }
                    .leg_text{
                        font-size: 1.77778vh;
                        text-align: center;
                        line-height: 3vh;
                        padding-left: 2vh;
                    }
                    .leg_text1{
                        color: #32F1FE;
                    }
                    .leg_text2{
                        color: #00D856;
                    }
                    .leg_text3{
                        color: #F9C106;
                    }
                }
                .main_left {
                    width: 25%;
                    height: 55.5vh;
                    .car_info {
                        display: flex;
                        padding-left: 3%;
                        .car_info1 {
                            width: 65%;
                            padding-left: 1vh;
                        }
                        .car_info2 {
                            width: 35%;
                        }
                        .car_info1_tit {
                            font-size: 1.666667vh;
                            color: #1BC0F3;
                            line-height: 3vh;
                            text-align: left;
                        }
                        .car_info1_val {
                            font-family: lcd;
                            font-size: 4vh;
                            color: #fff;
                            line-height: 5vh;
                            text-align: left;
                        }
                    }
                    .car_info_btn {
                        height: 4.6vh;
                        margin-left: -2px;
                        margin-top: 2vh;
                        padding-left: 20%;
                        font-size: 2.222223vh;
                        color: #1B6FA7;
                        line-height: 4.6vh;
                        text-align: left;
                        cursor: pointer;
                        background-image: url('../../static/img/industrial/tab_btn.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                    }
                    .car_info_btn:hover {
                        color: #fff;
                        background-image: url('../../static/img/industrial/tab_act.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                    }
                    .car_info_btn_act {
                        color: #fff;
                        background-image: url('../../static/img/industrial/tab_act.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                    }
                }
                .main_right {
                    width: 75%;
                    height: 55.5vh;
                }
            }
            .right_btn {
                height: 5vh;
                margin: 0 3%;
                display: flex;
                border-bottom: 0.2vh #3775A7 solid;
                p {
                    font-size: 2vh;
                    font-weight: 600;
                    margin-left: 6vh;
                    color: #1A6BA1;
                    text-align: left;
                    line-height: 4vh;
                    margin-top: 1vh;
                }
                p:nth-child(1) {
                    margin-left: 0;
                }
                p:hover {
                    color: #fff;
                }
                .p_act {
                    color: #fff;
                }
            }
            .right_text {
                height: 53.5vh;
                overflow-x: hidden;
                .right_text_iten {
                    margin: 0 3%;
                    .text_tit {
                        height: 3vh;
                        display: flex;
                        border-bottom: 0.2vh #3775A7 solid;
                        p {
                            width: 0.6vh;
                            height: 1.8vh;
                            margin-top: 1vh;
                        }
                        span {
                            font-size: 1.3vh;
                            font-weight: 600;
                            height: 2vh;
                            line-height: 2vh;
                            margin-top: 1.2vh;
                            text-align: left;
                            padding-left: 1vh;
                        }
                    }
                    .text_table {
                        .tltleBox, .textBox {
                            display: flex;
                            align-items: center;
                            height: 3vh;
                            line-height: 3vh;
                            font-size: 1.34vh;
                            font-weight: 600;
                            width: 100%;
                            transition: all 0.5s;
                            text-align: left;
                            background-color: rgba(3, 22, 36, 0.4);
                            span:nth-child(1) {
                                flex: 2.3;
                            }
                            span:nth-child(2) {
                                flex: 2.5;
                            }
                        }
                        .tltleBox {
                            border-bottom: 1px #bbbaba solid;
                            span {
                                padding-left: 3vh;
                            }
                        }
                        .textBox {
                            font-size: 1.1112vh;
                            color: #fff;
                            span {
                                padding-left: 2vh;
                            }
                            span:nth-child(2) {
                                padding-left: 7vh;
                            }
                        }
                        .textBox1 {
                            background-color: rgba(229, 229, 229, 0.2);
                        }
                    }
                }
                .right_text_iten1 {
                    color: #32F1FE;
                    p {
                        background-color: #2ADFFE;
                    }
                }
                .right_text_iten2 {
                    color: #2EC14A;
                    margin-top: 1vh;
                    p {
                        background-color: #2EC14A;
                    }
                }
                .right_text_iten3 {
                    color: #F9C106;
                    margin-top: 1vh;
                    p {
                        background-color: #F9C106;
                    }
                }
            }
        }
        .main_bottom {
            height: 24.5vh;
            margin-top: 2vh;
            .it_main {
                height: 22.5vh;
            }
        }
        .it_main {
            border: 1px #426380 solid;
            background: linear-gradient(to left, #fff, #fff) left top no-repeat,
            linear-gradient(to bottom, #fff, #fff) left top no-repeat,
            linear-gradient(to left, #fff, #fff) right top no-repeat,
            linear-gradient(to bottom, #fff, #fff) right top no-repeat,
            linear-gradient(to left, #fff, #fff) left bottom no-repeat,
            linear-gradient(to bottom, #fff, #fff) left bottom no-repeat,
            linear-gradient(to left, #fff, #fff) right bottom no-repeat,
            linear-gradient(to left, #fff, #fff) right bottom no-repeat;
            background-size: 2px 2vh, 3vh 1.5px, 2px 2vh, 3vh 1.5px;
            /*background-image: url('../../static/img/industrial/bk.png');*/
            /*background-repeat: no-repeat;*/
            /*background-size: 100% 100%;*/
        }
        .it_main_l {
            margin: 0 1% 0 2%;
            .bottom_tit1 {
                margin: 0 3%;
                line-height: 3vh;
                margin-top: 1vh;
                font-size: 2.037031vh;
                text-align: left;
                font-weight: 600;
                color: #fff;
                border-bottom: 0.1vh #3775A7 solid;
            }
            .bottom_infos {
                display: flex;
                height: 18.5vh;
                padding: 0 3%;
                .bottom_info {
                    width: 33.33%;
                    display: flex;
                    .info_chart {
                        height: 18.5vh;
                        width: 40%;
                    }
                    .info_text {
                        width: 60%;
                        .info_text_name {
                            line-height: 4vh;
                            font-size: 2.037031vh;
                            text-align: left;
                            font-weight: 600;
                            margin-top: 4.5vh;
                        }
                        .info_text_value {
                            line-height: 5vh;
                            font-size: 4.7037031vh;
                            text-align: left;
                            font-weight: 600;
                            span:nth-child(1) {
                                font-family: lcd;
                            }
                            span:nth-child(2) {
                                padding-left: 1vh;
                                font-size: 1.3vh;
                                color: #fff;
                            }
                        }
                    }
                    .info_text1 {
                        .info_text_name, .info_text_value {
                            color: #32F1FE;
                        }
                    }
                    .info_text2 {
                        .info_text_name, .info_text_value {
                            color: #25F08F;
                        }
                    }
                    .info_text3 {
                        .info_text_name, .info_text_value {
                            color: #F9C106;
                        }
                    }
                }
            }
        }
        .it_main_r {
            margin: 0 2% 0 1%;
            .right_chart_tit {
                height: 4vh;
                margin: 0 3%;
                display: flex;
                border-bottom: 0.1vh #3775A7 solid;
                .chart_tit {
                    line-height: 3vh;
                    font-size: 2.037031vh;
                    text-align: left;
                    font-weight: 600;
                    color: #fff;
                    margin-top: 1vh;
                }
                .chart_btn {
                    height: 2.6vh;
                    position: absolute;
                    right: 4vh;
                    margin-top: 1vh;
                    display: flex;
                    div {
                        width: 50%;
                        font-size: 1.666667vh;
                        line-height: 2.6vh;
                        text-align: center;
                        padding: 0 1.5vh;
                        background-color: #0D244C;
                        color: #3775A7;
                    }
                    ._btn_act {
                        background-color: #3775A7;
                        color: #fff;
                    }
                }
            }
            .b_r_chart {
                height: 18.5vh;
            }
        }
    }

    /deep/ .right_text {
        .el-scrollbar__thumb {
            background-color: #2BCDDF;
        }
        .is-vertical {
            background-color: #0b0618;
        }
        .el-scrollbar__wrap {
            overflow-x: hidden;
        }
    }

</style>