var data = $('label').html();
var clearData = [];
var outputAray = []; 
var obj = {};

function makeArray(data) {
	var string = '';

	string = data.replace( /\n/, "" );
	clearData = string.replace( /\n/g, " " ).split(' ');

	for (var i = 0; i < clearData.length; i+=15) {
		if (i == 0)
			outputAray.push(clearData.slice(i, (i+1)*15));
		else
			outputAray.push(clearData.slice(i, i*2));
	};

	return outputAray;
	// return obj;

};

makeArray(data);
// console.log(clearData);

console.log(outputAray);