const express = require('express')
const curd = require('./curd')
var router = express.Router()

const MonBlog = curd.MonBlog
const MonEssay = curd.MonEssay
const Todos = curd.Todos
// const MonArticle = curd.MonArticle
router.post('/todos/add', (req, res) => {
  new Todos(req.body).save((err) => {
    if (err) res.send(err)
  })
})
router.get('/todos', function (req, res) {
  Todos.find((err, data) => {
    if (err) {
      res.send(err)
      return
    }
    res.send(data)
  })
})

router.post('/blog/new', (req, res) => {
  new MonBlog(req.body).save((err) => {
    if (err) res.send(err)
  })
})

router.get('/blog', function (req, res) {
  console.log('get')
  MonBlog.find((err, data) => {
    if (err) {
      res.send(err)
      return
    }
    res.send(data)
  })
})

router.post('/blog/:id', (req, res) => {
  MonBlog.findByIdAndUpdate(req.body.id, {
    title: req.body.title,
    content: req.body.content,
    comments: req.body.comments
  }, function (err, data) {
    if (err) res.send(err)
  })
})

router.delete('/essay/:id', (req, res) => {
  MonEssay.findByIdAndDelete(req.params.id, function (err, data) {
    if (err) res.send(err)
  })
})

module.exports = router