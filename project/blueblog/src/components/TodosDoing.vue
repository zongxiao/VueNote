<template>
  <div class="box">
    <div class="todos">
      <ul>
        <TodosDoingItem v-for="item in todos" :key="item.id" :todo="item"></TodosDoingItem>
      </ul>
      <TodosDoingState :todos="todos"></TodosDoingState>
    </div>
  </div>
</template>

<script>
import TodosDoingItem from './TodosDoingItem.vue'
import TodosDoingState from './TodosDoingState.vue'
export default {
  name: "TodosDoing",
  props: ['todos'],
  data() {
    return {
    };
  },
  components: {
    TodosDoingItem,
    TodosDoingState
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style lang="stylus" socped>
.todos
  ul
    border-radius: 6px
    border-left: 1px solid #eee
    border-right: 1px solid #eee
</style>