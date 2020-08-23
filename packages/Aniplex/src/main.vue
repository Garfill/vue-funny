<template>
  <div
    class="aniplex-container"
    v-if="wordList.length > 0"
  >
    <div class="aniplex-char-container">
      <span
        v-for="(word, index) in wordList"
        :key="'aniplex-key-' + index"
        :class="[calculateClass(index)]"
        :style="word.charStyle"
        class="aniplex-char"
      >
        {{ word.char }}
      </span>
    </div>
  </div>
</template>

<script>
const getAnimateDuration = (index, length) => {
  if (index <= 1 || index >= length - 3) {
    return '1.2s'
  } else {
    return '1s'
  }
}
export default {
  name: 'VueAniplex',
  props: {
    word: {
      type: String,
      default: '',
    },
  },
  computed: {
    splicePos() {
      if (!this.word) {
        return 0
      } else {
        return Math.floor(this.word.length / 2) - 1
      }
    },
    wordList() {
      let res = [];
      if (typeof this.word !== 'string') {
        console.error('The prop word of vue-aniplex need a String value');
        return res;
      }
      let i;
      let charDelay = 0.2; // 文字动画延迟
      for (i = 0; i < this.word.length; i++) {
        let item = {
          borderStyle: {},
          charStyle: {}
        };
        item.char = this.word[i].toUpperCase();
        item.charStyle.animationDelay = `${charDelay}s`;
        charDelay += (i == this.word.length - 2 || i == this.splicePos - 2) ? 0.3 : 0.2
        item.charStyle.animationDuration = getAnimateDuration(i, this.word.length)
        res.push(item);
      }
      return res;
    },
  },
  methods: {
    calculateClass(index) {
      return index < this.splicePos ? 'char-animate-half-before' : 'char-animate-half-after'
    }
  }
}
</script>

<style lang="scss" scoped>
  .aniplex-container {
    position: relative;
    margin: 50px auto;
    .aniplex-char-container {
      white-space: nowrap;
      text-align: center;
    }
    .aniplex-char {
      display: inline-block;
      position: relative;
      width: 60px;
      height: 60px;
      margin: 0 10px;
      line-height: 60px;
      font-size: 54px;
      font-weight: 900;
      font-style: italic;
      opacity: 0;
      color: #000;
      text-align: center;
    }
    .char-animate-half-before {
      animation: charAnimateBefore linear 2 forwards;
    }
    .char-animate-half-after {
      animation: charAnimateAfter linear 1 forwards;
    }
    @keyframes charAnimateBefore {
      0% {
        opacity: 1;
        transform: rotateY(0deg);
      }
      100% {
        opacity: 1;
        transform: rotateY(360deg);
      }
    }
    @keyframes charAnimateAfter {
      0% {
        opacity: 1;
        transform: rotateY(90deg);
      }
      100% {
        opacity: 1;
        transform: rotateY(360deg);
      }
    }

    .aniplex-border-container {
      position: absolute;
      top: 0;
      bottom: 0;
      white-space: nowrap;
    }
    .aniplex-border {
      position: absolute;
      width: 60px;
      height: 60px;
      margin: 0 10px;
      border: 4px solid;
      border-radius: 3px;
      animation-duration: 2s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  }
</style>