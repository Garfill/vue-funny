<template>
  <div class="app-container">

    <funny-aniplex word="aniplex" />

    <div class="mark-example">
      <h4>Mark Component Example</h4>
      <p>
        There is not a funny-mark-component. No line through the paragraph
      </p>
      <funny-mark
        duration="0.5"
        color="skyblue"
      >
        There is a funny-mark-component. You can see a line through the paragraph when you scroll this block.
      </funny-mark>
      <p>
        There is not a funny-mark-component. No line through the paragraph
      </p>
      <funny-mark
        duration="1"
        color="pink"
      >
        There is a funny-mark-component. You can see a line through the paragraph when you scroll this block.
      </funny-mark>
      <p>
        There is not a funny-mark-component. No line through the paragraph
      </p>
    </div>

    <div class="verify-example">
      <h4>Verify Component Example</h4>
      <funny-verify
        :image="verifyImg"
        @refresh="refreshVerify"
      ></funny-verify>
    </div>
  </div>
</template>

<script>
const verify1 = require('../assets/image/1.jpg');
const verify2 = require('../assets/image/2.jpg');
export default {
  data() {
    return {
      verifyImg: verify1
    }
  },
  methods: {
    refreshVerify() {
      this.verifyImg = this.verifyImg == verify1 ? verify2 : verify1
    }
  },
}
</script>

<style lang="scss" scoped>
  .mark-example {
    height: 100px;
    overflow-y: scroll;
  }
  .verify-example {
    padding: 20px;
  }
</style>