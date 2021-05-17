<template>
  <div class="example">
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
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .example {
    height: 100px;
    overflow-y: scroll;
  }
</style>