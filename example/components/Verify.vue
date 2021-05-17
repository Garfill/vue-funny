<template>
  <div class="example">
    <h4>Verify Component Example</h4>
    <funny-verify
      :image="verifyImg"
      @refresh="refreshVerify"
    ></funny-verify>
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
  .example {
    width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
</style>