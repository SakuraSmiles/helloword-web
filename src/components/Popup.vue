<template>
  <div @touchmove="onTouchMove" :style="styleObject">
    <!-- 遮罩层动画 -->
    <div class="mask" @click="hideOnBlur && (currentValue = false)" v-show="currentValue"></div>
    <input style="display:none" v-model="currentValue">
    <!-- 显示信息层 -->
    <transition :name="dialogTransition">
      <div class="popupBox" v-show="currentValue">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    // 是否显示
    value: {
      type: Boolean,
      default: false
    },
    // 弹窗动画
    dialogTransition: {
      type: String,
      default: 'slide-fade'
    },
    // 点击遮罩层关闭弹窗
    hideOnBlur: {
      default: function () {
        return true
      }
    },
    // 禁止页面滚动
    scroll: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: '#2d3a4b'
    }
  },
  created () {
    if (typeof this.value !== 'undefined') {
      this.currentValue = this.value
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit(val ? 'on-show' : 'on-hide')
      this.$emit('input', val)
    }
  },
  data () {
    return {
      // 传进来的值
      currentValue: false
    }
  },
  methods: {
    onTouchMove: function (event) {
      !this.scroll && event.preventDefault()
    }
  },
  computed: {
    styleObject: function () {
      return {
        '--bgcolor': this.bgColor
      }
    }
  }
}
</script>
<style scoped>
  /*遮罩层*/
  .mask {
    position: fixed;
    z-index: 50;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  .popupBox {
    position: fixed;
    bottom: 0px;
    right: 0px;
    background-color: var(--bgcolor);
    max-height: 100%;
    min-height: 100%;
    z-index: 51;
    transform: translateY(0%);
    font-size: 0.3rem;
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  .slide-fade-enter,
  .slide-fade-leave-active {
    transform: translateX(100%);
    opacity: 0;
  }
</style>
