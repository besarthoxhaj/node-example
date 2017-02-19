var http = require('http');

http.createServer(function(req,res) {
  res.end('Hello GSG');
}).listen(process.evn.PORT,function() {
  console.log('Listening on 8080');
});
