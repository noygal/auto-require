var expect = require('chai').expect;
var mgrReq = require('./auto-require')();
var path = require('path');

describe('Managed gulp specs', function(){
  describe('Basic', function(){
    it('First', function(){
      mgr('express');
    });
  });
});
