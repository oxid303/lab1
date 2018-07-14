const Counts = require('../src/Lab1.js');
var assert = require('assert');

describe('Count Spaces', function() {

	describe('Zero Case', function() {

		it('Check Null', function() {
		const target = new Counts();
			assert.equal(target.countSpaces(), 0);
		});

		it('When string is empty', function() {
		const target = new Counts('');
			assert.equal(target.countSpaces(), 0);
		});
	});

	describe('Regular Case', function() {

		it('When string is "simple text"', function() {
			const target = new Counts('simple text');
			assert.equal(target.countSpaces(), 1);
		});

		it('When string is " random  spaces  "', function() {
			const target = new Counts(' random  spaces  ');
			assert.equal(target.countSpaces(), 5);
		});
	});

	describe('Not String Case', function() {

		it('When param is True', function() {
		const target = new Counts(true);
			assert.equal(target.countSpaces(), 0);
		});

		it('When param is False', function() {
		const target = new Counts(false);
			assert.equal(target.countSpaces(), 0);
		});

		it('When param is Undefined', function() {
		const target = new Counts(undefined);
			assert.equal(target.countSpaces(), 0);
		});

		it('When param is Number', function() {
		const target = new Counts(100500);
			assert.equal(target.countSpaces(), 0);
		});

		it('When param is Object', function() {
		const target = new Counts({});
			assert.equal(target.countSpaces(), 0);
		});

		it('When param is Function', function() {
		const target = new Counts(function(){});
			assert.equal(target.countSpaces(), 0);
		});
	});
});