// server.js
let express = require('express')
let app = express()
console.log('running')
app.get('/say', function(req, res) {
  console.log(req.query)
  let {callback} = req.query
  res.end(`${callback}('hello jsonp!!!')`)
})
app.listen(3000)
