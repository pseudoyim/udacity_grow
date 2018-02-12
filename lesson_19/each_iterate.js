/*
For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
length numbers won't be correct!
*/

// MY SOLUTION:

$('p').each(function(){
	var chars = $(this).text().length;
	// alert(chars);
	$(this).text($(this).text()+chars.toString());
});





// GIVEN SOLUTION:

function numberAdder(){
	var text, number;

	text = $(this).text();

	number = text.length;

	$(this).text(text + " " + number);
}

$('p').each(numberAdder) //just pass in the function to the .each() method as a param.