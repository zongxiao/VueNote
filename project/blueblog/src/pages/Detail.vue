<template>
  <div class="w1200 detail_box">
    <div class="left_box">
      <div class="article_top">
        <h4 class="tit">2022前端应该掌握的10个 JS 小技巧</h4>
        <div class="others">
          <span>2022年03月07日</span>
          <span>分类：vue</span>
        </div>
      </div>
      <div class="article_content">
        <p>现在前端发展很快，各种技术和框架层出不穷、百花齐放，很多人都喊学不动啦！事实上JavaScript 作为前端的主要语言，虽然它的发展很快，每年都会出一些新特性，但视乎 JavaScript 开发者的发展速度更快一些，因为很多相对较新的功能都已经有很高的采用率</p>
        <p>||运算符是左边是空字符串或false或0等falsy值，都会返回后侧的值。而??必须运算符左侧的值为null或undefined时，才会返回右侧的值。因此0||1的结果为1，0??1的结果为0</p>
        <p>?.直接在链式调用的时候判断，判断左侧的对象是否为null或undefined，如果是的，就不再往下运算，返回undefined，如果不是，则返回右侧的值</p>
        <p>但是静态引入的import 语句需要依赖于 type="module" 的script标签，而且有的时候我们希望可以根据条件来按需加载模块，比如以下场景：</p>
        <p>现在前端发展很快，各种技术和框架层出不穷、百花齐放，很多人都喊学不动啦！事实上JavaScript 作为前端的主要语言，虽然它的发展很快，每年都会出一些新特性，但视乎 JavaScript 开发者的发展速度更快一些，因为很多相对较新的功能都已经有很高的采用率</p>
        <p>||运算符是左边是空字符串或false或0等falsy值，都会返回后侧的值。而??必须运算符左侧的值为null或undefined时，才会返回右侧的值。因此0||1的结果为1，0??1的结果为0</p>
        <p>?.直接在链式调用的时候判断，判断左侧的对象是否为null或undefined，如果是的，就不再往下运算，返回undefined，如果不是，则返回右侧的值</p>
        <p>但是静态引入的import 语句需要依赖于 type="module" 的script标签，而且有的时候我们希望可以根据条件来按需加载模块，比如以下场景：</p>
      </div>
    </div>
    <div class="right_box"></div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ["id"],
};
</script>

<style lang="stylus" src="../assets/css/detail.styl">
</style>