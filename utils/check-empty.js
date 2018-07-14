'use strict';

var _ = require('lodash');

function checkEmpty (str) {
	if ( _.isEmpty(str) ) return true;
	return false;
};

module.exports = checkEmpty;