<template>
  <div class="school">学校名称：{{ name }}</div>
</template>

<script>
import {mixin1} from '../mixin'
export default {
  name: "School",
  data() {
    return {
      name: "北京大学",
    };
  },
  mixins: [mixin1],
};
</script>

<style>
.school {
  background-color: azure;
  color: blueviolet;
}
</style>