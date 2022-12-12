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
          console.log('success')
          res.end(data);
        }
      });
    } else if (req.url === '/signin.html') {
      var path = './public/todolist.html'
      fs.readFile(path, { encoding: 'utf-8' }, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log('success')
          res.end(data);
        }
      });
    }
  })
  .listen(3000);
