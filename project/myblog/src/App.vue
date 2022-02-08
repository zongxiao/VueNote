<template>
  <div id="app">
    <AllHeader />
    <router-view />
    <AllFooter />
  </div>
</template>

<script>
import AllHeader from './components/AllHeader.vue'
import AllFooter from './components/AllFooter.vue'
export default {
  name: 'App',
  components: {
    AllHeader,
    AllFooter
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
