<template>
  <div class="index_about w1200">
    <div class="intro_content">
      <div class="intro">
        <p>熟练掌握html、css、javascript、es6，vue全家桶和mysql数据库，能独立完成项目的前端部分代码的编写，了解过小程序云开发，能自主开发自己的个人小程序并且上线部署，熟悉域名配置，备案、以及服务器的环境搭建，提供包含制作并上线维护等服务，有需要网页制作以及广告H5制作可以通过下方联系方式联系我进行合作。</p>
      </div>
      <div class="info">
        <div>职业:<span>前端开发</span></div>
        <div>姓名:<span>罗宗校</span></div>
        <div>微信:<span>13267777347</span></div>
        <div>邮箱:<span>905616398@qq.com</span></div>
      </div>
    </div>
    <div class="img_title">
      <div class="img_box"><img src="../assets/img/home/about_head.png" alt=""></div>
      <div class="text">ABOUT ME</div>
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
    padding: 0 24px
    background-color: $primary-color
    .text
      font-size: 22px
      font-weight: bold
      color: #fff
      text-align: center
    .img_box
      width: 80px
      height: 80px
      overflow: hidden
      border-radius: 50%
      margin: 32px auto 14px auto
      img
        width: 100%
  .intro_content
    flex: 1
    background-color: #fff
    .intro
      padding: 20px 40px
      font-size: 15px
      line-height: 1.8
      text-indent: 2em
      color: $primary-color
    .info
      background-color: #fff
      padding: 24px 40px
      display: flex
      justify-content: space-between
      align-content: center
      font-size: 12px
      color: #999999
      border-top: 1px dashed #ccc
      span
        color: #333333
        margin-left: 10px
        font-size: 16px
</style>