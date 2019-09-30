<template>
  <div class="pj-tabbar" :style="styleObject">
    <div v-for="(item,i) in list" class="item" :style="styleObject" :key="i" @click="click(item)">
      <img :src="item.src"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  props: {
    hoverColor: {
      type: String,
      default: '#fff'
    },
    bgColor: {
      type: String,
      default: '#fff'
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    styleObject: function () {
      return {
        '--bgcolor': this.bgColor,
        '--color-hover': this.hoverColor
      }
    }
  },
  methods: {
    click (msg) {
      this.$emit('click', msg)
    }
  }
}
</script>

<style scoped>
  .pj-tabbar{
    height: 60px;
    background-color: var(--bgcolor);
    overflow: auto;
    position: fixed;
    width: 100vw;
    z-index: 99;
    top:0;
  }
  .item {
    height: 60px;
    overflow: hidden;
    float: left;
  }
  .item img{
    height: 40px;
    padding: 10px;
  }
  .item :hover{
    background-color: var(--color-hover);
  }
</style>
