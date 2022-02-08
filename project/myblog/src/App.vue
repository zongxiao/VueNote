<template>
  <div id="app">
    <TopHeader />
    <router-view />
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
  .w1200 {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
</style>
