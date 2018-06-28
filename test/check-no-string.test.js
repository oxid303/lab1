var checkNoString = require('../utils/check-no-string.js');
var assert = require('assert');

describe('Check No String', function() {

	describe('Return true if there is no string', function() {

		it('Check Null', function() {
			assert.equal(checkNoString(), true);
		});

		it('When param is True', function() {
			assert.equal(checkNoString(true), true);
		});

		it('When param is False', function() {
			assert.equal(checkNoString(false), true);
		});

		it('When param is Undefined', function() {
			assert.equal(checkNoString(undefined), true);
		});

		it('When param is Number', function() {
			assert.equal(checkNoString(100500), true);
		});

		it('When param is Object', function() {
			assert.equal(checkNoString({}), true);
		});

		it('When param is Function', function() {
			assert.equal(checkNoString(function(){}), true);
		});
	});

	describe('Return false if there is a string', function() {

		it('When string is empty', function() {
			assert.equal(checkNoString(''), false);
		});

		it('When string is "some text"', function() {
			assert.equal(checkNoString('some text'), false);
		});
	});
});