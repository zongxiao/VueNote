const express = require('express')
var router = express.Router()
const curd = require('./connect')
const blogModel = curd.blogModel

// 获取博客列表
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


module.exports = router