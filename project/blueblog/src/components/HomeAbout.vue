<template>
  <div class="index_about w1200">
    <div class="img_title">
      <div class="img_box"><img src="../assets/img/home/about_head.png" alt=""></div>
      <div class="text">ABOUT ME</div>
    </div>
    <div class="intro_content">
      <div class="info">
        <span>Name：罗宗校</span>
        <span>Job：前端</span>
        <span>Tel：13267777347</span>
        <span>Email：905616398@qq.com</span>
      </div>
      <div class="intro">
        <p>本人熟练掌握html、css、javascript、es6，vue全家桶和mysql数据库，能独立完成项目的前端部分代码的编写，了解过小程序云开发，能自主开发自己的个人小程序并且上线部署，熟悉域名配置，备案、以及服务器的环境搭建。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="stylus">
@import '../assets/css/mixins.styl'
.index_about
  display: flex
  margin-top: 40px
  .img_title
    width: 200px
    height: 200px
    background-color: #3d7eff
    border-top-left-radius: 6px
    border-bottom-left-radius: 6px
    .text
      font-size: 24px
      font-weight: bold
      color: #fff
      text-align: center
    .img_box
      width: 110px
      height: 110px
      overflow: hidden
      border-radius: 50%
      margin: 24px auto 14px auto
      img
        width: 100%
  .intro_content
    flex: 1
    background-color: #fff
    .intro
      padding: 20px 40px
      font-size: 18px
      line-height: 28px
      color: #3d7eff
    .info
      background-color: #ebf2ff
      padding: 24px 40px
      display: flex
      justify-content: space-between
      align-content: center
      span
        font-size: 20px
        color: #3d7eff
</style>