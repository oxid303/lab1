'use strict';

var _ = require('lodash');

function checkNoString (str) {
	if ( !_.isString(str) ) return true;
	return false;
};

module.exports = checkNoString;