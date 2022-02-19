<template>
  <div class="header">
    <div class="header_content w1200">
      <div class="logo">SILENCE37</div>
      <ul class="navigation">
        <li><router-link :to="{ name: 'home' }">HOME</router-link></li>
        <li><router-link :to="{ name: 'articles' }">ARTICLES</router-link></li>
      </ul>
      <div class="search">
        <input type="text" placeholder="今晚吃啥呢？">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
    };
  }
};
</script>

<style lang="stylus" scoped>
.header
  background-color #ffffff
.header_content
  display flex
  justify-content flex-start
  align-items center
  padding 0px 50px
  box-sizing: border-box
.logo
  background #ffffff
  color #3d7eff
  font-size 18px
  font-weight bold
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
      font-size 18px
      position relative
      &.router-link-exact-active
        color #333333
      &.router-link-exact-active:after
          content: ''
          width: 100%
          height: 4px
          display: block
          position absolute
          background-color: #3d7eff
          bottom: 0
          left: 0
          right 0
.search
  margin-left: 150px
  input
    height: 35px
    width: 370px
    outline none
    padding-left: 10px
    border 0
    background-color: #f6f6f6
    border-radius 60px
</style>