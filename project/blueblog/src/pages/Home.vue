<template>
  <div>
    <Banner :BannerInfo="bannerInfo" />
    <div class="w1200" style="margin-top: 40px">
      <BlogListItem v-for="blog in homeBlogList" :key="blog.id" :blog="blog" />
    </div>
    <HomePicList :MainAttr="projectAttr" :BannerObj="projectsBannerObj" :listArr="projectsArr"></HomePicList>
    <HomeAbout v-show="true" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { nanoid } from 'nanoid'
import Banner from "../components/Banner.vue";
import HomeAbout from "../components/HomeAbout.vue";
import HomePicList from "../components/HomePicList.vue";
import BlogListItem from '../components/BlogListItem.vue'
export default {
  name: "Home",
  components: {
    Banner,
    HomeAbout,
    HomePicList,
    BlogListItem
  },
  data() {
    return {
      bannerInfo: [
        {
          id: nanoid(),
          url: 'http://www.baidu.com',
          imgurl: '/img/banner/home_banner.png'
        },
        {
          id: nanoid(),
          url: 'http://www.baidu.com',
          imgurl: '/img/banner/home_banner.png'
        }
      ],
      projectAttr: {
        title: 'PROJECT',
        ifBanner: false,
        ifSearch: true
      },
      blogAttr: {
        title: 'BLOG',
        ifBanner: false,
        ifSearch: false
      },
      homeBlogList: [
        {
          id: '001',
          cover: '/img/blog/001.jpg',
          title: '用Html标签和CSS3写的一个手机！',
          subTitle: '手机外形上来说就是长方形，然后加上圆角边框，如果是简单的平面图形，几分钟就可以用html标签和css写一个手机模型。但如果有高光，菱角等让手机展示的更逼真，可以用到css背景渐变属性。',
          time: '2022-03-04',
          type: 'css3'
        },
        {
          id: '002',
          cover: '/img/blog/002.jpg',
          title: '10分钟用Html+css写一个渐变背景的个人名片',
          subTitle: '个人名片在个人博客网站上的位置一般是在首页右上角，一点开网站就能看见，信息不多，但是对于访客说，可以直观快速的了解这个网站的站长信息。接下来就花10分钟，来用html标签+css写一个个人名片吧。',
          time: '2022-03-04',
          type: 'css3'
        }
      ]
    }
  },
  activated() {
    console.log('home路由组件激活')
  },
  deactivated() {
    console.log('home路由组件失活')
  },
  computed: {
    ...mapState({projectsArr: 'projects', projectsBannerObj: 'projectsBanner'}),
    ...mapState({blogsArr: 'blogs'}),
  },
};
</script>

<style scoped>

</style>