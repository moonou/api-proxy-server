'use strict'
const app = require('koa')()
const request = require('request')

app.use(function *(){
  if (this.query.target) {
    let result = yield new Promise((resolve, reject) => {
      request({
        url: this.query.target,
        headers: {
          'User-Agent': 'Awesome-Octocat-App'
        }
      }, (err, response, body) => {
        if (err) throw err
        resolve(body)
      })
    })
    this.body = result
    this.set('Access-Control-Allow-origin', '*')
  } else {
    this.body = 'miss query'
  }
})

app.listen(3000)

module.exports = app