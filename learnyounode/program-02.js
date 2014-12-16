var length = process.argv.length
if (length < 2) {
  return
}

var sum = 0

for (var i = 2; i < length; i++) {
  sum += Number(process.argv[i])
}

console.log(sum)
