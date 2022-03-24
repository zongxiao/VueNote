<template>
  <li class="done_item">
    <label>
      <span class="name" :class="{ checked: todo.done }">{{ todo.name }}</span
      ><span class="time">({{ todo.time | timeFormat }})</span></label
    >
    <div class="operation">
      <el-button
        title="还原"
        type="success"
        size="small"
        icon="el-icon-refresh-left"
        circle
        @click="handleUndoFinished(todo.id)"
      ></el-button>
    </div>
  </li>
</template>

<script>
export default {
  name: "TodosDoneItem",
  props: ["todo"],
  methods: {
    handleUndoFinished(id) {
      this.$confirm("确定还原到待办事项列表中吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$bus.$emit("undoFinished", id);
          this.$message({
            type: "success",
            message: "还原成功，请前往DOING中查看!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消还原",
          });
        });
    },
  },
};
</script>

<style lang="stylus" src="../assets/css/components/todos-done-item.styl"></style>