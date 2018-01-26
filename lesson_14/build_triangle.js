function makeLine(length){
	var line = "";
	for (var j = 1; j <= length; j++){
		line += "* ";
	}
	return line + "\n";
}

function buildTriangle(num){
	var row = "";
	for (var i = 1; i <= num; i++){
		row = row + makeLine(i)
	}
	return row
}

console.log(buildTriangle(10))