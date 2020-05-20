<template>
    <div id="layout">
        <div class="charts">
            <div class="titleBox">
                <div class="title">
                    <span class="title1">武汉城市</span>
                    <span class="title2">运行指挥中心</span>
                    <div class="title_img"></div>
                </div>
                <div class="navigation">
                    <div class="nav_btns">
                        <div class="nav_btn" :class="navIndex == 0?'nav_btn_active':''" @click="navChange(0)">
                            <div class="nav_btn_in">
                                <p>首页</p>
                            </div>
                        </div>
                        <div class="nav_btn" :class="navIndex == 1?'nav_btn_active':''" @click="navChange(1)">
                            <div class="nav_btn_in">
                                <p>数据汇聚</p>
                            </div>
                        </div>
                        <div class="nav_btn" :class="navIndex == 2?'nav_btn_active':''" @click="navChange(2)">
                            <div class="nav_btn_in">
                                <p>经济运行</p>
                            </div>
                        </div>
                        <div class="nav_btn" :class="navIndex == 3?'nav_btn_active':''" @click="navChange(3)">
                            <div class="nav_btn_in">
                                <p>空间规划</p>
                            </div>
                        </div>
                        <div class="nav_btn" :class="navIndex == 4?'nav_btn_active':''" @click="navChange(4)">
                            <div class="nav_btn_in">
                                <p>城市治理</p>
                            </div>
                        </div>
                        <div class="nav_btn" :class="navIndex == 5?'nav_btn_active':''" @click="navChange(5)">
                            <div class="nav_btn_in">
                                <p>城市服务</p>
                            </div>
                        </div>
                        <div class="nav_btn" :class="navIndex == 6?'nav_btn_active':''" @click="navChange(6)">
                            <div class="nav_btn_in">
                                <p>产业发展</p>
                            </div>
                        </div>
                    </div>
                    <div class="data_date">
                        <p>统计截止日期：2020-04-24</p>
                    </div>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                nav: [
                    {title: '首页', path: ''},
                    {title: '数据汇聚', path: ''},
                    {title: '经济运行', path: ''},
                    {title: '空间规划', path: ''},
                    {title: '城市治理', path: ''},
                    {title: '城市服务', path: ''},
                    {title: '产业发展', path: '/index'},
                ],
                navIndex: 6,
                title: '宏观经济运行',
                isCollapse: false
            }
        },
        methods: {
            navChange(val) {
                if (this.nav[val].path != '') {
                    this.navIndex = val
                    this.$router.push(this.nav[val].path)
                }
            },
            // routerLink(index, path) {
            //     if (index != 3) {
            //         this.navIndex = index;
            //         this.$router.push(path)
            //     }
            //     //this.threeGo()
            // },
            currentPage() {
                for (let i = 0; i < this.nav.length; i++) {
                    if (this.nav[i].path == this.$route.path) {
                        this.navIndex = i;
                    }
                    if (this.$route.path == '/industrial-development' || this.$route.path == '/car-development') {
                        this.navIndex = 6;
                    }
                }
                //return s;
            },
            checkRouterLocal(path) {
                for (let i = 0; i < this.nav.length; i++) {
                    if (this.nav[i].path == path) {
                        this.navIndex = i;
                    }
                    if (path == '/industrial-development' || path == '/car-development') {
                        this.navIndex = 6;
                    }
                }
                //this. currentPage()

                //console.log(path,"path")
            },


        },
        watch: {
            "$route"() {
                let path = this.$route.path;
                // 检索当前路径
                this.checkRouterLocal(path);
            }
        },
        mounted() {
            this.currentPage()
        },
    }
</script>

<style lang="scss" scoped>
    .charts {
        overflow: auto;
        width: 100%;
        .selfont {
            background-color: #128eee;
        }

        .titleBox {
            width: 100%;
            height: 9vh;
            position: fixed;
            top: 0;
            z-index: 99999;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .title {
                padding-left: 2vh;
                margin-top: 3.5vh;
                width: 30%;
                height: 100%;
                font-size: 4vh;
                line-height: 7vh;
                text-align: left;
                background-image:linear-gradient(bottom, #58686b, #D6EFFC, #fff);
                background-image: -webkit-linear-gradient(bottom, #58686b, #D6EFFC, #fff);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-weight: 800;
                letter-spacing: 0.5vh;
                .title2 {
                    font-size: 2.5vh;
                }
                .title_img {
                    position: relative;
                    top: -3.8vh;
                    height: 6vh;
                    width: 70%;
                    background-image: url('../../assets/img/title.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                }
            }
            .navigation {
                width: 70%;
                height: 100%;
                display: flex;
                .nav_btns {
                    display: flex;
                    height: 5vh;
                    margin-top: 3vh;
                    width: 75%;
                    transform: skew(-15deg);
                    background: linear-gradient(top, #12408C, #2C67CA);
                    background: -moz-linear-gradient(top, #12408C, #2C67CA);
                    .nav_btn {
                        width: 15%;
                        cursor: pointer;
                        color: #71D3FF;
                        .nav_btn_in {
                            p {
                                transform: skew(15deg);
                                font-size: 2.40741vh;
                                line-height: 5vh;
                                text-align: center;
                                font-weight: 600;
                            }
                        }
                    }
                    .nav_btn:hover {
                        background: -moz-linear-gradient(top, #1E70D3, #0498FF);
                        color: #fff;
                    }
                    .nav_btn_active {
                        background: linear-gradient(top, #1E70D3, #0498FF);
                        background: -moz-linear-gradient(top, #1E70D3, #0498FF);
                        color: #fff;
                        .nav_btn_in {
                            background: linear-gradient(to left, #fff, #fff) left top no-repeat,
                            linear-gradient(to bottom, #fff, #fff) left top no-repeat,
                            linear-gradient(to left, transparent, transparent) right top no-repeat,
                            linear-gradient(to bottom, transparent, transparent) right top no-repeat,
                            linear-gradient(to left, transparent, transparent) left bottom no-repeat,
                            linear-gradient(to bottom, transparent, transparent) left bottom no-repeat,
                            linear-gradient(to left, #fff, #fff) right bottom no-repeat,
                            linear-gradient(to left, #fff, #fff) right bottom no-repeat;
                            background-size: 2px 2vh, 2vh 2px, 2px 2vh, 2vh 2px;

                        }
                    }
                }
            }
            .data_date {
                width: 25%;
                height: 5vh;
                margin-top: 3vh;
                background: linear-gradient(top, #12408C, #2C67CA);
                background: -moz-linear-gradient(top, #12408C, #2C67CA);
                transform: skew(-15deg);
                p {
                    transform: skew(15deg);
                    font-size: 1.6667vh;
                    color: #fff;
                    line-height: 5vh;
                    text-align: center;
                }
            }

        }
    }

</style>