<template>
  <li class="card_box">
    <a class="card_cover" :href="project.url" target="_blank">
      <img :src="project.cover" :alt="project.name" />
      <i>{{ project.type }}</i>
    </a>
    <div class="card_info">
      <div class="name">
        <a :href="project.url">{{ project.name }}</a>
        <div class="pubtime">{{ project.doneTime }}</div>
      </div>
      <div class="subname">{{ project.describe }}</div>
    </div>
  </li>
</template>

<script>
export default {
  name: "ProjectItem",
  props: ["project"],
};
</script>

<style lang="stylus" src="../assets/css/components/project-item.styl"></style>