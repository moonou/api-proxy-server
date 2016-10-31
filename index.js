const app = require('koa')()

app.use(function *(){
  this.body = this.querystring
})

app.listen(3000)