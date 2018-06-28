var sum = require('../src/Lab1.js');
var assert = require('assert');

describe('Count Symbols', function() {

	describe('Zero Case', function() {

		it('Check Null', function(){
			assert.equal(sum.countSymbols(), 0);
		});

		it('When string is empty', function(){
			assert.equal(sum.countSymbols(''), 0);
		});
	});

	describe('Regular Case', function() {

		it('When string is "Variable symbols, like !№*_"', function(){
			assert.equal(sum.countSymbols('Variable symbols, like !№*_'), 5);
		});

		it('When string is "More variables @,.^/%$"', function(){
			assert.equal(sum.countSymbols('More variables @,.^/%$'), 7);
		});
	});

	describe('Not String Case', function() {

		it('When param is True', function(){
			assert.equal(sum.countSymbols(true), 0);
		});

		it('When param is False', function(){
			assert.equal(sum.countSymbols(false), 0);
		});

		it('When param is Undefined', function(){
			assert.equal(sum.countSymbols(undefined), 0);
		});

		it('When param is Number', function(){
			assert.equal(sum.countSymbols(100500), 0);
		});

		it('When param is Object', function(){
			assert.equal(sum.countSymbols({}), 0);
		});

		it('When param is Function', function(){
			assert.equal(sum.countSymbols(function(){}), 0);
		});
	});
});