<template>
  <li class="todo_item">
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
      this.$confirm('确定还原到待办事项列表中吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$bus.$emit('undoFinished', id)
        this.$message({
          type: 'success',
          message: '还原成功，请前往DOING中查看!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消还原'
        });          
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.todo_item {
  border-bottom: 1px solid #eee;
  padding: 6px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:first-child {
    border-top: 1px solid #eee;
  }

  &:hover {
    background-color: #eee;

    .operation {
      opacity: 1;
    }
  }

  label {
  }

  .name {
    margin-left: 5px;
    font-size: 14px;
    color: #999;
    text-decoration: line-through
  }

  .time {
    font-size: 12px;
    color: #aaa;
    margin-left: 4px;
  }
  .operation {
    opacity: 0;
  }
}
</style>