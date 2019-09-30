<template>
  <div class="main">
    <tabbar hoverColor="#2d3a4b" bgColor="#141a24" :list="list" v-on:click="listClick"></tabbar>
    <div class="showForm" @click="showPop">
      <img src="../../static/icon/left.png" style="width: 30px;margin: 8px;"/>
    </div>
    <popup v-model="currentValue">
      <div class="loginForm">
        <el-form ref="form"  :model="form" >
          <el-form-item>
            <el-input class="input" v-model="form.username" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input class="input" v-model="form.password" placeholder="请输入密码"  show-password></el-input>
          </el-form-item>
          <el-form-item :gutter="20">
            <el-col :span="12"><el-button type="primary" class="form-btn" style="margin-right: 5%" @click="onSubmit">登录</el-button></el-col>
            <el-col :span="12"><el-button type="default" class="form-btn" style="margin-left: 5%"  @click="goReg">注册</el-button></el-col>
          </el-form-item>
        </el-form>
      </div>
    </popup>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import Popup from '@/components/popup.vue'
import axios from '@/utils/axios'
export default {
  name: 'login',
  components: {Tabbar, Popup},
  data () {
    return {
      list: [
        {src: '../../static/icon/001.png', msg: '001'},
        {src: 'http://pic26.nipic.com/20130121/9252150_101440518391_2.jpg', msg: '裂开'}
      ],
      currentValue: false,
      form: {
        username: '',
        password: ''
      }
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
    onSubmit () {
      axios({
        method: 'post',
        url: '/Login',
        data: this.form,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }).then(function (res) {
        console.log(res)
      }).catch(function (err) {
        console.log(err)
      })
    },
    goReg () {
      alert('功能开发中')
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
