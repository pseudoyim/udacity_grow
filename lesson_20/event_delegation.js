// The jQuery event listener examples we've been looking at so far select the target item(s) using jQuery 
// and then attach an event listener to that target directly. But what about when the target doesn't exist yet? 

$( '.container' ).on( 'click', 'article', function() { … });
//...this code tells jQuery to watch the .container element for clicks, 
//and then if there are any, check if the click event's target is an article element.


// The following code would set up an event listener for each 1,000 event listeners - 
//one for each list item...that's 1,000 event listeners!
$( '#rooms li' ).on( 'click', function() {
    ...
});