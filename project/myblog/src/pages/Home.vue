<template>
  <div>
    <HomeBanner />
    <HomeProject />
  </div>
</template>

<script>
import HomeBanner from "../components/HomeBanner.vue";
import HomeProject from "../components/HomeProject.vue";
export default {
  name: "Home",
  components: {
    HomeBanner,
    HomeProject
  },
};
</script>

<style scoped>

</style>