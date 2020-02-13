<template>
  <div class="toast" :class="type ? `toast-${type}` : ''">
    <p>{{content || errorText}}</p>
  </div>
</template>
<script>
  export default {
    name: 'Toast',
    data () {
      return {
        errorText: '服务器错误，请稍后重试',
        duration: 3000,
        onClose(){},
        type: ''
      }
    },
    mounted () {
      setTimeout(() => {
        this.onClose()
        this.$destroy()
        this.$el.parentNode.removeChild(this.$el)
      }, this.duration)
    }
  }
</script>
<style lang="less" scoped>
  .toast {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    z-index: 9999;
    background: transparent;

    > p {
      padding: 12px 22px;
      font-size: 18px;
      border-radius: 4px;
      background: rgba(17, 17, 17, 0.7);
    }

    &.toast-error p {
      background: rgba(255, 0, 0, 0.5);
    }

    &.toast-success p {
      background: rgba(0, 255, 0, 0.5);
    }
  }
</style>
