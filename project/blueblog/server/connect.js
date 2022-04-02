// 本地mongo数据库超级管理
// admin数据库
// admin用户名
// 123456密码

// 普通用户读写
// blog数据库
// root用户名
// Silence37密码
const mongoose = require('mongoose');
mongoose.connect('mongodb://root:Silence37@127.0.0.1:27017/blog')
  .then()
  .catch(error => console.log('faild connected：' + error))
mongoose.connection.once('open', () => console.log('connected...'))
mongoose.connection.once("close", () => console.log('disconnected'))

const blogSchema = new mongoose.Schema({
  title: String,
  subTitle: String,
  cover: String,
  time: String,
  type: String,
  toHome: { type: Boolean, default: false },
  score: { type: Number, min: 0, max: 10 },
  content: String
})

const blogModel = mongoose.model('tb_blog', blogSchema)
blogModel.create({
  title: "用Html标签和CSS3写的一个手机！111",
  subTitle: "手机外形上来说就是长方形，然后加上圆角边框，如果是简单的平面图形，几分",
  cover: "/img/blog/001.jpg",
  time: '2021-12-12',
  type: 'vue',
  toHome: false,
  score: 10,
  content: '<h3>用Html标签和CSS3写的一个手机！</h3>'  
}, (err) => {
  if (!err) {
    console.log('inserted success')
  } else {
    console.log(err + "")
  }
})
blogModel.create({
  title: "用Html标签和CSS3写的一个手机！111",
  subTitle: "手机外形上来说就是长方形，然后加上圆角边框，如果是简单的平面图形，几分",
  cover: "/img/blog/001.jpg",
  time: '2021-12-12',
  type: 'vue',
  toHome: false,
  score: 10,
  content: '<h3>用Html标签和CSS3写的一个手机！</h3>'  
}, (err) => {
  if (!err) {
    console.log('inserted success')
  } else {
    console.log(err + "")
  }
})

console.log((blogModel.find({type:'vue'})))