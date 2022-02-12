<template>
  <div class="footer">
    <a href="">1111</a>
    <a href="">1111</a>
    <a href="">1111</a>
    <a href="">1111</a>
    <span>2121</span>
    <span>2121</span>
    <span>2121</span>
    <span>2121</span>
  </div>
</template>

<script>
export default {

}
</script>

<style>
a,span{display: block;}
body {
  margin: 0
}

body .footer {
  background: #ccc
}

body .footer>a {
  color: #000
}

body .footer>a:hover {
  color: #008000
}

body .foote>a +a,
body .footer>a +span {
  color: #ff0
}
</style>