<template>
  <div>
    <h1 v-text="welcome"></h1>
    <button @click="showSchoolRef" ref="btn">显示school的dom</button>
    <School ref="sco"></School>
    <Student :name="students[0].name" :age="students[0].age" :hobby="students[0].hobby" :child="students[0].child"></Student>
  </div>
</template>

<script>
  import School from './components/School.vue'
  import Student from './components/Student.vue'
  export default {
    name: 'App',
    components: {
      School,
      Student,
    },
    data() {
      return {
        welcome: '欢迎来到App',
        students: [
          {
            name: 'zhangsan',
            age: "12",
            hobby: 'football',
            child: [
              {name: '123'},
              {name: '234'}
            ]
          }
        ]
      }
    },
    methods: {
      showSchoolRef() {
        console.log(this.$refs.btn)
        console.log(this.$refs.sco)
      }
    }
  }
</script>

<style>

</style>