'use strict';

var checkNoString = require('../utils/check-no-string.js');
var checkEmpty = require('../utils/check-empty.js');

class Counts {

  constructor(str) {
    this.str = str;
  }

  get check() {
    return checkNoString(this.str) || checkEmpty(this.str);
  }

  countSpaces() {
    return new Counts(this.str).check ? 0 : this.str.split(/[ ]/g).length - 1;
  }

  countWords() {
    return new Counts(this.str).check ? 0 : this.str.split(/\s+\b/).length;
  }

  countSymbols() {
    return new Counts(this.str).check ? 0 : this.str.split(/[^ \w]|[_]/g).length -1;
  }
}

module.exports = Counts;