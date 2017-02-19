## Node example

Small project created in nodejs. It servers an html form and by submitting it will
post a message on `gazaskygeeks` gitter channel.

Let's have a look at the code.

```js
var http = require('http');
var utils = require('./utils.js');
var router = require('./router.js');

http.createServer(function(req,res) {
  var path = req.method + ' ' + req.url;
  try {
    router[path](req,res);
  } catch(err) {
    res.end('Not found');
  }
}).listen(process.env.PORT || 8080);
```

Let's analyse the first lines:

```js
var http = require('http');
var utils = require('./utils.js');
var router = require('./router.js');
```

`http` is a native module coming directly from node. While `./utils.js` and 
`./router.js` are modules created on different files and than imported.
The `http` module is used to http create servers and make requests.

```js
var http = require('http');

http.createServer(function(req,res) {
  console.log('req',req);
  console.log('res',res);
  res.end('Hello, World!');
}).listen(8080);
```

The code above shows the creation of a simple full functional server. Save the it
in a file named `index.js` and run it with `node index.js`. Visit the server on
[http://localhost:8080](http://localhost:8080).

In a way this is all you need to know.