require('co-mocha')
const app = require('../index.js')
var request = require('co-supertest').agent(app.listen())
var assert = require('assert')

describe('Http request', function() {
  
  it('should return "missing query"', function *() {
      const res = yield request.get('/').end()
      assert.equal(res.text, 'miss query')
  })

  describe('test github api return', function() {
    this.timeout(5000)
    it('shold have current_user_url', function *() {
      const res = yield request.get('/?target=https://api.github.com/').end()
      assert.ok(JSON.parse(res.text).current_user_url)
    })
  })
})
