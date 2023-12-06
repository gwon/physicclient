<template>
  <div><div id="phaser-game"></div></div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  async beforeMount() {
    await import('../src/index')
  },
})
</script>
