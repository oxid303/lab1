'use strict';

var _ = require('lodash');

function checkNoString (str) {
	return !_.isString(str);
};

module.exports = checkNoString;