function countSpaces(str) {
	if (str === "") return 0;
	if (str == null) return 0;
	if (typeof str !== 'string') return 0;
	return str.match(/[ ]/g).length;
};

function countWords(str) {
	if (str === "") return 0;	
	str = str.replace(/\n/g," ");
	str = str.replace(/(^\s*)|(\s*$)/g,"");
	str = str.replace(/[.,/|\?!@#№$%^&*(){}[\]_+=`~;:'"-]/g,"");
	str = str.replace(/[ ]{2,}/g," ");

	var result = str.split(" ").length;
	if ("") result--;
	return result;
};

function countSymbols(str) {
	if (str === "") return 0;
	return str.match(/[.,/|\?!@#№$%^&*(){}[\]_+=`~;:'"-]/g).length;
};

module.exports = {
	spaces: countSpaces,
	words: countWords,
	symbols: countSymbols,
};