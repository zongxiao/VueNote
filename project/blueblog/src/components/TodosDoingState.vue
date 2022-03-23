<template>
  <div class="all_state_box" v-show="todosCheckedLength">
    <label class="label">
      <el-checkbox class="check_box" v-model="allTotoState"></el-checkbox>
      <span class="checkd_num">checked：</span>
      <span class="total_num">{{ todosCheckedLength }}/{{ todosLength }}</span>
    </label>
    <el-button
      type="primary"
      icon="el-icon-check"
      size="small"
      class="finished_btn"
      v-show="todosCheckedLength"
      @click="sortByTodosState"
      >finished</el-button
    >
  </div>
</template>

<script>
export default {
  name: "TodosDoingState",
  props: ["todos"],
  data() {
    return {};
  },
  computed: {
    todosCheckedLength() {
      return this.todos.filter((element) => element.checked).length;
    },
    todosLength() {
      return this.todos.filter((element) => !element.done).length;
    },
    allTotoState: {
      get() {
        return (
          this.todosCheckedLength === this.todosLength && this.todosLength > 0
        );
      },
      set(value) {
        this.$bus.$emit("changeAllTodoState", value);
      },
    },
  },
  methods: {
    sortByTodosState() {
      this.$message({
        message: "恭喜你，任务完成",
        type: "success",
      });
      this.$bus.$emit("sortByTodosState");
    },
  },
};
</script>

<style lang="stylus" src="../assets/css/components/todos-doing-state.styl"></style>
