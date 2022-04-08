const express = require('express')
var router = express.Router()
const curd = require('./connect')
const blogModel = curd.blogModel

// 获取博客接口
router.get('/blogs', (req, res) => {
  blogModel.find({}, (err, data) => {
    if (!err) {
      res.send(data)
    } else {
      res.send(err)
      return
    }
  })
})
// 添加博客
// router.post('/blog/add', (req, res) => {
//   new blogModel(req.body).save((err) => {
//     if (err) res.send(err)
//   })
// })
// router.get('/todos', function (req, res) {
//   blogModel.find((err, data) => {
//     if (err) {
//       res.send(err)
//       return
//     }
//     res.send(data)
//   })
// })

// router.post('/blog/new', (req, res) => {
//   new MonBlog(req.body).save((err) => {
//     if (err) res.send(err)
//   })
// })

// router.get('/blog', function (req, res) {
//   MonBlog.find((err, data) => {
//     if (err) {
//       res.send(err)
//       return
//     }
//     res.send(data)
//   })
// })

// router.post('/blog/:id', (req, res) => {
//   MonBlog.findByIdAndUpdate(req.body.id, {
//     title: req.body.title,
//     content: req.body.content,
//     comments: req.body.comments
//   }, function (err, data) {
//     if (err) res.send(err)
//   })
// })

// router.delete('/essay/:id', (req, res) => {
//   MonEssay.findByIdAndDelete(req.params.id, function (err, data) {
//     if (err) res.send(err)
//   })
// })

module.exports = router