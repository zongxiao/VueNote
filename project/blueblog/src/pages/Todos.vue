<template>
  <div>
    <Banner :BannerInfo="bannerInfo" />
    <div class="todos_box w1200">
      <div class="left_box">
        <ul>
          <li :class="{ active: ifTodosDoing }" @click="showDoing">Doing</li>
          <li :class="{ active: !ifTodosDoing }" @click="showDone">Finished</li>
        </ul>
      </div>
      <div class="right_box">
        <div class="com_box edit_box" v-show="ifTodosDoing">
          <TodosAdd />
        </div>
        <div class="com_box list_box">
          <TodosDoing v-show="ifTodosDoing" :todosDoing="todosDoing" />
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
import TodosAdd from "../components/TodosAdd.vue";
export default {
  name: "Todos",
  components: {
    Banner,
    TodosDoing,
    TodosDone,
    TodosAdd,
  },
  data() {
    return {
      bannerInfo: [
        {
          id: "001",
          url: "http://www.baidu.com",
          imgurl: "/img/banner/todos_banner1.jpg",
        },
      ],
      ifTodosDoing: true,
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  computed: {
    todosDone() {
      return this.todos
        .filter((element) => element.done)
        .sort(
          (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
        );
    },
    todosDoing() {
      return this.todos
        .filter((element) => !element.done)
        .sort(
          (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
        );
    },
  },
  methods: {
    showDoing() {
      this.ifTodosDoing = true;
    },
    showDone() {
      this.ifTodosDoing = false;
    },
    addTodo(todoObj) {
      this.todos.push(todoObj);
    },
    changeTodoState(id) {
      this.todos.forEach((element) => {
        element.id !== id ? "" : (element.checked = !element.checked);
      });
    },
    changeAllTodoState(value) {
      this.todos.forEach((element) => (element.checked = value));
    },
    handleDeleteTodo(id) {
      this.todos = this.todos.filter((element) => element.id !== id);
    },
    sortByTodosState() {
      this.todos.forEach((element) => {
        if (element.checked === true) {
          element.done = true;
        }
      });
    },
    handleAlterTodoName(id, newTodoName) {
      this.todos.forEach((element) => {
        if (element.id === id) {
          element.name = newTodoName;
        }
      });
    },
    undoFinished(id) {
      this.todos.forEach((element) => {
        if (element.id === id) {
          element.checked = false;
          element.done = false;
        }
      });
    },
    clearAllTodoFinished() {
      this.todos = this.todos.filter((element) => element.done !== true);
    },
  },
  mounted() {
    // 添加一个新的todo项
    this.$bus.$on("addTodo", this.addTodo);
    // 修改某个待完成的todo项的状态
    this.$bus.$on("changeTodoState", this.changeTodoState);
    // 修改所有待完成的todo项的状态
    this.$bus.$on("changeAllTodoState", this.changeAllTodoState);
    // 删除某个todo项
    this.$bus.$on("handleDeleteTodo", this.handleDeleteTodo);
    // 分类好已完成的事项和未完成的事项
    this.$bus.$on("sortByTodosState", this.sortByTodosState);
    // 修改todo项的名称
    this.$bus.$on("handleAlterTodoName", this.handleAlterTodoName);
    // 撤销todo项已完成的状态
    this.$bus.$on("undoFinished", this.undoFinished);
    // 彻底清空所有已完成的todo项
    this.$bus.$on("clearAllTodoFinished", this.clearAllTodoFinished);
  },
  watch: {
    todos: {
      deep: true, // 深度监视，不加的话只能监督一层
      immediate: true, //初始化时让handler调用一下
      //handler什么时候调用？当todos发生改变时。
      handler(newValue) {
        localStorage.setItem("todos", JSON.stringify(newValue));
      },
    },
  },
};
</script>

<style lang="stylus"  src="../assets/css/todos.styl">
</style>
