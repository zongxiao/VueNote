<template>
  <div class="input_todo_box">
    <!-- <div class="label">ADD TODO</div> -->
    <el-input class="input_todo" placeholder="请输入内容" clearable v-model="inputTodo">
      <i slot="prefix" class="el-input__icon el-icon-edit"></i>
    </el-input>
    <el-date-picker  class="input_todo" v-model="inputTodoTime" type="date" placeholder="选择日期">
    </el-date-picker>
    <el-button type="primary" icon="el-icon-plus" @click="HandleAddTodo">添加</el-button>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: "AddTodo",
  data() {
    return {
      inputTodo: "",
      inputTodoTime: ''
    };
  },
  methods: {
    HandleAddTodo() {
      if (!this.inputTodo || !this.inputTodoTime) {
        this.$message({
          showClose: true,
          message: '请输入内容和选择时间',
          type: 'warning',
          offset: 300
        });
        return false
      }
      this.$bus.$emit('addTodo', {
        id: nanoid(),
        name: this.inputTodo,
        time: this.inputTodoTime,
        done: false
      })
      this.inputTodo = ''
      this.inputTodoTime = ''
    }
  }
};
</script>

<style lang="stylus" socped>
.input_todo_box
  font-size: 0
  display: flex
  align-items: center
  .label
    color: #3d7eff
    font-size: 16px
    margin-right: 20px
    font-weight: bold
  .input_todo
    margin-right: 10px
    flex: 1
</style>