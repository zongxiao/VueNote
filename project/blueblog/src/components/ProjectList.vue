<template>
  <ul class="projects_body">
    <ProjectItem
      v-for="project in curProjectList"
      :key="project.id"
      :project="project"
    />
  </ul>
</template>

<script>
import { mapState } from "vuex";
import ProjectItem from "../components/ProjectItem";
export default {
  name: "ProjectList",
  components: {
    ProjectItem,
  },
  props: ["type"],
  data() {
    return {
      curProjectList: [],
    };
  },
  computed: {
    ...mapState(["projects"]),
  },
  mounted() {
    this.curProjectList = this.projects.filter(
      (element) => element.type === this.type
    );
  },
};
</script>

<style>
.projects_body:after {
  content: "";
  display: block;
  clear: left;
}
</style>