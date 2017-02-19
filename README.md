## Node example

Small project created in nodejs. It servers an html form and by submitting it will
post a message on `gazaskygeeks` gitter channel.

## Run

The app uses gitter TOKEN and you need one in order to run it. To get a token
register to http://developer.gitter.im.

Once you have the token set it as an environmental variable and run node:

```
$ TOKEN=<token> node index.js 
```

## Code

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

Every running computer program is a process, `nodejs` as well. Moreover every 
process has access to the environmental variables. An example will clarify:

Let's suppose the following is our `index.js` file.

```js
console.log('process',process);
console.log('process.env',process.env);
console.log('process.env.NAME',process.env.NAME); // Bes
console.log('process.env.PORT',process.env.PORT); // 8080
```

By running it with two env variable:

```
$ PORT=8080 NAME=Bes node index.js
```

Notice how we passed the variable `PORT=8080` and `NAME=Bes` from bash the
environment to the node program. They are available inside the global object `process`.

Why someone should do that? The answer is portability!

When the code is deployed to Heroku, the remote machine will start `node` and will
give one of the available ports. This means that we can not reserver a specific
one but must allow flexibility. Heroku will set the `PORT` environmental variable
at run time itself.