<template>
  <div>
    <el-form ref="form"  :model="form" >
      <el-form-item>
        <el-input class="input" v-model="form.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input class="input" v-model="form.password" placeholder="请输入密码"  show-password></el-input>
      </el-form-item>
      <el-form-item :gutter="20">
        <el-col :span="12"><el-button type="primary" class="form-btn" style="margin-right: 5%" @click="onSubmit()">登录</el-button></el-col>
        <el-col :span="12"><el-button type="default" class="form-btn" style="margin-left: 5%"  @click="goReg()">注册</el-button></el-col>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from '@/utils/axios'
export default {
  props: {
  },
  created () {
    if (typeof this.value !== 'undefined') {
      this.currentValue = this.value
    }
  },
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      let that = this
      axios({
        method: 'POST',
        url: `/login?username=${this.form.username}&password=${this.form.password}`,
        data: {}
      }).then(function (res) {
        if (res.status === '400') {
          alert(res.msg)
        } else if (res.status === '200') {
          that.$store.state.userInfo = res.info
          that.$emit('loginSuccess', res.info)
        }
      }).catch(function (err) {
        console.log(err)
      })
    }
  },
  goReg () {
    alert('功能开发中')
  }
}
</script>
<style scoped>
  /*遮罩层*/
  .form-btn{
    width: 95%
  }
</style>
