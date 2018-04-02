<template>
    <div class="web-bg">
        <div class="web-bar">
            <img src="../assets/webbanner.jpg">
        </div>
        <div class="web-main">  
            <div class="web-list">
                <div v-for="item in weblist" class="web-box">
                    <div class="web-img"><a :href="item.href" target="_blank"><img :src="item.src"></a></div>
                    <p class="web-title"><a :href="item.href" target="_blank">{{ item.title }}</a></p>
                    <p class="web-introduce">{{ item.introduce }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
      
<script>
    export default {
        data () {
            return {
                weblist:[
                    {
                        title:"Vue.js Newsletter",
                        src:require('../assets/VuejsNewsletter.png'),
                        introduce:"Weekly dose of handpicked Vue.js news",
                        href:"https://news.vuejs.org/"
                    },
                    {
                        title:"Vue.js Developers",
                        src:require('../assets/vc3.png'),
                        introduce:"Vue.js Developers is a community of web developers",
                        href:"https://vuejsdevelopers.com/"
                    },
                    {
                        title:"vuejsfeed",
                        src:require("../assets/vuejsfeed.png"),
                        introduce:"The latest Vue.js news, tutorials, plug-ins, and so on",
                        href:"https://vuejsfeed.com/"
                    },
                    {
                        title:"vuecomponents",
                        src:require("../assets/vuecomponents.png"),
                        introduce:"Vue.js components community",
                        href:"https://vuecomponents.com/"
                    },
                    {
                        title:"madewithvuejs",
                        src:require("../assets/madewithvuejs.png"),
                        introduce:"A collection of projects made with vue.js",
                        href:"https://madewithvuejs.com/"
                    },
                    {
                        title:"vuejsexamples",
                        src:require("../assets/vuejsexamples.png"),
                        introduce:"A lot of examples of Vue.js are collected.",
                        href:"https://vuejsexamples.com/"
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
        transition: all 10s ease;
    }
    .drop-enter{
        transform: translateX(-500px);
    }
    .drop-leave{
        transform: translateX(500px);
    } */
    .web-bg{
        width: 100%;
        height: auto;
        background-color: #a1a3a6;
        margin: 0;
        padding: 0 0 40px 0;
    }
    .web-bar img{
        width: 100%;
        height: 600px;
    }
    .web-main{
        width: 1000px;
        margin: 0 auto 0 auto;
    }
    .web-box{
        display: inline-block;
        width: 450px;
        height: 400px;
        background-color: #fff;
        margin: 10px 20px;
    }
    .web-img{
        margin: 10px 0 0 25px;
    }
    .web-img img{
        width: 400px;
        height: 300px;
    }
    .web-title{
        text-align: center;
        font-size: 16px;
        font-weight: bold;
    }
    .web-title a{
        text-decoration: none;
        color: #2c3e50;
    }
    .web-title a:hover{
        color:#fff;
        background: #2c3e50;
        border: 1px solid #2c3e50;
        border-radius: 5px; 
    }
    .web-introduce{
        text-align: center;
    }


</style>