<template>
  <div class="header">
    <div class="header_content w1200">
      <div class="logo"><span>Zongxiao's</span>blogs</div>
      <ul class="navigation">
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'blogs' }">Blogs</router-link></li>
        <li><router-link :to="{ name: 'todos' }">Todos</router-link></li>
      </ul>
      <div class="search">
        <input type="text" v-model="topSearch" placeholder="今晚吃啥呢？"><span @click="handleSearch" class="el-icon-search icon_search"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      topSearch: ''
    };
  },
  methods: {
    handleSearch() {
      alert(this.topSearch)
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/css/mixins.styl'
.header
  background-color #ffffff
.header_content
  display flex
  justify-content space-between
  align-items center
  box-sizing: border-box
.logo
  background #ffffff
  color #333333
  font-size 26px
  font-weight: bold
  span
    font-size: 14px
    font-weight: normal
    margin-right: 6px
.navigation
  margin-left 180px
  li
    display inline-block
    padding 0 20px
    a
      display: inline-block
      padding 22px 0px
      text-decoration none
      color #808080
      font-size 16px
      position relative
      &.router-link-exact-active
        color #333333
      &.router-link-exact-active:after
          content: ''
          width: 80%
          height: 4px
          display: block
          position absolute
          background-color: $primary-color
          bottom: 0
          left: 50%
          translate-x(-50%)
.search
  margin-left: 150px
  position: relative
  input
    height: 35px
    width: 370px
    outline none
    padding-left: 18px
    border 0
    background-color: #f6f6f6
    border-radius: 6px
  .icon_search
    position absolute
    right: 10px
    top 50%
    translate-y(-50%)
    cursor: pointer
</style>