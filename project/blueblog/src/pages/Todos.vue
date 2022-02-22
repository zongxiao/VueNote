<template>
  <div>
    <Banner :BannerInfo="bannerInfo" />
    <div class="todos_box w1200">
      <div class="nav">
        <ul>
          <li :class="{ active: ifTodosDoing }" @click="showDoing">doinig</li>
          <li :class="{ active: !ifTodosDoing }" @click="showDone">done</li>
        </ul>
      </div>
      <div class="contentain">
        <TodosDoing v-show="ifTodosDoing" :todos="todos" />
        <TodosDone v-show="!ifTodosDoing" />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import TodosDoing from "../components/TodosDoing.vue";
import TodosDone from "../components/TodosDone.vue";
export default {
  name: "Todos",
  components: {
    Banner,
    TodosDoing,
    TodosDone,
  },
  data() {
    return {
      bannerInfo: [
        {
          id: "001",
          url: "http://www.baidu.com",
          imgurl: "/img/banner/todos_banner.png",
        },
      ],
      ifTodosDoing: true,
      todos: []
    };
  },
  methods: {
    showDoing() {
      this.ifTodosDoing = true;
    },
    showDone() {
      this.ifTodosDoing = false;
    },
    addTodo(todoObj) {
      this.todos.push(todoObj)
    }
  },
  mounted() {
    this.$bus.$on('addTodo', this.addTodo)
  }
};
</script>

<style lang="stylus" scoped>
.todos_box {
  margin-top: 40px;
  display: flex;

  .nav {
    margin-right: 20px;
    background-color: #fff;
    padding: 30px;

    ul {
      li {
        line-height: 1.5
        margin-bottom: 10px;
        cursor: pointer;
        color: #808080;
        &.active {
          color: #3d7eff
        }
      }
    }
  }

  .contentain {
    flex: 1;
    background-color: #fefefe;
    padding: 30px;
  }
}
</style>