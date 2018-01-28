//You can pass a function into another function, inline. 
//This sounds stupid and messy, but apparently you'll see a lot of this in JavaScript.
//"when you know the function is not going to be reused, it could save you many lines of code to just define it inline."

//Here's an example of this bullshit in action.

function movies(messageFunction, name) {
	messageFunction(name);
}

movies(function displayFavorite(movieName){
	console.log("My favorite movie is " + movieName);
}, "Finding Nemo"
);

