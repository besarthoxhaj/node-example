'use strict';

var Shot = require('shot');
var test = require('tape');
var router = require('../router.js');

test('get /: should return the html form', function(t) {
  var pathTest = 'GET /';

  Shot.inject(router[pathTest], {method:'GET',url:'/'}, function(res) {
    t.equal(res.statusCode,200,'got 200');
    t.end();
  });
});
