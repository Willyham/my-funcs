'use strict';

var test = require('tape');

var myFuncs = require('../index');

var indexFuncs = ['myFuncs', 'getNames', 'findFunctions', 'findFunction', 'getFunctionNameFromNode'];

test('It should get all function names in a project', function assert(t) {
  var funcs = myFuncs('./index.js');
  t.deepEqual(funcs, indexFuncs);
  t.end();
});

test('It should return an error for an invlaid entry point', function assert(t) {
  var funcs = myFuncs('dontpanic');
  t.ok(funcs instanceof Error);
  t.end();
});

test('It should be really meta', function soMeta(t) {
  var funcs = myFuncs('./test/index.js');
  var expected = indexFuncs.concat(['assert', 'assert', 'soMeta']);
  t.deepEqual(funcs, expected);
  t.end();
});
