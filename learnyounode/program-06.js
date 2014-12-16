var dir = process.argv[2]
var ext = process.argv[3]
var mymodule = require('./program-06-module.js')

mymodule(dir, ext, function(err, files) {
  files.forEach(function (file) {
    console.log(file);
  })
})
