<template>
  <div class="box">
    <div class="todos">
      <ul>
        <TodosDoneItem
          v-for="item in todosDone"
          :key="item.id"
          :todo="item"
        ></TodosDoneItem>
      </ul>
      <el-empty
        v-if="!todosDone.length"
        description="别摸鱼了，你一件事都没做完"
      ></el-empty>
      <el-button
        type="danger"
        icon="el-icon-delete"
        size="small"
        v-show="this.todosDone.length"
        class="delete_btn"
        @click="clearAllTodoFinished"
        >clear all</el-button
      >
    </div>
  </div>
</template>

<script>
import TodosDoneItem from "./TodosDoneItem.vue";
export default {
  name: "TodosDone",
  props: ["todosDone"],
  data() {
    return {};
  },
  components: {
    TodosDoneItem,
  },
  mounted() {},
  methods: {
    clearAllTodoFinished() {
      this.$confirm("此操作将永久清空所有已完成的任务项, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$bus.$emit("clearAllTodoFinished");
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang="stylus" socped>
.todos
  ul
    border-top-left-radius: 6px
    border-top-right-radius: 6px
    border-left: 1px solid #eee
    border-right: 1px solid #eee
  .delete_btn
    margin: 20px 0 0 21px
</style>
