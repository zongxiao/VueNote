const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/zongxiaosblog')
const MonBlog = mongoose.model('monblog', {
  title: {
    type: String,
    required: true //表示这个属性是必需的
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  comments: []
})

const MonEssay = mongoose.model('monessay', {
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  comments: []
})

const MonArticle = mongoose.model('monarticle', {
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})

const Todos = mongoose.model('todos', {
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    required: true
  },
  done: {
    type: Boolean,
    required: true
  }
})
module.exports = {
  MonBlog: MonBlog,
  MonEssay: MonEssay,
  MonArticle: MonArticle,
  Todos: Todos
}