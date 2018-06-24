var sum = require("../src/Lab1.js");
var assert = require("assert");

describe("count", function() {

	it("count words in the string", function() {
		assert.equal(sum.words(""), 0);
	});

	it("count symbols in the string", function() {
		assert.equal(sum.symbols(""), 0);
	});
});