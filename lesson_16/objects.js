

//NOTES ABOUT objects

// 1. To first create an object, just make a variable and set it equal to empty curly braces. Example:

var umbrella = {};


// 2. Then you can assign properties/attributes and actions/things it can do (called "methods") to it, using KEY:VALUE pairs, separated by commas.

var umbrella = {
	color: "pink",
	isOpen: false,
	oepn: function() {
		if(umbrella.isOpen === true){
			return "The umbrella is already open!";
		}
		else{
			umbrellla.isOpen = true;
			return "Paul opens the umbrella.";
		}
	}
};