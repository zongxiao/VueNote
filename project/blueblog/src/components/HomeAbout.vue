<template>
  <div class="index_about w1200">
    <div class="img_title">
      <div class="img_box"><img src="../assets/img/home/about_head.png" alt=""></div>
      <div class="text">ABOUT ME</div>
    </div>
    <div class="intro_content">
      <div class="intro">
        <p>本人熟练掌握html、css、javascript、es6，vue全家桶和mysql数据库，能独立完成项目的前端部分代码的编写，了解过小程序云开发，能自主开发自己的个人小程序并且上线部署，熟悉域名配置，备案、以及服务器的环境搭建。有需要网页制作以及广告H5制作可以联系我</p>
      </div>
      <div class="info">
        <div>name:<span>zongxiao</span></div>
        <div>job:<span>developer</span></div>
        <div>tel:<span>13267777347</span></div>
        <div>email:<span>905616398@qq.com</span></div>
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
    padding: 0 24px
    background-color: $primary-color
    border-top-left-radius: 6px
    border-bottom-left-radius: 6px
    .text
      font-size: 24px
      font-weight: bold
      color: #fff
      text-align: center
    .img_box
      width: 90px
      height: 90px
      overflow: hidden
      border-radius: 50%
      margin: 32px auto 14px auto
      img
        width: 100%
  .intro_content
    flex: 1
    background-color: #ebf2ff
    .intro
      padding: 20px 40px
      font-size: 16px
      line-height: 28px
      color: $primary-color
    .info
      background-color: #fff
      padding: 24px 40px
      display: flex
      justify-content: space-between
      align-content: center
      font-size: 12px
      color: #999999
      span
        color: #333333
        margin-left: 10px
        font-size: 16px
</style>