function countSpaces(str) {
	return str.split(" ").length - 1;
};

function countWords (str) {
	// return str.split(" ").length;
	return str.split(/\s+\b/).length;
};

function countSymbols(str) {
	// return (str.split(",").length - 1) + (str.split(".").length - 1) +	(str.split("?").length - 1) +	(str.split("!").length - 1) +	(str.split("-").length - 1) +	(str.split("_").length - 1);
	var i = 0, result = 0;
	for (i; i < str.length; i++) if ((str[i] == ",")||(str[i] == ".")||(str[i] == "?")||(str[i] == "!")||(str[i] == "-")||(str[i] == "_")) result++;
	return result;
};

var string = "Hello World! I mean seriously, Hello!";

var spacesNumber = countSpaces(string);
var wordsNumber = countWords(string);
var symbolsNumber = countSymbols(string);

// console.log(spacesNumber);
// console.log(wordsNumber);
// console.log(symbolsNumber);

var ready = {
	spaces: spacesNumber,
	words: wordsNumber,
	symbols: symbolsNumber,
};
module.exports = ready;