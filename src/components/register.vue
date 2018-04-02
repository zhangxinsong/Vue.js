<template>
    <div class="register" v-if="isShow">
        <div class="register-main">
            <div class="register-close" @click="closeMyself">X</div>
            <div class="register-form">register</div>
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

            }
        },
        methods: {
            closeMyself () {
                this.$emit('on-close');
            }
        }
    }
</script>
<style>
    .register{
        position: fixed;
        top: 0px;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.4)
    }
    .register-main{
        width: 400px;
        height: 200px;
        margin: 0 auto;
        margin-top: 200px;
        border: 1px solid #000000;
        background-color: #ffffff;
    }
    .register-close{
        float: right;
        color: #000000;
        margin-right: 2px;
        cursor: pointer;
    }
</style>