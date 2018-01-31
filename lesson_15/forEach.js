/*
The forEach() method gives you an alternative way to iterate over an array, 
and manipulate each element in the array with an inline function expression.
*/

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});



/*
The function that you pass to the forEach() method can take up to three parameters. 
In the video, these are called element, index, and array, but you can call them whatever you like.
*/

words = ["cat","in","hat"];

words.forEach(function(word, num, all){
	console.log("Index " + num + " in \"" + all.toString() + "\" is \"" + word + "\".");
});