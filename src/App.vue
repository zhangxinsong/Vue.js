<template>
  <div id="app">
    <div class="app-header">
      <div class="app-header-inner">
        <img src="./assets/logo.png">
        <div class="header-nav">
          <ul class="nav-bar">
            <li><router-link to="/indexPage">VUE学习</router-link></li>
            <li><router-link to="/technologyPage">技术专题</router-link></li>
            <li><router-link to="/webPage">网站优选</router-link></li>
            <li><router-link to="/aboutusPage">关于我们</router-link></li>
          </ul>
          <ul class="nav-list">
            <li>{{ username }}</li>
            <li v-if="username===''" @click="loginClick">登录</li>
            <li>|</li>
            <li v-if="username!==''" @click="logoutClick">退出</li>
            <li v-if="username===''" @click="registerClick">注册</li>
            <li>|</li>
            <li @click="aboutClick">关于</li>
          </ul>
        </div>
      </div> 
    </div>
    <div class="app-content">
      <keep-alive>
        <transition name="drop">
          <router-view></router-view>
        </transition>  
      </keep-alive>
    </div>
    <div class="app-footer">
      <p>zhangxinsong</p>
    </div>
    <login :is-show="isshowlogin" @on-close="closelogin"></login>
    <register :is-show="isshowregister" @on-close="closeregister"></register>
    <about :is-show="isshowabout" @on-close="closeabout"></about>
  </div>
</template>

<script>
import Login from './components/login'
import Register from './components/register'
import About from './components/about'
export default {
  components: {
    Login,
    Register,
    About
  },
  name: 'App',
  data () {
    return {
      isshowlogin: false,
      isshowregister: false,
      isshowabout: false,
      username: ''
    }
  },
  methods: {
    loginClick () {
      this.isshowlogin = true
    },
    registerClick () {
      this.isshowregister = true
    },
    aboutClick () {
      this.isshowabout = true
    },
    closelogin () {
      this.isshowlogin = false
    },
    closeregister () {
      this.isshowregister = false
    },
    closeabout () {
      this.isshowabout = false
    },
    logoutClick () {
      this.username = ''
    }
  }
}
</script>

<style>
  .drop-enter-active {
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
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
.app-header{
  width: 100%;
  height: 60px;
  background-color: gray;
}
.header-nav{
  width: 95%;
}
.app-header .app-header-inner{
  width: 1000px;
  margin: 0 auto 0 auto;
}
.app-header .app-header-inner img{
  display: inline-block;
  margin-top: 10px;
  width: 40px;
  height: 40px;
}
.app-header .app-header-inner .nav-bar{
  display: inline-block;
  list-style: none;
}
.nav-bar li{
  float: left;
  font-size: 20px;
  padding: 5px 25px 5px 25px;
}
.nav-bar li a{
  color: #2c3e50;
  text-decoration: none;
}
.nav-bar li a:hover{
  color:#fff;
}
.app-header .app-header-inner .header-nav{
  display: inline-block;
}
.header-nav .nav-bar{
  margin: 0 0 0 120px;
  padding: 0px;
  display: inline-block;
}
.app-header .app-header-inner .header-nav .nav-list{
  list-style: none;
  display:block;
  float: right;
  margin: 7px 0 0 0 ;
  padding: 0;
}
.nav-list li{
  float: left;
  padding: 0 5px 0 5px;
}
.nav-list li:hover{
  cursor: pointer;
}
.app-footer{
  height: 50px;
  background-color: black;
  text-align: center;
  width: 100%;
}
.app-footer p{
  margin: 0;
}
</style>
