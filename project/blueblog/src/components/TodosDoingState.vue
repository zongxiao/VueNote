<template>
  <div class="all_state_box" v-show="todosCheckedLength">
    <label class="label">
      <el-checkbox class="check_box" v-model="allTotoState"></el-checkbox>
      <span class="checkd_num">checked：</span>
      <span class="total_num">{{ todosCheckedLength }}/{{ todosLength }}</span>
    </label>
    <el-button type="primary" icon="el-icon-check"  size="small"  class="finished_btn" v-show="todosCheckedLength" @click="sortByTodosState">finished</el-button>
  </div>
</template>

<script>
export default {
  name: "TodosDoingState",
  props: ["todos"],
  data() {
    return {};
  },
  computed: {
    todosCheckedLength() {
      return this.todos.filter((element) => element.checked).length;
    },
    todosLength() {
      return this.todos.filter(element => !element.done).length;
    },
    allTotoState: {
      get() {
        return (
          this.todosCheckedLength === this.todosLength && this.todosLength > 0
        );
      },
      set(value) {
        this.$bus.$emit("changeAllTodoState", value);
      },
    },
  },
  methods: {
    sortByTodosState() {
      this.$message({
        message: '恭喜你，任务完成',
        type: 'success'
      });
      this.$bus.$emit('sortByTodosState')
    }
  },
};
</script>

<style lang="stylus">
.all_state_box {
  padding: 0px 0px 0 20px;
  display: flex
  height: 80px
  align-items: center
  justify-content: flex-start
  border: 1px solid rgba(0, 0, 0, 0)
  border-top: 1px solid rgba(0, 0, 0, 0)
  .label {
    cursor: pointer
    font-size: 14px
    color: #666
    .check_box {
      margin-right: 5px;
    }
    .el-checkbox__inner {
      border: 1px solid #999;
    }
    .is-focus {
      .el-checkbox__inner {
        border: 1px solid #999;
      }
    }
    .is-checked {
      .el-checkbox__inner {
        border: 1px solid #409EFF;
      }
    }
    .total_num {
      // font-weight: bold
    }
  }
  .finished_btn {
    margin-left: 40px
  }
}
</style>