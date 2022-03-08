<template>
  <div class="index_projects w1200">
    <div class="projects_title">
      <h4 class="title">{{ MainAttr.title }}</h4>
      <div class="search_box" v-if="MainAttr.ifSearch">
        <el-select
          v-model="keyword"
          clearable
          size="small"
          placeholder="筛选"
          @change="handleFilter"
        >
          <el-option v-for="(item, index) in types" :key="index" :value="item">
          </el-option>
        </el-select>
      </div>
    </div>
    <ul class="projects_body">
      <li class="card_box" v-for="(item, index) in list" :key="index">
        <a class="card_cover" :href="item.url" target="_blank">
          <img :src="item.cover" :alt="item.name" />
          <i>{{ item.type }}</i>
        </a>
        <div class="card_info">
          <div class="name">
            <a :href="item.url">{{ item.name }}</a>
            <div class="pubtime">{{ item.doneTime }}</div>
          </div>
          <div class="subname">{{ item.describe }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import("../assets/css/components/home_pic_list.styl");
export default {
  name: "HomePicList",
  data() {
    return {
      list: [],
      types: [],
      keyword: "",
    };
  },
  props: ["MainAttr", "listArr"],
  mounted() {
    this.list = this.listArr;
    this.types = this.uniqueByObjectAttrOfArray(this.listArr, "type");
  },
  methods: {
    // 如何根据数组里面的所有对象中的某一个属性进行去重并且返回该属性的集合
    uniqueByObjectAttrOfArray(arr, attr) {
      const map = new Map();
      const newarr = [];
      arr
        .filter((item) => !map.has(item[attr]) && map.set(item[attr], 1))
        .forEach((element) => {
          newarr.push(element[attr]);
        });
      return newarr;
    },
    handleFilter() {
      this.list = this.listArr;
      if (this.keyword.trim() === "") return false;
      this.list = this.list.filter((item) => item.type === this.keyword);
    },
  },
};
</script>