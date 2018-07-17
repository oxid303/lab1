var checkEmpty = require('../utils/check-empty.js');
var assert = require('assert');

describe('Check Empty', function() {
  
  describe('Return true if there is empty', function() {

    it('Check Null', function() {
      assert.equal(checkEmpty(), true);
    });

    it('When param is True', function() {
      assert.equal(checkEmpty(true), true);
    });

    it('When param is False', function() {
      assert.equal(checkEmpty(false), true);
    });

    it('When param is Undefined', function() {
      assert.equal(checkEmpty(undefined), true);
    });

    it('When param is Number', function() {
      assert.equal(checkEmpty(100500), true);
    });

    it('When param is empty String', function() {
      assert.equal(checkEmpty(''), true);
    });

    it('When param is empty Object', function() {
      assert.equal(checkEmpty({}), true);
    });

    it('When param is empty Function', function() {
      assert.equal(checkEmpty(function(){}), true);
    });
  });

  describe('Return false if there is not empty', function() {

    it('When string is "some text"', function() {
      assert.equal(checkEmpty('some text'), false);
    });

    it('When param is some Object', function() {
      assert.equal(checkEmpty({a: 1}), false);
    });

    it('When param is some Array', function() {
      assert.equal(checkEmpty([0,1,2]), false);
    });
  });
});