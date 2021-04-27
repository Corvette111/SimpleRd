<template>
  <div class="hello">
    <navigation-bar/>
  </div>
</template>

<script>
import NavigationBar from './NavigationBar.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    NavigationBar
  }
}
</script>

<!-- Ad
    NavigationBard "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
