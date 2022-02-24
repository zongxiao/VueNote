<template>
  <div>
    <el-checkbox
      class="check_box"
      v-model="allTotoState"
    ></el-checkbox>
    <span>Checked: {{ todosFinishedLength }}</span>
    <span>Total: {{ todosLength }}</span>
  </div>
</template>

<script>
export default {
  name: 'TodosDoingState',
  props: ['todos'],
  data() {
    return {
    }
  },
  computed: {
    todosFinishedLength() {
      return this.todos.filter(element => element.done).length
    },
    todosLength() {
      return this.todos.length
    },
    allTotoState: {
      get() {
        return this.todosFinishedLength === this.todosLength
      },
      set(value) {
        this.$bus.$emit('changeAllTodoState', value)
      }
    }
  },
  methods: {
  }
};
</script>

<style>
</style>