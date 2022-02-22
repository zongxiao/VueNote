<template>
  <div class="box">
    <AddTodo />
    <div class="todos">
      <el-table
        :data="todos"
        border
        stripe
        style="width: 100%">
        <el-table-column
          prop="name"
          label="task">
        </el-table-column>
        <el-table-column
          prop="time"
          label="deadline"
          width="180">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="180">
          <template>
            <el-button
              @click.native.prevent="hanle( todos)"
              size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import AddTodo from '../components/AddTodo.vue'
export default {
  name: "TodosDoing",
  props: ['todos'],
  data() {
    return {
    };
  },
  components: {
    AddTodo
  },
  methods: {
    hanle(a, b) {
      console.log(a, b)
    }
  }
};
</script>

<style lang="stylus" socped>
.todos
  margin-top: 20px
</style>