const express = require('express')
const bodyParser = require('body-parser')

const router = require('./router')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use('/', router)
app.listen(7000, () => {
  console.log('7000端口监听中')
})