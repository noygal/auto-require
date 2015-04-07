var expect = require('chai').expect;
var path = require('path');
var del = require('del');

// var testPath = path.join(__dirname, '/tests');
// var x = require('./managed-require');
// console.log(x('express', {path : testPath, loglevel: 'verbose'}));
// console.log(x);
// console.log(testPath);


describe('Managed require specs', function(){
  //clearing test path
  before(function(){
    del.sync(testPath);
  });

  describe('Basic', function(){
    it('Simple call', function(){
      require = require('./managed-require');
      // console.log(testPath);
      require('managed-require', {path : testPath});
    });
  });
});
