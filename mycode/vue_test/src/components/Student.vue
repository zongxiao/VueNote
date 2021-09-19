<template>
  <div>
    <ul>
      <li>name:{{ name }}</li>
      <li>age:{{ myAge }}</li>
      <li>hobby:{{ hobby }}</li>
    </ul>
    <button @click="changeAge">change age</button>
  </div>
</template>

<script>
export default {
  name: "student",
  // props: ["name", "age", "hobby"],
  // props: {
  //   name: String,
  //   age: String,
  //   hobby: String,
  //   child: Array
  // },
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: String,
      required: true
    },
    hobby: {
      type: String,
      required: true
    },
    child: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      myAge: this.age,
    };
  },
  methods: {
    changeAge() {
      this.myAge++;
    },
  },
};
</script>

<style>
</style>