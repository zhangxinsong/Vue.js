<template>
    <div class="about" v-if="isShow">
        <div class="about-main">
            <div class="about-close" @click="closeMyself">X</div>
            <div class="about-form">
                <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>
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
    .about{
        position: fixed;
        top: 0px;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.4)
    }
    .about-main{
        width: 400px;
        height: 200px;
        margin: 0 auto;
        margin-top: 200px;
        border: 1px solid #000000;
        background-color: #ffffff;
    }
    .about-close{
        float: right;
        color: #000000;
        margin-right: 2px;
        cursor: pointer;
    }
    .about-form{
        padding: 10px 10px;
    }
</style>