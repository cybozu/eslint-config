(function() {
  'use strict';
  var foos = [''];
  foos.map(function(foo) {
    return foo + foo;
  });
}());