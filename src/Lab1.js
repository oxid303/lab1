'use strict';

var checkNoString = require('../utils/check-no-string.js');
var checkEmpty = require('../utils/check-empty.js');

class Counts {

	constructor() {}

	countSpaces(str) {
		if ( checkNoString(str) || checkEmpty(str) ) return 0;
		return str.match(/[ ]/g).length;
	}

	countWords(str) {
		if ( checkNoString(str) || checkEmpty(str) ) return 0;
		return str.split(/\s+\b/).length;
	}

	countSymbols(str) {
		if ( checkNoString(str) || checkEmpty(str) ) return 0;
		return str.match(/[.,/|\?!@#№$%^&*(){}[\]_+=`~;:'"-]/g).length;
	}
}

let counts = new Counts();

module.exports = counts;