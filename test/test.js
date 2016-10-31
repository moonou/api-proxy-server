const app = require('../index.js')
var request = require('supertest')(app.listen())
var assert = require('assert')

describe('Http request', function() {
  
  it('should return "missing query"', function (done) {
     request.get('/').end((err, res) => {
        if (err) throw err
        assert.equal(res.text, 'miss query')
        done()
     })
  })

  describe('test github api return', function() {
    this.timeout(5000)
    it('shold have current_user_url', function (done) {
      request.get('/?target=https://api.github.com/').end((err, res) => {
        assert.ok(JSON.parse(res.text).current_user_url)
        done()
      })
    })
  })
})
