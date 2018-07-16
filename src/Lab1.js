'use strict';

var checkNoString = require('../utils/check-no-string.js');
var checkEmpty = require('../utils/check-empty.js');

class Counts {

	constructor(str) {
		this.str = str;
	}

	countSpaces() {
		if ( checkNoString(this.str) || checkEmpty(this.str) ) return 0;
		return this.str.split(/[ ]/g).length - 1;
	}

	countWords() {
		if ( checkNoString(this.str) || checkEmpty(this.str) ) return 0;
		return this.str.split(/\s+\b/).length;
	}

	countSymbols() {
		if ( checkNoString(this.str) || checkEmpty(this.str) ) return 0;
		return this.str.split(/[.,/|\?!@#№$%^&*(){}[\]_+=`~;:'"-]/g).length -1;
	}
}

module.exports = Counts;