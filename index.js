var fs = require('fs');
var http = require('http');

var form = fs.readFileSync(__dirname+'/form.html','utf8');

http.createServer(function(req,res) {
  if(req.url === '/') {
    res.end(form);
  } else {
    res.end('Not found');
  }
}).listen(process.env.PORT || 8080,function() {
  console.log('Listening on 8080');
});
