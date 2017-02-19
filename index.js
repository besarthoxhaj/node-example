var fs = require('fs');
var http = require('http');
var https = require('https');
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
      var postData = JSON.stringify({text:body.message});
      var dataLength = Buffer.byteLength(postData);

      var options = {
        hostname: 'api.gitter.im',
        port: 443,
        path: '/v1/rooms/588f114dd73408ce4f46e903/chatMessages',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Content-Length': dataLength,
          'Authorization': 'Bearer ' + process.env.TOKEN
        }
      };

      var request = https.request(options, function(resGitter){
        res.end('Thank you! Your mess was sent to Gitter');
      });

      request.on('error', function(err) {
        console.log('err',err);
      });

      request.write(postData);
      request.end();
    });
  } else {
    res.end('Not found');
  }
}).listen(process.env.PORT || 8080,function() {
  console.log('Listening on 8080');
});
