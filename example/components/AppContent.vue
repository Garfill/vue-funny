<template>
  <div class="app-container">
    <aniplex-exp />
    <mark-exp />
    <verify-exp />
    <input-exp />
  </div>
</template>

<script>
  import AniplexExp from './Aniplex';
  import MarkExp from './Mark';
  import VerifyExp from './Verify';
  import InputExp from './Input'

  export default {
    components: {
      AniplexExp,
      MarkExp,
      VerifyExp,
      InputExp,
    },
  }
</script>
