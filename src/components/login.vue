<template>
    <div class="login" v-if="isShow">
        <div class="login-main">
            <div class="login-close" @click="closeMyself">X</div>
            <div class="login-form">
                <label>账号:</label>
                <input type="text" placeholder="手机号/邮箱" v-model="usernameModel">
                <span class="error">{{ userErrors.errorText }}</span>
                <br>
                <label>密码:</label>
                <input type="password" v-model="passwordModel">
                <br>
                <input type="submit" value="登录" @click="onlogin">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            isShow:{
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                usernameModel: '',
                passwordModel: ''
            }
        },
        computed: {
            userErrors () {
                let errorText, status
                if(!/@/g.test(this.usernameModel)){
                    status = false
                    errorText = '不包含@'
                }
                else{
                    status = true
                    errorText = ''
                }
                if(!this.userFlag) {
                    errorText = ''
                    this.userFlag = true
                }
                return {
                    status,
                    errorText
                }
            },
        },   
        methods: {
            closeMyself () {
                this.$emit('on-close');
            },
            onlogin () {
                if(!userErrors.status){
                    console.log('budui')
                }
                else{
                    this.$http.post('')
                    .then((data) => {

                    },(error) => {

                    })
                }
            }
        }
    }
</script>
<style>
    .login{
        position: fixed;
        top: 0px;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.4)
    }
    .login-main{
        width: 400px;
        height: 200px;
        margin: 0 auto;
        margin-top: 200px;
        border: 1px solid #000000;
        background-color: #ffffff;
    }
    .login-close{
        float: right;
        color: #000000;
        margin-right: 2px;
        cursor: pointer;
    }
    .login-form{
        text-align: center;
        margin-top: 50px;
    }
</style>