<template>
  <li class="todo_item">
    <label
      ><el-checkbox
        class="check_box"
        :value="todo.done"
        @change="handleTodoState(todo.id)"
      ></el-checkbox
      ><span class="name" :class="{ checked: todo.done }">{{ todo.name }}</span
      ><span class="time">({{ todo.time | timeFormat }})</span></label
    >
    <div class="operation">
      <el-button
        type="primary"
        size="small"
        icon="el-icon-edit"
        circle
      ></el-button>
      <el-button
        type="danger"
        size="small"
        icon="el-icon-delete"
        circle
      ></el-button>
    </div>
  </li>
</template>

<script>
export default {
  name: "TodosDoingItem",
  props: ["todo"],
  methods: {
    handleTodoState(id) {
      this.$bus.$emit('changeTodoState', id)
    }
  }
};
</script>

<style lang="stylus">
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
    cursor: pointer;

    .el-checkbox__inner {
      border: 1px solid #999;
    }
  }

  .name {
    margin-left: 5px;
    font-size: 15px;
    color: #333;

    &.checked {
      color: #409EFF;
    }
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