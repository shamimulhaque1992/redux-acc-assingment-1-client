const fs = require('fs')

fs.writeFile('/test.txt', 'Cool, I can do this in the browser!', function (
  err,
) {
  fs.readFile('/test.txt', function (err, contents) {
    console.log(contents.toString())
  })
})
