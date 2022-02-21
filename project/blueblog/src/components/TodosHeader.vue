<template>
    <div>
      <el-input placeholder="请输入内容" v-model="input" clearable> </el-input>
    </div>
</template>

<script>
export default {
  name: 'TodosHeader',
  data() {
    return {
      input: ''
    }
  }
};
</script>

<style>
</style>