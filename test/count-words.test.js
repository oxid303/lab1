var sum = require('../src/Lab1.js');
var assert = require('assert');

describe('Count Words', function() {

	describe('Zero Case', function() {

		it('Check Null', function(){
			assert.equal(sum.countWords(), 0);
		});

		it('When string is empty', function(){
			assert.equal(sum.countWords(''), 0);
		});
	});

	describe('Regular Case', function() {

		it('When string is "word"', function(){
			assert.equal(sum.countWords('word'), 1);
		});

		it('When string is "text for example"', function(){
			assert.equal(sum.countWords('text for example'), 3);
		});

		it('When string is "text for example, with punctuation marks."', function(){
			assert.equal(sum.countWords('text for example, with punctuation marks.'), 6);
		});
	});

	describe('Not String Case', function() {

		it('When param is True', function(){
			assert.equal(sum.countWords(true), 0);
		});

		it('When param is False', function(){
			assert.equal(sum.countWords(false), 0);
		});

		it('When param is Undefined', function(){
			assert.equal(sum.countWords(undefined), 0);
		});

		it('When param is Number', function(){
			assert.equal(sum.countWords(100500), 0);
		});

		it('When param is Object', function(){
			assert.equal(sum.countWords({}), 0);
		});

		it('When param is Function', function(){
			assert.equal(sum.countWords(function(){}), 0);
		});
	});
});