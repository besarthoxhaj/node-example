var shot = require('shot');
var test = require('tape');
var rootHandler = require('../app/root.js');

test('GET /: should return form html', function(t) {
  shot.inject(rootHandler,{method:'GET',url:'/'},function(res) {
      var indexOf = res.payload.indexOf('form');
      t.notEqual(indexOf,-1,'got form somewhere in the html');
      t.equal(res.statusCode,200,'got 200 status code');
      t.end();
    }
  );
});