

var http = require('http');

http.createServer(function(req,res) {
  res.end('Hello GSG');
}).listen(process.env.PORT || 8080,function() {
  console.log('Listening on 8080');
});
