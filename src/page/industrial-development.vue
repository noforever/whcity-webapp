<template>
    <div id="ind_dev">
        <div class="chart_main">
            <div class="it_nav">
                <span>站点导航：</span>
                <span>首页</span>
                <span>》</span>
                <span>产业发展</span>
                <span>》</span>
                <span>汽车行业详情</span>
                <span>》</span>
                <span>发展现状</span>
                <div class="back_btn" @click="back()">返 回</div>
            </div>
            <el-row>
                <el-col :span="7">
                    <div class="ind_info ind_info_left" style="margin-top: 1vh">
                        <div class="info_tit">
                            <div class="info_title">产业规模</div>
                            <div class="info_btn">
                                <span @click = "infos(0)">查看详情</span>
                            </div>
                        </div>
                        <div class="info_value">
                            <div class="it_num">{{info[0].ranking}}</div>
                            <div class="it_value">
                                <p>{{info[0].name}}<span>{{info[0].unit}}</span></p>
                                <p>{{info[0].value}}</p>
                                <p>在所有产业中居第{{info[0].ranking}}位</p>
                            </div>
                        </div>
                    </div>
                    <div class="ind_info ind_info_left">
                        <div class="info_tit">
                            <div class="info_title">研发能力</div>
                            <div class="info_btn">
                                <span @click = "infos(1)">查看详情</span>
                            </div>
                        </div>
                        <div class="info_value">
                            <div class="it_num">{{info[1].ranking}}</div>
                            <div class="it_value">
                                <p>{{info[1].name}}<span>{{info[1].unit}}</span></p>
                                <p>{{info[1].value}}</p>
                                <p>在所有产业中居第{{info[1].ranking}}位</p>
                            </div>
                        </div>
                    </div>
                    <div class="ind_info ind_info_left">
                        <div class="info_tit">
                            <div class="info_title">人才积累</div>
                            <div class="info_btn">
                                <span @click = "infos(2)">查看详情</span>
                            </div>
                        </div>
                        <div class="info_value">
                            <div class="it_num">{{info[2].ranking}}</div>
                            <div class="it_value">
                                <p>{{info[2].name}}<span>{{info[2].unit}}</span></p>
                                <p>{{info[2].value}}</p>
                                <p>在所有产业中居第{{info[2].ranking}}位</p>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="10">
                    <div class="main_map" id="map_chart"></div>
                </el-col>
                <el-col :span="7">
                    <div class="ind_info ind_info_right" style="margin-top: 1vh">
                        <div class="info_tit">
                            <div class="info_title">抗风险能力</div>
                            <div class="info_btn">
                                <span @click = "infos(3)">查看详情</span>
                            </div>
                        </div>
                        <div class="info_value">
                            <div class="it_num">{{info[3].ranking}}</div>
                            <div class="it_value" style="margin-top: 2.3vh">
                                <p>{{info[3].name}}<span></span></p>
                                <p>{{info[3].value}}{{info[3].unit}}</p>
                                <p>在所有产业中居第{{info[3].ranking}}位</p>
                                <p>抗风险能力<span>{{info[3].info}}</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="ind_info ind_info_right">
                        <div class="info_tit">
                            <div class="info_title">舆情关注度</div>
                            <div class="info_btn">
                                <span @click = "infos(4)">查看详情</span>
                            </div>
                        </div>
                        <div class="info_value">
                            <div class="it_num">{{info[4].ranking}}</div>
                            <div class="it_value">
                                <p>{{info[4].name}}<span>{{info[4].unit}}</span></p>
                                <p>{{info[4].value}}</p>
                                <p>在所有产业中居第{{info[4].ranking}}位</p>
                            </div>
                        </div>
                    </div>
                    <div class="ind_info ind_info_right">
                        <div class="info_tit">
                            <div class="info_title">产业政策</div>
                            <div class="info_btn">
                                <span @click = "infos(5)">查看详情</span>
                            </div>
                        </div>
                        <div class="info_value">
                            <div class="it_num">{{info[5].ranking}}</div>
                            <div class="it_value">
                                <p>{{info[5].name}}<span>{{info[5].unit}}</span></p>
                                <p>{{info[5].value}}</p>
                                <p>在所有产业中位居第{{info[5].ranking}}位</p>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <industrial-next  v-if="industrialNextLoading" ref="industrialNext" @refreshData="close"></industrial-next>
    </div>
</template>

