<template>
  <div class="funny-input-container">
    <div
      class="funny-input-inner"
      :class="{'input-focus': focus}"
    >
      <div
        v-if="showInput"
        class="funny-input-block"
      >
        <input
          v-model="displayValue"
          class="funny-input-elm"
          type="text"
          ref="inputElm"
          @blur="handleBlur"
          @focus="handleFocus"
          :placeholder="placeholder"
        >
      </div>
      <div
        v-else-if="showString"
        class="funny-input-string"
        @click="changeType('input')"
      >
        <div class="funny-input-strelm" v-if="displayValue">
          {{ displayValue }}
        </div>
        <div class="funny-input-holder" v-else>
          {{ placeholder }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FunnyInput',
    model: {
      prop: 'value',
      event: 'change'
    },

    props: {
      // 一开始显示的状态
      type: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: 'Input your value',
      },
      value: {
        type: [String, Number],
        default: '',
      },
    },

    data() {
      return {
        showType: 'string', // "string" or "input"
        displayValue: '',
        focus: false, // 是否处于focus input状态
      }
    },

    computed: {
      showInput() {
        return this.showType === 'input'
      },
      showString() {
        return this.showType === 'string'
      }
    },
    watch: {
      showType(val) {
        if (val == 'input') {
          this.$nextTick(() => {
            this.$refs.inputElm.focus();
          })
        }
      }
    },

    mounted() {
      if (this.type) {
        this.showType = this.type;
      }
      if (this.value) {
        this.displayValue = this.value;
      }
    },
    methods: {
      changeType(type) {
        this.showType = type;
      },
      handleBlur() {
        this.focus = false;
        this.changeType('string');
        this.$emit('change', this.displayValue);
      },
      handleFocus() {
        this.focus = true;
        this.$emit('focus');
      }
    }

  }
</script>

<style lang="scss" scoped>
  .funny-input-container {
    display: inline-block;
    width: 200px;
    padding: 16px;

    .funny-input-inner {
      position: relative;
      width: 100%;
      padding-bottom: 4px;
      border-bottom: 1px solid #ddd;

      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -1px;
        transform: scale(0);
        transform-origin: center;
        transition: transform .15s linear;
        background: skyblue;
      }

      &.input-focus::after {
        transform: scale(1);
      }
    }

    .funny-input-elm {
      border: none;
      outline: none;
    }
  }
</style>