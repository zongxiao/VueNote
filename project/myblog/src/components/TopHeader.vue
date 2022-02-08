<template>
  <div class="header">
    <div class="header_content w1200">
      <div class="logo">Silence37</div>
      <ul class="navigation">
        <li><router-link :to="{ name: 'home' }" active-class="active">Home</router-link></li>
        <li><router-link replace :to="{ name: 'articles' }" active-class="active">Articles</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.header_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}
.logo {
  background: #ffffff;
  color: lightslategray;
  font-weight: bold;
  padding: 10px 0;
  font-size: 24px;
}
.navigation {
  font-size: 14px;
}
.navigation li {
  display: inline-block;
}
.navigation li a {
  padding: 20px 20px;
  text-decoration: none;
  color: lightgray;
}
.navigation li a.active {
  color: gray;
}
</style>