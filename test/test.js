var sum = require("../src/Lab1.js");
var assert = require("assert");
describe("count", function() {
	it("count spaces in the string", function() {
		assert.equal(sum.spaces("serg esr er ht"), 3);
	});
	it("count words in the string", function() {
		assert.equal(sum.words("srt, ht"), 2);
	});
	it("count symbols ( ,.?!-_ ) in the string", function() {
		assert.equal(sum.symbols("gesr.!!hrt/?srt "), 4);
	});
});