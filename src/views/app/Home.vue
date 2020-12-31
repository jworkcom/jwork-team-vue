<template>
  <div>
    <el-button type="info" @click="logout()">退 出</el-button>
  </div>
</template>

<script>
  export default {
    methods : {
      logout(){
        window.sessionStorage.clear();
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>

</style>
