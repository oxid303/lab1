'use strict';

var _ = require('lodash');

function checkEmpty (str) {
	return _.isEmpty(str);
};

module.exports = checkEmpty;