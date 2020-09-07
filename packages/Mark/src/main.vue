<template>
  <div class="funny-mark-container">
    <mark
      :style="markStyle"
      ref="mark-content"
      :data-mark-size="size"
      :data-mark-duration="duration"
    >
      <slot></slot>
    </mark>
  </div>
</template>

<script>
import observer from './observe.js'
const color = '#00EE76';
const size = 38;
const duration = 1;
export default {
  name: 'FunnyMark',
  props: {
    color: {
      type: String,
      default: color
    },
    size: {
      type: [String, Number],
      default: size
    },
    duration: {
      type: [String, Number],
      default: duration
    }
  },
  computed: {
    markStyle() {
      return {
        'background-image': `linear-gradient(${this.color}, ${this.color})`,
        'background-size': `0 ${this.size}%`
      }
    },
  },
  mounted() {
    observer.observe(this.$refs['mark-content'])
  },
  beforeDestroy() {
    observer.unobserve(this.$refs['mark-content'])
  },
}
</script>

<style lang="scss" scoped>
  mark {
    background: transparent;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: all linear;
  }
</style>