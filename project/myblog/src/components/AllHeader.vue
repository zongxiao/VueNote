<template>
  <div class="header">
    <div class="header_content w1200">
      <div class="logo">SILENCE37</div>
      <ul class="navigation">
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'articles' }">Articles</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus">
.header
  background-color: #ffffff
.header_content
  display flex
  justify-content space-between
  align-items center
  padding 20px 0

.logo
  background #ffffff
  color lightslategray
  font-weight bold
  padding 10px 0
  font-size 24px

.navigation
  font-size 14px
  li
    display inline-block
    a
      padding 20px 20px
      text-decoration none
      color lightgray
      &.router-link-exact-active
        color gray
        font-size 16px
</style>