function countSpaces(str) {
	return str.split(" ").length - 1;
};

function countWords(str) {
	return str.split(/\s+\b/).length;
};

function countSymbols(str) {
	var i = 0, result = 0;
	for (i; i < str.length; i++) {
		if ( (str[i] == ",")||(str[i] == ".")||(str[i] == "?")||(str[i] == "!")||(str[i] == "-")||(str[i] == "_") ) {
			result++;
		};
	};
	return result;
};

module.exports = {
	spaces: countSpaces,
	words: countWords,
	symbols: countSymbols,
};