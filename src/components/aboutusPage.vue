<template>
    <div class="aboutus-bg">
        <div class="aboutus-bar">
            <img src="../assets/usbanner.jpg">
        </div>
        <div class="us-content">
            <div>
                <img src="../assets/touxiang.jpg" class="touxiang">
                <h3>张新松</h3>
                <p>我是河北师范大学软件学院的一名学生。本人积极乐观，拥有对前端无限的技术热情、正在向全栈努力。执行能力强且做事态度认真要求完美，能够独立解决问题。学习热情与学习能力强，能够自我提升。沟通能力强，与团队协作能力突出。现在实践经验不多，但一直在努力进步。</p>
            </div>
            <div class="me-skills">
                <h3>个人技能</h3>
                <div class="us-word">
                    <a>Html5</a>
                    <a>CSS3</a>
                    <a>JavaScript</a>
                    <a>Vue.js</a>
                    <a>AngularJS</a>
                    <a>Node.js</a>
                    <a>jQuery</a>
                    <a>Bootstarp</a>
                    <a>jQuery Mobile</a>
                    <a>ps</a>
                    <a>cocos2d</a>
                </div>
            </div>
            <div class="liuyan">
                <h3>留言</h3>
                <textarea></textarea>
                <input type="submit" value="提交" id="submit">
            </div>
        </div>

    </div>
 </template>
          
<script>
    export default {
        data () {
            return {
                    
            }
        }
    }
</script>
    
<style>
    .aboutus-bg{
        width: 100%;
        height: auto;
        background-color: #a1a3a6;
        margin: 0;
        padding: 0 0 40px 0;
    }
    .aboutus-bar img{
        width: 100%;
        height: 200px;
    }
    .us-content{
        width: 1000px;
        margin: 0 auto;
        padding-top: 20px;
    }
    .touxiang{
        float: left;
        width: 100px;
        height: 100px;
        margin-right: 20px;
    }
    .me-skills{
        margin-top: 30px;
    }
    .us-word a{
        text-decoration: none;
        border: 1px solid gray;
        border-radius: 4px;
        padding: 4px 8px;
        margin: 5px 10px;
        display: inline-block;
        color: #2c3e50;
    }
    .liuyan textarea{
        width: 1000px;
        height: 200px;
        font-size: 20px;
    }
    #submit{
        float: right;
        width: 60px;
        height: 30px;
        color: #2c3e50;
        background-color: gray;
        border: 1px solid gray;
        font-weight: bold;
   }
</style>