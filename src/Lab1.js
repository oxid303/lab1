var _ = require('lodash');

function checkEmpty(str) {
	if ( !_.isString(str) || _.isEmpty(str) ) return true;	
}

function countSpaces(str) {
	if( checkEmpty(str) ) return 0;
	return str.match(/[ ]/g).length;
};

function countWords(str) {
	if( checkEmpty(str) ) return 0;
	return str.split(/\s+\b/).length;
};

function countSymbols(str) {
	if( checkEmpty(str) ) return 0;
	return str.match(/[.,/|\?!@#№$%^&*(){}[\]_+=`~;:'"-]/g).length;
};

module.exports = {
	spaces: countSpaces,
	words: countWords,
	symbols: countSymbols,
};