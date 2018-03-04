// Select color input
// var color = $('#colorPicker').val();

// alert('working');
// console.log('hello');

// var height, weight, table;
// Select size input
var rows = Number($('#inputHeight').val());
var cols = Number($('#inputWidth').val());
var table = $('table');

// When size is submitted by the user, call makeGrid()
$('#submitSize').click(function(){

	// $('#pixelCanvas').children().remove();
	// var height = new Number($('#inputHeight').val());

	alert('button clicked')

	// Select size input
	var rows = Number($('#inputHeight').val());
	var cols = Number($('#inputWidth').val());
	var table = $('table');

	for(var r = 0; r < rows; r++){
	    var tr = $('tr');

	    for (var c = 0; c < cols; c++){
	        $('<td>some value</td>').appendTo(tr); //fill in your cells with something meaningful here
			console.log(c)	    
	    tr.appendTo(table);
	    console.log(r)
	    }
	}
});

// 	table.appendTo('body'); //Add your resulting table to the DOM, I'm using the body tag for example
// };

// 	for (var i = 0; i < height; i++) {
// 		// $('#pixelCanvas').append('<tr><td></td></tr>');  //this works by itself
	
// 		$('#pixelCanvas').append('<tr></tr>');

// 		for (var i = 0; i < width; i++) {
// 			// alert('boom!');
// 			$('table tr').append('<td></td>');

// 			// $('tr').append('<td></td>');
// 		//insert however many <td>s here.
// 		}
// 	}
// });



// from stackoverflow

// var rows = 5; //here's your number of rows and columns
// var cols = 5;
// var table = $('<table><tbody>');
// for(var r = 0; r < rows; r++)
// {
//     var tr = $('<tr>');
//     for (var c = 0; c < cols; c++)
//         $('<td>some value</td>').appendTo(tr); //fill in your cells with something meaningful here
//     tr.appendTo(table);
// }

// table.appendTo('body'); //Add your resulting table to the DOM, I'm using the body tag for example