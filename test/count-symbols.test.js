var Counts = require('../src/Lab1.js');
var assert = require('assert');

describe.only('Count Symbols', function() {

	describe('Zero Case', function() {

		it('Check Null', function(){
			const target = new Counts();
			assert.equal(target.countSymbols(), 0);
		});

		it('When string is empty', function(){
			const target = new Counts('');
			assert.equal(target.countSymbols(), 0);
		});
	});

	describe('Regular Case', function() {

		it('When string is "Variable symbols, like !№*_"', function(){
			const target = new Counts('Variable symbols, like !№*_');
			assert.equal(target.countSymbols(), 5);
		});

		it('When string is "More variables @,.^/%$"', function(){
			const target = new Counts('More variables @,.^/%$');
			assert.equal(target.countSymbols(), 7);
		});
	});

	describe('Not String Case', function() {

		it('When param is True', function(){
			const target = new Counts(true);
			assert.equal(target.countSymbols(), 0);
		});

		it('When param is False', function(){
			const target = new Counts(false);
			assert.equal(target.countSymbols(), 0);
		});

		it('When param is Undefined', function(){
			const target = new Counts(undefined);
			assert.equal(target.countSymbols(), 0);
		});

		it('When param is Number', function(){
			const target = new Counts(100500);
			assert.equal(target.countSymbols(), 0);
		});

		it('When param is Object', function(){
			const target = new Counts({});
			assert.equal(target.countSymbols(), 0);
		});

		it('When param is Function', function(){
			const target = new Counts(function(){});
			assert.equal(target.countSymbols(), 0);
		});
	});
});