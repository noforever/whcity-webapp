<template>
    <div id="it_next">
        <div class="ne_chart" :style = "stl">
            <div class="ne_chart1">
                <div class="ne_title">
                    <span>{{title}}</span>
                    <div class="it_close" @click="close()">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="it_charts">
                    <el-row>
                        <el-col :span="12">
                            <div class = "next_chart next_chart_l"></div>
                            <div class = "next_chart next_chart_l"></div>
                        </el-col>
                        <el-col :span="12">
                            <div class = "next_chart next_chart_r"></div>
                            <div class = "next_chart next_chart_r"></div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import echarts from 'echarts';
    // import {config} from '../utils/chartConfig'
    import 'font-awesome/css/font-awesome.min.css'

    export default {
        name: "industrial-next",
        data() {
            return {
                title: '',
                stl:'margin-top: 14vh;margin-left: 30vw;',
            }
        },
        mounted() {

        },
        methods: {
            init(name, val) {
                this.title = name + '详情'
                var to= 14
                var le = 30
                if(val>2){
                    le= 10
                }
                if(val == 1 || val == 4){
                    to = 25
                }else if(val == 2 || val == 5){
                    to = 41.5
                }
                this.stl = 'margin-top: '+to+'vh;margin-left: '+le+'vw;'
            },
            close() {
                this.$emit('refreshData')
            },
        }
    }
</script>

<style lang="scss" scoped>
    #it_next {
        height: 100vh;
        width: 100%;
        position: absolute;
        z-index: 100000;
        background-color: rgba(0, 0, 0, 0.7);
        font-size: 50px;
        line-height: 100vh;
        color: #ffffff;
        top: 0;
        left: 0;
        .ne_chart {
            height: 57vh;
            width: 60vw;
            background-image: url('../../static/img/bg.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            .ne_chart1 {
                height: 100%;
                width: 100%;
                background-image: url('../../static/img/industrial/bk1.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                .ne_title {
                    width: 100%;
                    height: 5vh;
                    line-height: 5.3vh;
                    font-size: 2.2222222223vh;
                    text-align: center;
                    color: #32F1FE;
                    font-weight: 600;
                    background-image: url('../../static/img/industrial/det_ioc.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    .it_close {
                        position: absolute;
                        height: 2.5vh;
                        line-height: 2.4vh;
                        width: 9vh;
                        color: #fff;
                        font-size: 2vh;
                        cursor: pointer;
                        background-color: #0e265e;
                        margin-top: -3.5vh;
                        margin-left: 53%;
                    }
                    .it_close:hover {
                        color: red;
                        background-color: #1e3e88;
                    }
                }
                .it_charts {
                    height: 52vh;
                    width: 100%;
                    .next_chart{
                        height: 24vh;
                        border: 2px rgba(39,188,255,0.6) solid;
                    }
                    .next_chart_l{
                        margin: 1vh 1vh 0 4%;
                    }
                    .next_chart_r{
                        margin: 1vh 4% 0 1vh;
                    }
                }
            }
        }
    }
</style>