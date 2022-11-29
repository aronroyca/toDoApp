var http = require('http');
var fs = require('fs');
var path = require('path');

http
  .createServer(function (req, res) {
    if (req.url === '/') {
          fs.readFile('./public/index.html', { encoding: 'utf-8' }, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          res.end(data);
        }
      });
    } else if (req.url === '/signin.html') {
      var path = './todolist.html'
      // res.on('data', function (data) {
      //   console.log(data);
        res.end(path)
      // })
      // var path = path.join(__dirname, req)
      // var list = fs.readFile()
    }
  })
  .listen(3000);
