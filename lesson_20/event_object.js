// The evt.target property can be used to access just the clicked on element! 
//Example:
$( 'article' ).on( 'click', function( evt ) {
    $( evt.target ).css( 'background', 'red' );
});


// Use case 1: Prevent a default action from occurring.
$( '#myAnchor' ).on( 'click', function( evt ) {
    evt.preventDefault();
    console.log( 'You clicked a link!' );
});
//Prevents the link from opening when the user clicks on it.


// Use case 2:
event.keyCode
// to learn what key was pressed - invaluable if you need to listen for a specific key


// Use case 3:
event.pageX & event.pageY
// to know where on the page the click occurred - helpful for analytics tracking


// Use case 4:
event.type
// to find what event happened - useful if listening to a target for multiple events