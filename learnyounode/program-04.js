var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, 'utf8', function(err, contents) {
  console.log(contents.split('\n').length - 1)
})
