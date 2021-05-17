<template>
<div class="example">
  <h4>Input Component Example</h4>
  <funny-input
    v-model="val"
  ></funny-input>
</div>
</template>

<script>
export default {
  data() {
    return {
      val: '',
    }
  }
}
</script>

<style lang="scss" scoped>
  .example {
    padding: 20px;
  }
</style>