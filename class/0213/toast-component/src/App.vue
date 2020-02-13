<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="vue toast组件开发"/>
    <button @click="handleToast">page 页面按钮</button>

    <button @click="handleSuccess">测试 success</button>
    <button @click="handleError">测试 error</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    handleToast (){
      console.log(this)
      this.$toast({
        duration: 1000,
        content: 'page 页面出错了',
        onClose(){
          console.log('toast 已经提示结束')
        }
      })
    },
    handleSuccess (){
      this.$toast.success({
        duration: 1000,
        content: '小伙子 你答对了'
      })
    },
    handleError (){
      this.$toast.error({
        duration: 1000,
        content: '妹子 你错啦',
        onClose() {
          console.log('和妹子讲道理就是不讲道理')
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
