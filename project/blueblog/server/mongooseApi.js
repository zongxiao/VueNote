// npm安装了之后呢需要在这里引入mongoose
const mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://root:Silence37@127.0.0.1:27017/blog').then().catch(error => console.log('faild connected：' + error))

// 利用mongoose.Schema构造函数去new一个结构模型对象
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
// 利用mongoose的model方法将结构模型转为数据表，表名tb_blog
const blogModel = mongoose.model('tb_blog', blogSchema)
module.exports = {
  blogModel
}
// 准备一篇博客文档
const blogDocument = {
  title: "用Html标签和CSS3写的一个手机！111",
  subTitle: "手机外形上来说就是长方形，然后加上圆角边框，如果是简单的平面图形，几分",
  cover: "/img/blog/001.jpg",
  time: '2021-12-12',
  type: 'vue',
  toHome: false,
  score: 10,
  content: '<h3>用Html标签和CSS3写的一个手机！</h3>'
}
// 将文档插入数据库
blogModel.create(blogDocument, (err) => {
  if (!err) console.log('inserted success')
})

// 查找所有并且逐个删除
blogModel.find({}, (err, data) => {
  if (!err && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      blogModel.deleteOne({ "_id": data[i]._id }, (err, result) => {
        if (!err) {
          console.log(result, '删除成功' + data[i]._id)
        }
      })
    }
  }
})