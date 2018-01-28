/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression

// my work
//this is from my work in laugh.js:
var hactory = function(num){
	var final = "";
	for (i=0; i<num; i++){
		final += "ha";
	}
	return final + "!";
}

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// passing in the 'hactory' function as an inline function expression (2nd argument)
emotions("happy", function(num){
	var final = "";
	for (i=0; i<num; i++){
		final += "ha";
	}
	return final + "!";
})