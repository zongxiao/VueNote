<template>
  <li class="todo_item">
    <label v-show="!todo.isEditing">
      <el-checkbox
        class="check_box"
        :value="todo.checked"
        @change="handleTodoState(todo.id)"
      ></el-checkbox>
      <span class="name" :class="{ checked: todo.checked }">{{
        todo.name
      }}</span>
      <span class="time">({{ todo.time | timeFormat }})</span>
      <i v-show="ifPast" class="if_past">已过期</i>
    </label>
    <div v-show="todo.isEditing" class="edit_box">
      <el-input
        class="edit_input"
        size="mini"
        v-model="todo.name"
        placeholder="请输入待办事项"
        ref="editInput"
        title="失去焦点时保存"
        @blur="handleAlterTodoName(todo, $event)"
        ><i slot="prefix" class="el-input__icon el-icon-edit"></i
      ></el-input>
    </div>
    <div class="operation">
      <el-button
        v-show="!todo.isEditing"
        type="primary"
        plain
        size="mini"
        icon="el-icon-edit"
        @click="handleEditState(todo)"
        >edit</el-button
      >
      <el-button
        type="danger"
        plain
        size="mini"
        icon="el-icon-delete"
        @click="handleDeleteTodo(todo.id)"
        >delete</el-button
      >
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
      this.$confirm("此操作将永久删除该事项, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$bus.$emit("handleDeleteTodo", id);
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
    handleEditState(todoObj) {
      if (Object.prototype.hasOwnProperty.call(todoObj, "isEditing")) {
        todoObj.isEditing = true;
      } else {
        this.$set(todoObj, "isEditing", true);
      }
      this.$nextTick(() => {
        this.$refs.editInput.focus();
      });
    },
    handleAlterTodoName(todoObj, e) {
      this.$bus.$emit("handleAlterTodoName", todoObj.id, e.currentTarget.value);
      todoObj.isEditing = false;
    },
  },
  computed: {
    ifPast() {
      return new Date().getDate() - new Date(this.todo.time).getDate() > 0;
    },
  },
};
</script>

<style lang="stylus">
.todo_item
  border-bottom: 1px solid #f4f4f4
  padding: 8px 20px
  display: flex
  justify-content: space-between
  align-items: center
  &:first-child
    border-top: 1px solid #f4f4f4
  &:hover
    background-color: #f4f4f4
    .operation
      opacity: 1
  label
    cursor: pointer
    .name
      margin-left: 5px
      font-size: 14px
      color: #666
    .time
      font-size: 12px
      color: #aaa
      margin-left: 4px
      margin-left: 20px
    .if_past
      font-size: 12px
      font-weight: bold
      color: rgba(0, 0, 0, 0.2)
      margin-left: 20px
    .el-checkbox__inner
      border: 1px solid #999
    .is-focus
      .el-checkbox__inner
        border: 1px solid #999
    .is-checked
      .el-checkbox__inner
        border: 1px solid #409EFF
  .edit_box
    margin-right: 30px
    min-width: 300px
  .operation
    opacity: 0
</style>