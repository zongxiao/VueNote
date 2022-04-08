// 本地mongo数据库超级管理： admin数据库 admin用户名 123456密码
// 普通用户读写： blog数据库 root用户名 Silence37密码
const mongoose = require('mongoose');
mongoose.connect('mongodb://root:Silence37@127.0.0.1:27017/blog').then().catch(error => console.log('faild connected：' + error))
mongoose.connection.once('open', () => console.log('connected...'))
mongoose.connection.once("close", () => console.log('disconnected'))
// blogModel（结构模型，在mongodb中会创建tb_blog这个表，存放所有博客文章）
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
module.exports = {
  blogModel
}

