function countSpaces(str) {
	return str.split(" ").length - 1;
};

function countWords(str) {
	var result =  str.split(/\s+\b/).length;
	if ( (str[0] == " ") || (str.length == 0)) {
		result -= 1;
	}
	return result;
};

function countSymbols(str) {
	var i = 0, result = 0;
	for (i; i < str.length; i++) {
		if ( (str[i] == ",")||(str[i] == ".")||(str[i] == "?")||(str[i] == "!")||(str[i] == "-")||(str[i] == "_") ) {
			result++;
		}
	}
	return result;
};

module.exports = {
	spaces: countSpaces,
	words: countWords,
	symbols: countSymbols,
};