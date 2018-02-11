
/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!

LOOKED LIKE THIS:
            <nav id="nav" class="navigator">
                <h1>Nav Header</h1>
                <ul class="nav-list">
                    <li class="nav-item"><a>Item #1</a></li>						 // LOOK HERE: <a> after <li>
                    <li class="nav-item active"><a href="#2">Item #2</a></li>
                    <li class="nav-item"><a href="#3">Item #3</a></li>


*/

// Start with this variable!
var navList;

navList = $('li.nav-item a');

navList.first().attr("href", "#1");





//GIVEN SOLUTION

var navList, firstItem, link;

navList = $(".nav-list");

firstItem = navList.children().first()

link = firstItem.find("a");

link.attr("href", "#1");