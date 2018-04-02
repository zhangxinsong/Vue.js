<template>
    <div class="index-bg">
        <div class="index-wrap">
            <!-- <div class="index-left">
                <div class="index-left-block">
                    <h3>基础学习</h3>
                    <ul>
                        <li v-for="item in baseStudy">
                            <a :href="item.url">{{ item.title }}</a>
                        </li>
                    </ul>
                    <h3>VUE插件</h3>
                    <ul>
                        <li v-for="item in vuePlug">
                            <a :href="item.url">{{ item.title }}</a>
                        </li>
                    </ul>
                </div>
            </div> -->
            <div class="index-right">
                <!-- <index-page-right></index-page-right> -->
                <iframe name="content_frame" marginwidth=0 marginheight=0 width=100% height=1000px src="https://cn.vuejs.org/v2/guide/installation.html" frameborder=0></iframe> 
            </div>
        </div>
    </div>
</template>
<script> 
    export default {
        data () {
            return {
                isshowlogin: false,
            }
        },
    // created: function(){
    //     this.$http.get('api/baseStudy')
    //     .then((res) => {
    //         console.log(res.data);
    //     },(err) => {
    //         console.log(err);
    //     })
    // },
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
    .index-bg{
        width: 100%;
        height: auto;
        background-color: #a1a3a6;
        margin: 0;
        padding: 10px 0 40px 0;
    }
    .index-wrap{
        width: 1000px;
        margin: 0 auto 0 auto;
    }
    .index-left{
        width: 200px;
        display: inline-block;
        background-color: #fff;
    }
    .index-right{
        display: inline-block;
        width: 790px;
    }
    .index-left-block h3{
        width: 100px;
        color: #1a2933;
        padding: 5px 8px;
        margin: 0;
    }
    .index-left-block ul{
        margin: 10px 0px;
        padding-left: 20px; 
    }
    .index-left-block ul li{
        list-style: none;
    }
    .index-left-block ul li a{
        color: #1a2933;
        text-decoration: none;
    }
    .index-left-block ul li a{
        text-decoration: none;
        /* color :white; */
    }
    .index-right{
        display: inline-block;
        width: 990px;
    }
</style>