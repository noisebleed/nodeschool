// modules
var http = require('http')
var bl = require('bl')

var url = process.argv[2]

http.get(url, function (response) {
  response.setEncoding('utf8')
  response.on('end', function (data) {
    var text = data.toString()
    console.log(text.length, text)

  })
  response.on('error', function (data) {

  })
})