<script>
    import echarts from 'echarts';
    import {config} from '../utils/chartConfig'
    import wuhan from '../utils/wuhan.json';
    import IndustrialNext from './industrial-next.vue';

    export default {
        name: "industrial-development",
        components: {IndustrialNext},
        data() {
            return {
                industrialNextLoading:false,
                info: [
                    {title:'产业规模',name: '企业数量', unit: '（万家）', value: 5234.3, ranking: 1, info: ''},
                    {title:'研发能力',name: '专利数量', unit: '（万件）', value: 234.7, ranking: 5, info: ''},
                    {title:'人才积累',name: '本科以上人才', unit: '（万人）', value: 584.6, ranking: 6, info: ''},
                    {title:'抗风险能力',name: '疫情期间订单同比', unit: '%', value: -34.6, ranking: 4, info: '一般'},
                    {title:'舆情关注度',name: '产业热度指数', unit: '', value: 86, ranking: 7, info: ''},
                    {title:'产业政策',name: '各项产业政策', unit: '则', value: 809, ranking: 2, info: ''},
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

                    {region: '武昌区', coor: [114.258263, 30.613387], code: 460100000000, value: 37},
                    {region: '汉阳区', coor: [114.283703, 30.594488], code: 460100000000, value: 234},
                    {region: '青山区', coor: [114.264443, 30.604186], code: 460100000000, value: 178},
                    {region: '武昌区', coor: [114.29865, 30.613387], code: 460100000000, value: 345},
                    {region: '汉阳区', coor: [114.280684, 30.606424], code: 460100000000, value: 222},
                    {region: '青山区', coor: [114.339757, 30.603565], code: 460100000000, value: 89},
                    {region: '武昌区', coor: [114.325096, 30.584167], code: 460100000000, value: 122},
                    {region: '汉阳区', coor: [114.282553, 30.600083], code: 460100000000, value: 267},
                    {region: '青山区', coor: [114.274791, 30.598218], code: 460100000000, value: 388},
                    {region: '武昌区', coor: [114.292614, 30.598716], code: 460100000000, value: 164},
                    {region: '汉阳区', coor: [114.303393, 30.60344], code: 460100000000, value: 111},
                    {region: '青山区', coor: [114.290889, 30.585908], code: 460100000000, value: 56},
                    {region: '武昌区', coor: [114.306268, 30.607543], code: 460100000000, value: 207},
                    {region: '汉阳区', coor: [114.294051, 30.597099], code: 460100000000, value: 399},
                    {region: '青山区', coor: [114.279966, 30.595607], code: 460100000000, value: 144},
                    {region: '武昌区', coor: [114.264587, 30.603316], code: 460100000000, value: 333},

                    {region: '汉阳区', coor: [114.340619, 30.561033], code: 460100000000, value: 165},
                    {region: '青山区', coor: [114.340619, 30.561033], code: 460100000000, value: 111},
                    {region: '武昌区', coor: [114.256107, 30.468693], code: 460100000000, value: 217},
                    {region: '汉阳区', coor: [114.305549, 30.497325], code: 460100000000, value: 165},
                    {region: '青山区', coor: [114.33717, 30.504793], code: 460100000000, value: 111},
                    {region: '武昌区', coor: [114.284565, 30.507531], code: 460100000000, value: 217},
                    {region: '汉阳区', coor: [114.303537, 30.501806], code: 460100000000, value: 165},
                    {region: '青山区', coor: [114.33717, 30.531922], code: 460100000000, value: 111},
                    {region: '武昌区', coor: [114.328259, 30.516243], code: 460100000000, value: 217},
                    {region: '汉阳区', coor: [114.281403, 30.496578], code: 460100000000, value: 165},
                    {region: '青山区', coor: [114.307562, 30.510767], code: 460100000000, value: 111},
                    {region: '武昌区', coor: [114.343781, 30.504295], code: 460100000000, value: 217},
                    {region: '汉阳区', coor: [114.260418, 30.471432], code: 460100000000, value: 165},
                    {region: '青山区', coor: [114.269617, 30.488612], code: 460100000000, value: 111},
                    {region: '武昌区', coor: [114.302675, 30.48189], code: 460100000000, value: 217},
                    {region: '汉阳区', coor: [114.291751, 30.498819], code: 460100000000, value: 165},
                    {region: '青山区', coor: [114.272779, 30.499566], code: 460100000000, value: 111},
                ],
            }
        },
        mounted() {
            this.main_chart()
        },
        methods: {
            infos(val){
                this.industrialNextLoading = true
                this.$nextTick(() => {
                    this.$refs.industrialNext.init(this.info[val].title,val)
                })
            },
            back() {
                this.$router.push('/car-development')
            },
            close(){
                this.industrialNextLoading = false
            },
            main_chart() {
                var chart = echarts.init(document.getElementById('map_chart'));
                echarts.registerMap('wuhan', wuhan)
                var pd = []
                for (var i = 0; i < this.mapData.length; i++) {
                    var tmp = {}
                    var d = []
                    tmp.name = this.mapData[i].region
                    d.push(this.mapData[i].coor[0], this.mapData[i].coor[1]);
                    d.push(this.mapData[i].value)
                    tmp.value = d
                    pd.push(tmp)
                }
                var option = {
                    tooltip: {
                        trigger: 'item',
                        position: 'top',
                        //enterable: false,
                        //transitionDuration:0,
                        backgroundColor: 'rgba(50,50,50,0)',
                        textStyle: config().textStyle,
                    },
                    legend: {
                        orient: 'vertical',
                        y: 'bottom',
                        x: 'right',
                        data: ['pm2.5'],
                        textStyle: config().textStyle,
                    },
                    visualMap: {
                        min: 0,
                        max: 400,
                        left: '3%',
                        bottom: '4%',
                        itemHight: config().fontSize * 5,
                        itemWidth: config().fontSize * 1.2,
                        text: ['高', '低'], // 文本，默认为数值文本
                        calculable: true,
                        inRange: {
                            color: ['#05EB6B', '#DFF300', '#FF3C00']
                        },
                        textStyle: config().textStyle
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
                        {
                            name: 'AQI',
                            type: 'heatmap',
                            coordinateSystem: 'geo',
                            pointSize: 10,
                            blurSize: 30,
                            data: pd
                        }
                    ]
                };
                chart.setOption(option)
                window.onresize = chart.resize;
                //chart.clear ()
            },
        }
    }
