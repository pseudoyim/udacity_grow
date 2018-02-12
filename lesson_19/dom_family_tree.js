/*
For this quiz, you'll need to add to the DOM tree that already exists.
*/

// Your code goes here!

// '#family2' should be a sibling of and come after '#family1'. 
$('<div id="family2"></div>').insertAfter($("#family1"));
// $("#family2").append("<h1> Hi! <h2>") //For testing purposes.

// '#bruce' should be the only immediate child of '#family2'. 
$("#family2").append($('<div id="bruce"></div>'));

// '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
$("#bruce").append($('<div id="madison"></div>'));
$("#bruce").append($('<div id="hunter"></div>'));