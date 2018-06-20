var sum = require('../src/Lab1.js');
var assert = require('assert');
it('spaces is ok :)', function() {
	assert.equal(sum.spaces, 5);
});
it('words is ok :)', function() {
	assert.equal(sum.words, 6);
});
it('symbols is ok :)', function() {
	assert.equal(sum.symbols, 3);
});