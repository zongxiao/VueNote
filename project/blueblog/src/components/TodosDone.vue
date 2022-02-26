<template>
  <div class="box">
    <div class="todos">
      <ul>
        <TodosDoneItem v-for="item in todosDone" :key="item.id" :todo="item"></TodosDoneItem>
      </ul>
      <el-empty v-if="!todosDone.length" description="别摸鱼了，你一件事都没做完"></el-empty>
    </div>
  </div>
</template>

<script>
import TodosDoneItem from './TodosDoneItem.vue'
export default {
  name: "TodosDone",
  props: ['todosDone'],
  data() {
    return {
    };
  },
  components: {
    TodosDoneItem,
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
    border-top-left-radius: 6px
    border-top-right-radius: 6px
    border-left: 1px solid #eee
    border-right: 1px solid #eee
</style>