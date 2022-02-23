<template>
  <li class="todo_item">
    <label><el-checkbox class="check_box" :checked="todo.done"></el-checkbox><span class="name">{{ todo.name }}</span><span class="time">({{ todo.time | timeFormat }})</span></label>
    <div class="operation">
      <el-button type="primary" size="small" icon="el-icon-edit" circle></el-button>
      <el-button type="danger" size="small" icon="el-icon-delete" circle></el-button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'TodosDoingItem',
  props: ['todo']
};
</script>

<style lang="stylus">
.todo_item
  border-bottom: 1px solid #eee
  padding: 6px 20px
  display: flex
  justify-content: space-between
  align-items: center
  &:first-child
    border-top: 1px solid #eee
  &:hover
    background-color: #eee
    .operation
      opacity: 1
  label
    cursor: pointer;
  .name
    margin-left: 5px
    font-size: 15px
    color: #000
  .time
    font-size: 12px
    color: #aaa
    margin-left: 4px
  .operation
    opacity: 0
</style>