</script>

<style lang="scss" scoped>
    @font-face {
        font-family: 'lcd';
        src: url('../assets/font/digital-7.ttf');
    }

    #ind_dev {
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
        .ind_info {
            height: 27vh;
            background-image: url('../../static/img/industrial/bk1.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            .info_tit {
                height: 4.5vh;
                margin: 0 3%;
                display: flex;
                border-bottom: 0.1vh #3775A7 solid;
                .info_title {
                    line-height: 4.5vh;
                    font-size: 2.037031vh;
                    text-align: left;
                    font-weight: 600;
                    color: #fff;
                    width: 70%;
                }
                .info_btn {
                    width: 30%;
                    text-align: right;
                    line-height: 4.5vh;
                    span {
                        padding: 0 1.5vh;
                        border: 1px #32F1FE solid;
                        line-height: 2.5vh;
                        text-align: center;
                        font-size: 1.4815vh;
                        color: #32F1FE;
                        cursor: pointer;
                        background-color: #0D244C;
                    }
                    span:hover {
                        color: #fff;
                        border: 1px #fff solid;
                    }
                }
            }
            .info_value {
                height: 22.5vh;
                display: flex;
                margin: 0 3%;
                .it_num {
                    width: 16.5vh;
                    height: 16.5vh;
                    margin-top: 3vh;
                    margin-left: 3vh;
                    line-height: 16vh;
                    text-align: center;
                    font-size: 5.55555556vh;
                    color: #FFF100;
                    background-image: url('../../static/img/industrial/bk_ioc.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                }
                .it_value {
                    margin-left: 4vh;
                    margin-top: 4.5vh;
                    p {
                        font-size: 2.037031vh;
                        color: #fff;
                        span {
                            font-size: 1.2992vh;
                            padding-left: 1vh;
                        }
                        line-height: 4vh;
                    }
                    p:nth-child(2) {
                        font-family: lcd;
                        font-size: 5vh;
                        color: #32F1FE;
                        line-height: 5vh;
                    }
                    p:nth-child(3) {
                        color: #32F1FE;
                    }
                    p:nth-child(4) {
                        color: #32F1FE;
                        span {
                            padding-left: 2vh;
                            border: 1px #32F1FE solid;
                            text-align: center;
                            margin-left: 2vh;
                            letter-spacing: 2vh;
                        }
                    }
                }
            }
        }
        .ind_info_left {
            margin: 2vh 1% 0 2%;
        }
        .main_map {
            margin: 1vh 1% 0 1%;
            height: 85vh;
        }
        .ind_info_right {
            margin: 2vh 2% 0 1%;
        }
    }

</style>