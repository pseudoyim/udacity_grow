
// Select color input
var color = $('#colorPicker').val();

// Select size input
var height = new Number($('#inputHeight').val());
var width = new Number($('#inputWidth').val());
var table = $('#pixelCanvas')

// function makeGrid() {

// 	for (var i = 0; i < height; i++) {
// 		table.
// 	}
	
// };

// When size is submitted by the user, call makeGrid()
$('#submitSize').on('click', function(){
	console.log(color, height, width, table.html());
});

