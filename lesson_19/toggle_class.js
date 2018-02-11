/*
For this quiz, use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!
*/

// don't change this variable!
var featuredArticle;

featuredArticle = $('.featured')

featuredArticle.toggleClass('featured') //just pass in the name of the class you want to toggle.







/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;

article2 = $('li.featured')

article2.toggleClass('featured')

article3 = article2.next()

article3.toggleClass('featured')