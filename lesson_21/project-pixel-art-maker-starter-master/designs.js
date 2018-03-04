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

	$('table').children().remove();
	// var height = new Number($('#inputHeight').val());

	alert('button clicked')

	// Select size input
	var rows = Number($('#inputHeight').val());
	var cols = Number($('#inputWidth').val());
	var table = $('table');

	for(var r = 0; r < rows; r++){
	    var tr = $('<tr></tr>');

	    for (var c = 0; c < cols; c++){
	        $('<td>some value</td>').appendTo(tr); //fill in your cells with something meaningful here
			console.log(c)	    
	    tr.appendTo(table);
	    console.log(r)
	    }
	}
});
