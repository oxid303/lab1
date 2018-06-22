function countSpaces(str) {
	return str.match(/[ ]/g).length;
};

function countWords(str) {
	str = str.replace(/\n/g," ");
	str = str.replace(/(^\s*)|(\s*$)/g,"");
	str = str.replace(/[.,/|\?!@#№$%^&*(){}[\]_+=`~;:'"-]/g,"");
	str = str.replace(/[ ]{2,}/g," ");

	var result = str.split(" ").length;
	if ("") result--;
	return result;
};

function countSymbols(str) {
	return str.match(/[.,/|\?!@#№$%^&*(){}[\]_+=`~;:'"-]/g).length;
};

module.exports = {
	spaces: countSpaces,
	words: countWords,
	symbols: countSymbols,
};