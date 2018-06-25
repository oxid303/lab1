function countSpaces(str) {
	if (typeof str !== 'string') return 0;
	if (str === '') return 0;
	return str.match(/[ ]/g).length;
};

function countWords(str) {
	if (typeof str !== 'string') return 0;
	if (str === '') return 0;
	str = str.replace(/\n/g,' ');
	str = str.replace(/(^\s*)|(\s*$)/g,'');
	str = str.replace(/[.,/|\?!@#№$%^&*(){}[\]_+=~;:"-]/g,' ');
	str = str.replace(/[ ]{2,}/g,' ');
	return str.split(' ').length;
};

function countSymbols(str) {
	if (typeof str !== 'string') return 0;
	if (str === '') return 0;
	return str.match(/[.,/|\?!@#№$%^&*(){}[\]_+=`~;:'"-]/g).length;
};

module.exports = {
	spaces: countSpaces,
	words: countWords,
	symbols: countSymbols,
};