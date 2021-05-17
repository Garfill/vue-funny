<template>
  <div class="funny-verify-container">
    <div class="verify-img-box">
      <!-- 图片框 -->
      <div class="verify-img-block" ref="imgBlock"></div>
      <!-- 刷新图片按钮 -->
      <span
        class="verify-refresh-button"
        @click.left="refreshImg"
      >refresh</span>
      <!-- 阴影块，待填入部分 -->
      <span
        class="verify-fill-block"
        :style="verifyStyle"
      ></span>
      <!-- 拖动填充块 -->
      <span
        class="verify-confirm-block"
        :style="confirmStyle"
      ></span>
    </div>
    <div 
      class="verify-swipe-box"
      @mousemove="moveHanlde"
    >
      <div class="verify-swipe-bar">
        <span :class="{'swipe-hidden': moveAble}">{{ swipeText }}</span>
      </div>
      <span
        ref="swiper"
        class="verify-swiper"
        :style="{'left': swiperLeft + 'px'}"
        @mousedown.left="downHandle"
        @mouseup="upHandle"
      ></span>
    </div>
  </div>
</template>

<script>
import { getStyleValue } from '@/util/index.js'
export default {
  name: 'funny-verify',
  props: {
    image: {
      type: String,
      default: '',
      required: true
    },
    swipeText: {
      type: String,
      default: 'swipe verify'
    },
    offset: {
      type: [String, Number],
      default: 2,
    }
  },
  data() {
    return {
      moveAble: false, // 鼠标按下后标识为 true，即可触发拖动事件

      swiperLeft: 0, // 滑块左边距离

      verifyLeft: 0,
      verifyTop: 0,

      verifyImg: {},
      imgWidth: 0,

      startX: 0,
    }
  },
  computed: {
    verifyStyle() {
      return {
        top: this.verifyTop + 'px',
        left: this.verifyLeft + 'px',
      }
    },
    confirmStyle() {
      return {
        top: this.verifyTop + 'px',
        left: this.swiperLeft + 'px',
        backgroundImage: 'url(' + this.image + ')',
        backgroundPosition: `-${this.verifyLeft}px -${this.verifyTop}px`,
        backgroundSize: this.imgWidth + 'px',
      }
    }
  },
  watch: {
    image: {
      handler(newVal) {
        this.verifyImg = new Image()
        this.verifyImg.onload = () => {
          this.$refs.imgBlock.innerHTML = '';
          this.$refs.imgBlock.append(this.verifyImg);
          this.imgWidth = this.verifyImg.width;
          this.genVerify();
        }
        this.verifyImg.src = newVal
      },
      immediate: true
    }
  },
  methods: {
    refreshImg() {
      this.$emit('refresh')
    },
    genVerify() {
      // 随机生成验证块的位置
      let boxWidth = this.boxWidth = parseInt(getStyleValue(this.$refs.imgBlock, 'width'));
      let boxHeight = this.boxHeight = parseInt(getStyleValue(this.$refs.imgBlock, 'height'));
      let swiperHeight = this.swiperHeight = parseInt(getStyleValue(this.$refs.swiper, 'height'));
      let swiperWidth = this.swiperWidth = parseInt(getStyleValue(this.$refs.swiper, 'width'));
      let temp = Math.floor(Math.random() * (boxWidth - swiperWidth));
      this.verifyLeft = temp < this.swiperWidth ? temp + swiperWidth : temp;
      this.verifyTop = Math.floor(Math.random() * (boxHeight - swiperHeight));
    },
    downHandle(e) {
      this.moveAble = true;
      this.startX = e.clientX || 0;
    },
    moveHanlde(e) {
      if (!this.moveAble) return
      const disX = e.clientX - this.startX;
      let res = this.swiperLeft + disX;
      if (res < 0) {
        res = 0;
      } else if (res + this.swiperWidth > this.boxWidth) {
        res = this.boxWidth - this.swiperWidth;
      }
      this.swiperLeft = res;
      this.startX = e.clientX;
    },
    upHandle(e) {
      if (this.moveAble) this.moveAble = false;
      this.startX = e.clientX;
      this.checkPos();
    },
    checkPos() {
      if (Math.abs(this.swiperLeft - this.verifyLeft) <= this.offset) {
        this.$emit('success')
      } else {
        this.swiperLeft = 0;
        this.$emit('fail')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .funny-verify-container {
    width: 100%;

    .verify-img-box {
      position: relative;
    }
    .verify-refresh-button {
      position: absolute;
      right: 0;
      bottom: 0;
      cursor: pointer;
      background: #fff;
      box-shadow: 0 0 5px 0 #000;
      font-size: 13px;
    }

    .verify-fill-block {
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4) inset;
    }
    .verify-confirm-block {
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 5px;
      background-repeat: no-repeat;
      background-attachment: scroll;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4), 0 0 10px 0 rgba(90, 90, 90, 0.4);
      z-index: 10;
    }

    .verify-swipe-box {
      position: relative;
      padding: 10px 0;

      .verify-swipe-bar {
        padding: 10px 0;
        text-align: center;
        font-size: 13px;
        background: #f5f5f5;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2) inset;
        border-radius: 20px;

        .swipe-hidden {
          opacity: 0;
        }
      }

      .verify-swiper {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        background: pink;
      }
    }
  }
</style>