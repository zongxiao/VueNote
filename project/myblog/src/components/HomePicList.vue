<template>
  <div class="index_projects w1200">
    <div class="projects_banner" v-if="MainAttr.ifBanner">
      <a class="main" :href="BannerObj.mainBanner.url">
        <img :src="BannerObj.mainBanner.cover">
      </a>
      <a class="sub" :href="BannerObj.subBanner.url">
        <img :src="BannerObj.subBanner.cover">
      </a>
    </div>
    <div class="projects_title">
      <h4 class="title">{{ MainAttr.title }}</h4>
      <div class="search_box" v-if="MainAttr.ifSearch">
        <!-- <input
          type="text"
          v-model="keyword"
          ref="searchInput"
          placeholder="search"
          @blur="handleFilter"
        /> -->
        <el-select v-model="keyword" clearable placeholder="筛选" @change="handleFilter">
          <el-option
            v-for="(item, index) in types"
            :key="index"
            :value="item">
          </el-option>
        </el-select>
      </div>
    </div>
    <ul class="projects_body">
      <li class="card_box" v-for="(item, index) in list" :key="index">
        <a class="card_cover" :href="item.url" target="_blank">
          <img :src="item.cover" :alt="item.name" />
        </a>
        <div class="card_info">
          <div class="name"><a :href="item.url">{{ item.name }}</a></div>
          <div class="subname">{{ item.describe }}</div>
          <div class="pubtime">时间：{{ item.doneTime }}</div>
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
  props: ['MainAttr', 'BannerObj', 'listArr'],
  mounted() {
    this.list = this.listArr
    this.types = this.uniqueByObjectAttrOfArray(this.listArr, 'type')
  },
  methods: {
    // 如何根据数组对象的某一个值进行去重
    uniqueByObjectAttrOfArray(arr, attr) {
      const map = new Map()
      const newarr = []
      arr.filter(item => !map.has(item[attr]) && map.set(item[attr], 1)).forEach(element => {
        newarr.push(element[attr])
      });
      return newarr
    },
    handleFilter() {
      this.list = this.listArr;
      if (this.keyword.trim() === "") return false;
      this.list = this.list.filter(
        (item) => item.type === this.keyword
      );
    },
  },
};
</script>