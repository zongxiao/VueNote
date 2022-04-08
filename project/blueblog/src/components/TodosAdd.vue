<template>
  <div class="input_todo_box" @keyup.enter="HandleAddTodo">
    <el-input
      class="input_todo"
      placeholder="write your task"
      clearable
      v-model="inputTodo"
    >
      <i slot="prefix" class="el-input__icon el-icon-edit"></i>
    </el-input>

    <div class="label">Deadline</div>
    <el-date-picker
      class="input_todo"
      v-model="inputTodoTime"
      type="date"
      placeholder="select the date you finish it"
      @change="checkDateIfAfterToday"
    >
    </el-date-picker>
    <el-button plain @click="HandleAddTodo">Add</el-button>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "TodosAdd",
  data() {
    return {
      inputTodo: "",
      inputTodoTime: new Date(),
    };
  },
  methods: {
    checkDateIfAfterToday() {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      if (this.inputTodoTime.getTime() - today.getTime() < 0) {
        this.inputTodoTime = now;
        this.$message({
          showClose: true,
          message: "可以给你一张过去的CD，但是不能给你选过去的日期",
          type: "warning",
          offset: 200,
        });
        return false;
      }
    },
    HandleAddTodo() {
      if (!this.inputTodo || !this.inputTodoTime) {
        this.$message({
          showClose: true,
          message: "请输入内容并且选择时间",
          type: "warning",
          offset: 200,
        });
        return false;
      }
      this.$bus.$emit("addTodo", {
        id: nanoid(),
        name: this.inputTodo,
        time: this.inputTodoTime,
        done: false,
        checked: false,
      });
      this.inputTodo = "";
      this.inputTodoTime = new Date();
    },
  },
};
</script>

<style lang="stylus" src="../assets/css/components/todos-add.styl"></style>