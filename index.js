let http = require("http");

http
  .createServer(function (req, res) {
    console.log("Its up and running");
    res.end("Hello World!");
  })
  .listen(3000);
