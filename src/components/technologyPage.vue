<template>
    <div class="tech-bg">
        <div class="tech-main">
            <div class="tech-top">
                <div class="tech-top-img"><img src="../assets/logo.png"></div>
                <div class="tech-top-title">VUEjs</div>
                <div class="tech-top-word"><span>简介：数据驱动的组件，为现代化的 Web 界面而生。作者-尤雨溪说：Vue.js 是一个用来开发 web 界面的前端库。它也有配套的周边工具。如果把这些东西都算在一起，那么你也可以叫它一个『前端框架』。但我个人更倾向于把它看做是一套可以灵活选择的工具组合。</span></div>
            </div>
            <div class="tech-web">
                <div class="tech-web-title">
                    <p class="tech-second">相关站点</p>
                </div>
                <div class="tech-web-word">
                    <a v-for="item in weblist" :href="item.url" target="_blank">{{ item.title }}</a>
                </div>
            </div>
            <div class="tech-essay">
                <div class="tech-essay-title">
                    <p class="tech-second">学习资源[文章]</p>
                </div>
                <div class="tech-essay-word">
                    <ul>
                        <li v-for="item in essaylist"><a :href="item.url" target="_blank">{{ item.title }}<span>{{ item.name }}</span></a></li>
                    </ul>
                </div>
            </div>
            <div class="tech-essay">
                <div class="tech-essay-title">
                    <p class="tech-second">学习资源[视频]</p>
                </div>
                <div class="tech-essay-word">
                    <ul>
                        <li v-for="item in videolist"><a :href="item.url" target="_blank">{{ item.title }}<span>{{ item.name }}</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
      
<script>
    export default {
        data () {
            return {
                weblist: [{
                        title:"vue.js 官网",
                        url:"https://vuejs.org/"
                    },
                    {
                        title:"vue.js 中文网",
                        url:"https://cn.vuejs.org/"
                    },
                    {
                        title:"vue.js 论坛",
                        url:"https://forum.vuejs.org/"
                    },
                    {
                        title:"vue.js for Github",
                        url:"https://forum.vuejs.org/"
                    },
                    {
                        title:"vue.js API",
                        url:"https://cn.vuejs.org/v2/api/"
                    },
                    {
                        title:"vue.js 聊天室",
                        url:"https://gitter.im/vuejs/vue"
                    },
                    {
                        title:"中文翻译组",
                        url:"http://vuefe.cn/"
                    },
                    {
                        title:"vue资源大全",
                        url:"https://github.com/vuejs/awesome-vue"
                    },
                    {
                        title:"vue-router",
                        url:"http://vuefe.cn/router"
                    }
                ],
                essaylist: [
                    {
                        title:"Vue.js教程",
                        url:"http://wiki.jikexueyuan.com/project/vue-js/",
                        name:"极客学院"
                    },
                    {
                        title:"Vue.js中文入门",
                        url:"http://www.html-js.com/article/column/99/",
                        name:"前端乱炖"
                    },
                    {
                        title:"Vue.js基本语法",
                        url:"https://segmentfault.com/a/1190000004012600",
                        name:"segmentfault"
                    },
                    {
                        title:"使用Vue.js从零构建GitHub项目浏览器",
                        url:"https://segmentfault.com/a/1190000005651367",
                        name:"segmentfault"
                    },
                    {
                        title:"vue组件化开发初体验-示例vue-loader-example学习记录",
                        url:"https://segmentfault.com/a/1190000004060034",
                        name:"segmentfault"
                    },
                    {
                        title:"vue-cli + webpack 多页面实例配置优化方法",
                        url:"https://segmentfault.com/a/1190000006741478",
                        name:"segmentfault"
                    },
                    {
                        title:"Vue.js学习笔记",
                        url:"https://segmentfault.com/a/1190000005118942",
                        name:"segmentfault"
                    },
                ],
                videolist: [{
                        title:"vue.js入门基础",
                        url:"http://www.imooc.com/learn/694",
                        name:"慕课网"
                    },
                    {
                        title:"携程C4技术分享沙龙",
                        url:"http://www.imooc.com/learn/327",
                        name:"慕课网"
                    },
                    {
                        title:"Vuejs 1.0 系列教程",
                        url:"https://www.codecasts.com/series/vue-js-1-0-in-action-series",
                        name:"codecasts"
                    },
                    {
                        title:"Vue.js详解",
                        url:"http://www.maiziedu.com/course/916/",
                        name:"麦子学院"
                    }
                ]

            }
        }
    }
</script>

<style>
    /* .drop-enter-active {
        transition: all .5s ease;
    }
    .drop-leave-active{
        transition: all .3s ease;
    }
    .drop-enter{
        transform: translateX(-500px);
    }
    .drop-leave{
        transform: translateX(500px);
    } */
    .tech-bg{
        width: 100%;
        height: auto;
        background-color: #a1a3a6;
        margin: 0;
        padding: 10px 0 40px 0;
    }
    .tech-main{
        width: 1000px;
        margin: 0 auto 0 auto;
        background-color: #fff;
        padding-top:20px;
        padding-bottom:20px;
    }
    .tech-top{
        width: 900px;
        /* height: 110px; */
        margin: 0 50px 0 50px;
    }
    .tech-top .tech-top-img{
        float: left;
        margin-right: 20px;
    }
    .tech-top-img img{
        width: 80px;
        height: 80px;
        border: 5px solid gray;
    }
    .tech-top-title{
        font-size: 18px;
        display: inline-block;
        margin-top: 5px;
    }
    .tech-top-word{
        width: 760px;
        margin-top: 5px;
        display: inline-block;
    }
    .tech-web{
        width: 900px;
        /* height: 110px; */
        margin: 0 50px 0 50px;
    }
    .tech-second{
        font-size: 18px;
    }
    .tech-web-word a{
        text-decoration: none;
        border: 1px solid gray;
        border-radius: 4px;
        padding: 4px 8px;
        margin: 5px 10px;
        display: inline-block;
        color: #2c3e50;
    }
    .tech-web-word a:hover{
        color: #fff;
        background-color: #2c3e50;
    }
    .tech-essay{
        margin: 0 50px 0 50px;
    }
    .tech-essay-word ul{
        padding-left: 30px;
        margin-bottom: 0px;
    }
    .tech-essay-word ul li{
        margin-top: 5px;
    }
    .tech-essay-word ul li a{
        text-decoration: none;
        color: #2c3e50;
    }
    .tech-essay-word ul li a span{
        font-size: 10px;
        color: #fff;
        border: 1px solid gray;
        background-color: rgb(83, 80, 80);
        padding: 1px 2px;
        border-radius: 2px;
        margin-bottom: 3px;
        line-height: 20px;
    }
    .tech-video{
        margin: 0 50px 0 50px;
    }
</style>