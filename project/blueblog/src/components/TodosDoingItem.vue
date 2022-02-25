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
        @click="handleDeleteTodo(todo.id)"
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
    },
    handleDeleteTodo(id) {
      this.$bus.$emit('handleDeleteTodo', id)
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
    .is-focus {
      .el-checkbox__inner {
        border: 1px solid #999;
      }
    }
    .is-checked {
      .el-checkbox__inner {
        border: 1px solid #409EFF
      }
    }
  }

  .name {
    margin-left: 5px;
    font-size: 14px;
    color: #666;

    &.checked {
      // color: #409EFF;
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