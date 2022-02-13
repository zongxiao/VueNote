<template>
  <div class="footer">
    <div class="footer_content w1200">
      <div class="contact">
        <h4 class="tit">CONTACT</h4>
        <ul class="contact_info">
          <li>姓名：罗先森</li>
          <li>行业：前端</li>
          <li>位置：广东广州</li>
          <li>邮箱：905616398@qq.com</li>
          <li>手机：13267777347（微信同号）</li>
        </ul>
        <div class="copyright">
          <p>
            本网站主要汇集一些个人的项目和文章，如果侵犯您的版权信息，烦请联系我处理避免对您造成损失。<a
              href=""
              >粤ICP备18027209号-1</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="stylus">
.footer {
  background: #373737;
  margin-top: 80px;

  .footer_content {
    padding: 50px 0;

    .contact {
      .tit {
        font-size: 30px;
        color: #eee;
      }

      .contact_info {
        display: flex;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid #555;
        margin-top: 30px;

        >li {
          font-size: 14px;
          color: #aaa;
          line-height: 1.4;
          margin-right: 60px;
        }
      }

      .copyright {
        >p {
          color: #aaa;
          font-size: 14px;
          line-height: 1.4;
          margin-top: 15px;

          a {
            color: #aaa;
            margin-left: 20px;

            &:hover {
              color: #eee;
            }
          }
        }
      }
    }
  }
}
</style>