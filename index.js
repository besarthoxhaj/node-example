var fs = require('fs');
var http = require('http');
var utils = require('./utils.js');

var form = fs.readFileSync(__dirname+'/form.html','utf8');

http.createServer(function(req,res) {
  if(req.url === '/') {
    res.end(form);
  } else if (
    req.url === '/form'
    && req.method === 'POST'
  ) {
    utils.parseBody(req,function(err,body){
      var str = JSON.stringify(body);
      res.end('Thank you! This is your mess: ' + str);
    });
  } else {
    res.end('Not found');
  }
}).listen(process.env.PORT || 8080,function() {
  console.log('Listening on 8080');
});
