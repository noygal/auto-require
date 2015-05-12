var expect = require('chai').expect;
var path = require('path');
var del = require('del');

var testPath = path.join(__dirname, '');
var result = path.join(__dirname, '/node_modules/lodash/package.json');
require = require('./managed-require');
// del.sync(testPath);
var _ = require('lodash', {
  path: testPath
});
console.log(_);

// describe('Managed require specs', function(){
//   before(function(done){
//     console.log(require);
//     done();
//   });
//   it('Simple call', function(){
//     expect(require(result).name).toBe('lodash');
//   });
// });
