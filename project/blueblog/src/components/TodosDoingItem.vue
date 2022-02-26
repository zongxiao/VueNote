<template>
  <li class="todo_item">
    <label>
      <el-checkbox class="check_box" :value="todo.done" @change="handleTodoState(todo.id)"></el-checkbox>
      <span class="name" :class="{ checked: todo.done }">{{ todo.name }}</span>
      <span class="time">({{ todo.time | timeFormat }})</span>
    </label>
    <div class="edit_box" v-show="todo.isEditing">
      <el-input class="edit_input" size="mini" v-model="todo.name" placeholder="请输入内容" ref="editInput" @blur="handleBlur(todo, $event)"><i slot="prefix" class="el-input__icon el-icon-edit"></i></el-input>
    </div>
    <div class="operation">
      <el-button v-show="!todo.isEditing" type="primary" plain size="mini" icon="el-icon-edit" @click="handleEditState(todo)">编辑</el-button>
      <el-button type="danger" plain size="mini" icon="el-icon-delete" @click="handleDeleteTodo(todo.id)">删除</el-button>
    </div>
  </li>
</template>

<script>
export default {
  name: "TodosDoingItem",
  props: ["todo"],
  methods: {
    handleTodoState(id) {
      this.$bus.$emit("changeTodoState", id);
    },
    handleDeleteTodo(id) {
      this.$bus.$emit("handleDeleteTodo", id);
    },
    handleEditState(todoObj) {
      if (Object.prototype.hasOwnProperty.call(todoObj, 'isEditing')) {
        todoObj.isEditing = true
      } else {
        this.$set(todoObj, 'isEditing', true)
      }
      this.$nextTick(() => {
        this.$refs.editInput.focus()
      })
    },
    handleBlur(todoObj, e) {
      todoObj.isEditing = false
      e.currentTarget.value
    }
  },
};
</script>

<style lang="stylus">
.todo_item {
  border-bottom: 1px solid #eee;
  padding: 8px 20px;
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
        border: 1px solid #409EFF;
      }
    }
  }
  .edit_box {
    margin-right: 30px
    min-width: 300px
  }
  .operation {
    opacity: 0;
  }
}
</style>