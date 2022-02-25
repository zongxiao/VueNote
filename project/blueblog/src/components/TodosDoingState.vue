<template>
  <div class="all_state_box">
    <label class="label">
      <el-checkbox class="check_box" v-model="allTotoState"></el-checkbox>
      <span class="checkd_num">选中：{{ todosFinishedLength }}/</span>
      <span class="total_num">{{ todosLength }}</span>
    </label>
    <el-button type="primary" icon="el-icon-check" round size="mini" plain class="finished_btn" v-show="todosFinishedLength" @click="setTodosState">设为已完成</el-button>
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
    todosFinishedLength() {
      return this.todos.filter((element) => element.done).length;
    },
    todosLength() {
      return this.todos.length;
    },
    allTotoState: {
      get() {
        return (
          this.todosFinishedLength === this.todosLength && this.todosLength > 0
        );
      },
      set(value) {
        this.$bus.$emit("changeAllTodoState", value);
      },
    },
  },
  methods: {
    setTodosState() {
      this.$bus.$emit('setTodosState')
    }
  },
};
</script>

<style lang="stylus">
.all_state_box {
  padding: 0 20px;
  height: 54px
  display: flex
  align-items: center
  border: 1px solid #eee
  border-top: 1px solid rgba(0, 0, 0, 0)
  border-bottom-left-radius: 6px
  border-bottom-right-radius: 6px
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
    .checkd_num, .total_num {
      font-size: 14px;
      &.checked {
        color: #409EFF;
      }
    }
  }
  .finished_btn {
    margin-left: 20px
  }
}
</style>