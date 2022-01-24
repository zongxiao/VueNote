<template>
  <div id="app">
    <div class="container">
      <TopHeader />
      <router-view />
    </div>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader.vue'
export default {
  name: 'App',
  components: {
    TopHeader
  }
}
</script>

<style>
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
</style>
