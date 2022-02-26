<template>
  <div>
    <Banner :BannerInfo="bannerInfo" />
    <div class="todos_box w1200">
      <div class="left_box">
        <ul>
          <li :class="{ active: ifTodosDoing }" @click="showDoing">DOING</li>
          <li :class="{ active: !ifTodosDoing }" @click="showDone">FINISHED</li>
        </ul>
      </div>
      <div class="right_box">
        <div class="com_box edit_box" v-show="ifTodosDoing">
          <AddTodo />
        </div>
        <div class="com_box list_box">
          <TodosDoing v-show="ifTodosDoing" :todos="todos" />
          <TodosDone v-show="!ifTodosDoing" :todosDone="todosDone" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import TodosDoing from "../components/TodosDoing.vue";
import TodosDone from "../components/TodosDone.vue";
import AddTodo from '../components/AddTodo.vue'
export default {
  name: "Todos",
  components: {
    Banner,
    TodosDoing,
    TodosDone,
    AddTodo
  },
  data() {
    return {
      bannerInfo: [
        {
          id: "001",
          url: "http://www.baidu.com",
          imgurl: "/img/banner/todos_banner2.jpg",
        },
        {
          id: "002",
          url: "http://www.baidu.com",
          imgurl: "/img/banner/todos_banner1.jpg",
        },
      ],
      ifTodosDoing: true,
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      todosDone: JSON.parse(localStorage.getItem('todosDone')) || []
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
    },
    changeTodoState(id) {
      this.todos.forEach(element => {
        element.id !== id ? '' : element.done = !element.done
      });
    },
    changeAllTodoState(value) {
      this.todos.forEach(element => element.done = value)
    },
    handleDeleteTodo(id) {
      this.todos = this.todos.filter(element => element.id !== id)
    },
    sortByTodosState() {
      this.todosDone = [...this.todos.filter(element => element.done === true).reverse(), ...this.todosDone]
      this.todos = this.todos.filter(element => element.done === false)
    }
  },
  mounted() {
    this.$bus.$on('addTodo', this.addTodo)
    this.$bus.$on('changeTodoState', this.changeTodoState)
    this.$bus.$on('changeAllTodoState', this.changeAllTodoState)
    this.$bus.$on('handleDeleteTodo', this.handleDeleteTodo)
    this.$bus.$on('sortByTodosState', this.sortByTodosState)
  },
  watch:{
    todos: {
      immediate: true, //初始化时让handler调用一下
      //handler什么时候调用？当todos发生改变时。
      handler(newValue){
        localStorage.setItem('todos', JSON.stringify(newValue))
      }
    },
    todosDone: {
      immediate: true,
      handler(newValue){
        localStorage.setItem('todosDone', JSON.stringify(newValue))
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.todos_box {
  margin-top: 40px;
  display: flex;

  .left_box {
    margin-right: 10px;
    background-color: #fefefe;
    padding: 30px 40px;

    ul {
      li {
        line-height: 1.5
        margin-bottom: 10px;
        cursor: pointer;
        color: #808080;
        &.active {
          color: #3d7eff
          text-decoration: underline
        }
      }
    }
  }

  .right_box {
    flex: 1
    display: flex
    flex-direction: column
    .com_box {
      background-color: #fefefe
      padding: 30px
    }
    .edit_box {
      margin-bottom: 10px
    }
    .list_box {
      padding-bottom: 100px
    }
  }
}
</style>