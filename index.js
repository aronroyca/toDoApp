var http = require('http');
var fs = require('fs');
var path = require('path');
var serveStatic = require('serve-static');

http
  .createServer(function (req, res) {
    fs.readFile('./public/index.html', { encoding: 'utf-8' }, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          res.end(data);
        }
      });
  })
  .listen(3000);
