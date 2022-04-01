const mongoose = require('mongoose');
mongoose.connect('mongodb://zongxiaosblog:Silence37@127.0.0.1:27017')
  .then()
  .catch(error => console.log('faild connected：' + error))
mongoose.connection.once('open', () => console.log('connected...'))
mongoose.connection.once("close", () => console.log('disconnected'))

const blogsSchema = new mongoose.Schema({
  title: String,
  subTitle: String,
  cover: String,
  time: String,
  type: String,
  toHome: { type: Boolean, default: false },
  score: { type: Number, min: 0, max: 10 },
  content: String
})

const blogsModel = mongoose.model('blogs', blogsSchema)
blogsModel.create({
  title: "用Html标签和CSS3写的一个手机！",
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
  }
})

blogsModel.find({type:'vue'})