/*
PASSING FUNCTION INTO jQuery object

A function passed into the jQuery object runs on document.ready, which occurs AFTER the DOM has been loaded.

*** Why this is important:
Now, you can include your script in the <head> and it won't run until the DOM has 
been built and the elements that you want to manipulate are on the page.

---

For this quiz, can you use this script, which is linked in the <head> of index.html,
to change the boring placeholder image to a picture of a cute animal?

Remember, you'll need to pass a function into the jQuery object to run
when the document is ready.

Unfortunately, placepuppy is no longer available. Here's a link to a random
animal image on lorempixel.com:
http://lorempixel.com/350/150/animals/

Good luck!

*/


function changePic (){
	var target = $('.article-item img').first();
	target.attr('src', 'http://lorempixel.com/350/150/animals/')
}

//Pass the function into jQuery object.
$(changePic);