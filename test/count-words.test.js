var sum = require('../src/Lab1.js');
var assert = require('assert');

describe('Count Words', function() {

	describe('Zero Case', function() {

		it('Check Null', function(){
			assert.equal(sum.words(), 0);
		});

		it('When string is empty', function(){
			assert.equal(sum.words(''), 0);
		});
	});

	describe('Regular Case', function() {

		it('When string is "medusa\'s path medusa`s path medusa-path"', function(){
			assert.equal(sum.words('medusa\'s path medusa`s path medusa-path'), 6);
		});

		it('When string is "  random text.with   wrong , punctuation  "', function(){
			assert.equal(sum.words('  random text.with   wrong , punctuation  '), 5);
		});

		it('When string is "it それ 它 זה" آی تی هذا', function(){
			assert.equal(sum.words('it それ 它 זה" آی تی هذا'), 7);
		});
	});

	describe('Not String Case', function() {

		it('When param is True', function(){
			assert.equal(sum.words(true), 0);
		});

		it('When param is False', function(){
			assert.equal(sum.words(false), 0);
		});

		it('When param is Undefined', function(){
			assert.equal(sum.words(undefined), 0);
		});

		it('When param is Number', function(){
			assert.equal(sum.words(100500), 0);
		});

		it('When param is Object', function(){
			assert.equal(sum.words({}), 0);
		});

		it('When param is Function', function(){
			assert.equal(sum.words(function(){}), 0);
		});
	});
});