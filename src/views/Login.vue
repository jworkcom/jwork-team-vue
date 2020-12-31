<template>
  <div class="page">
    <div class="login-panel">
      <div class="logo">
        <img class="logo" src="../assets/login-logo.png"/>
      </div>
      <div class="form-panel">
        <div>
          <h2 class="c">JWork Team V1.0</h2>
          <el-divider></el-divider>
        </div>
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="账号" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" placeholder="密码" prefix-icon="el-icon-lock"
                      status-icon></el-input>
          </el-form-item>
          <el-form-item class="buttons">
            <el-button type="primary" @click="login()">登 录</el-button>
            <el-button @click="resetLoginForm()">重 置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loginForm: {
          username: 'yale',
          password: 'yale_123'
        },
        loginFormRules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      resetLoginForm() {
        this.$refs.loginFormRef.resetFields();
      },
      login(){
        this.$refs.loginFormRef.validate(async (valid) => {
          if(!valid) return;
          const res = await this.$http.post('login', this.loginForm);
          if(!res.data.success) {
            this.$message.error(res.data.msg);
            return;
          }
          console.log(res);
          console.log(res.data.obj.token);
          window.sessionStorage.setItem("token", res.data.obj.token);
          this.$router.push({path:'/app/home', query: {username: res.data.obj.username}});
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  .page {
    height: 100%;
    background-color: #2b4b6b;
  }

  .login-panel {
    width: 420px;
    height: 330px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    box-shadow: 2px 2px 2px #05283F;
    transform: translate(-50%, -50%);

    .logo {
      height: 130px;
      width: 130px;
      padding: 10px;
      /*
      border: 1px solid #eee;
      box-shadow: 0 0 10px #ddd;
       */
      border-radius: 50%;
      background-color: #fff;
      margin: -65px auto;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        padding: 0px;
        background-color: #eee;
        margin: 0px;
      }
    }

    .form-panel {
      position: absolute;
      bottom: 0px;
      width: 100%;
      padding: 0px 20px;

      .buttons {
        display: flex;
        justify-content: flex-end;
      }
    }

  }

</style>
