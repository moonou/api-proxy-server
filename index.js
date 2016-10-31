'use strict'
const app = require('koa')()
const request = require('request')
const stream = require('stream')

app.use(function *(){
  if (this.query.target) {
    this.body = request({
      url: this.query.target,
      headers: {
        'User-Agent': 'Awesome-Octocat-App'
      }
    })
    this.set('Access-Control-Allow-origin', '*')
  } else {
    this.body = 'miss query'
  }
})

app.listen(3000)

module.exports = app