var Counts = require('../src/Lab1.js');
var assert = require('assert');

describe('Count Words', function() {

	describe('Zero Case', function() {

		it('Check Null', function(){
			const target = new Counts();
			assert.equal(target.countWords(), 0);
		});

		it('When string is empty', function(){
			const target = new Counts('');
			assert.equal(target.countWords(), 0);
		});
	});

	describe('Regular Case', function() {

		it('When string is "word"', function(){
			const target = new Counts('word');
			assert.equal(target.countWords(), 1);
		});

		it('When string is "text for example"', function(){
			const target = new Counts('text for example');
			assert.equal(target.countWords(), 3);
		});

		it('When string is "text for example, with punctuation marks."', function(){
			const target = new Counts('text for example, with punctuation marks.');
			assert.equal(target.countWords(), 6);
		});
	});

	describe('Not String Case', function() {

		it('When param is True', function(){
			const target = new Counts(true);
			assert.equal(target.countWords(), 0);
		});

		it('When param is False', function(){
			const target = new Counts(false);
			assert.equal(target.countWords(), 0);
		});

		it('When param is Undefined', function(){
			const target = new Counts(undefined);
			assert.equal(target.countWords(), 0);
		});

		it('When param is Number', function(){
			const target = new Counts(100500);
			assert.equal(target.countWords(), 0);
		});

		it('When param is Object', function(){
			const target = new Counts({});
			assert.equal(target.countWords(), 0);
		});

		it('When param is Function', function(){
			const target = new Counts(function(){});
			assert.equal(target.countWords(), 0);
		});
	});
});