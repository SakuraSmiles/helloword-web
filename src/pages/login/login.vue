<template>
  <div class="main">
    <tabbar hoverColor="#2d3a4b" bgColor="#141a24" :list="list" v-on:click="listClick"></tabbar>
    <div class="showForm" @click="showPop">
      <img src="../../../static/icon/left.png" style="width: 30px;margin: 8px;"/>
    </div>
    <popup v-model="currentValue" bgColor="#2d3a4b">
      <div class="loginForm">
        <div v-if="info" style="color:white">
          账户名：{{info.name}}
        </div>
        <div v-else>
          <login-form v-on:loginSuccess="loginSuccess"></login-form>
        </div>
      </div>
    </popup>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import Popup from '@/components/popup.vue'
import LoginForm from './loginForm'
export default {
  name: 'login',
  components: {Tabbar, Popup, LoginForm},
  data () {
    return {
      list: [
        {src: '../../static/icon/001.png', msg: '点击第一个图标'},
        {src: '../../static/icon/002.png', msg: '点击第二个图标'}
      ],
      currentValue: false,
      info: false
    }
  },
  methods: {
    // 标题栏点击事件
    listClick (obj) {
      alert(obj.msg)
    },
    showPop () {
      this.currentValue = true
    },
    loginSuccess (info) {
      this.info = info
    }
  }
}
</script>

<style scoped>
  div{
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }
  .main{
    padding-top: 50px;
  }
  .showForm{
    position: absolute;
    right: 0;
    color: white;
    height: 100%;
    background-color: #2d3a4b;
    line-height: 100vh;
    top: 0;
  }
  .loginForm{
    width: 260px;
    padding: 60px;
    padding-top: 40vh;
  }
  .form-btn{
    width: 95%
  }
</style>
