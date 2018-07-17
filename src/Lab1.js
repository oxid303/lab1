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
    if (this.check) return 0;
    return this.str.split(/\s/g).length - 1;
  }

  countWords() {
    if (this.check) return 0;
    return this.str.split(/\s+\b/).length;
  }

  countSymbols() {
    if (this.check) return 0;
    return this.str.split(/[^ \w]|[_]/g).length -1;
  }
}

module.exports = Counts;