
// Select color input
var color = $('#colorPicker').val();

// Select size input
var height = Number($('#inputHeight').val());
var width = Number($('#inputWidth').val());
var table = $('#pixelCanvas')

var height, weight, table;


//WORKS!
// When size is submitted by the user, call makeGrid()
$('#submitSize').click(function(){
	$('#pixelCanvas').children().remove();
	var height = new Number($('#inputHeight').val());
	for (var i = 0; i < height; i++) {
		$('#pixelCanvas').append('<tr><td></td></tr>');
	}
});

