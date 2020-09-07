<template>
  <div class="app-container">

    <funny-aniplex word="aniplex" />

    <div class="mark-example">
      There is the example for funny mark component.
      <p>
        There is  not a funny-mark-component. No line through the paragraph    
      </p>
      <funny-mark duration="0.5" color="skyblue">
        There is a funny-mark-component. You can see a line through the paragraph when you scroll this block.   
      </funny-mark>
      <p>
        There is  not a funny-mark-component. No line through the paragraph    
      </p>
      <funny-mark duration="1" color="pink">
        There is a funny-mark-component. You can see a line through the paragraph when you scroll this block.
      </funny-mark>
      <p>
        There is  not a funny-mark-component. No line through the paragraph    
      </p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
 .mark-example {
   width: 300px;
   height: 200px;
   overflow-y: scroll;
 }
</style>