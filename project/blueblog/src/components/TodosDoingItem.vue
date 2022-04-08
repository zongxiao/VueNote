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
        >Edit</el-button
      >
      <el-button
        type="danger"
        plain
        size="mini"
        icon="el-icon-delete"
        @click="handleDeleteTodo(todo.id)"
        >Delete</el-button
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
      return (new Date().getTime() - new Date(this.todo.time).getTime()) / (1000 * 60 * 60 * 24) > 1
    },
  },
};
</script>

<style lang="stylus" src="../assets/css/components/todos-doing-item.styl"></style>