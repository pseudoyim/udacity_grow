// Select color input
var color = $('#colorPicker').val();
console.log(color);

// alert('working');
// console.log('hello');

// Select size input
// var rows = Number($('#inputHeight').val());
// var cols = Number($('#inputWidth').val());
// var table = $('table');


function makeGrid(){
	$('table').children().remove();

	var rows = Number($('#inputHeight').val());
	var cols = Number($('#inputWidth').val());
	var table = $('table');

	for(var r = 0; r < rows; r++){
	    var tr = $('<tr></tr>');

	    for (var c = 0; c < cols; c++){
	        $('<td></td>').appendTo(tr); //fill in your cells with something meaningful here
			console.log(c)	    
	    tr.appendTo(table);
	    console.log(r)
	    }
	}
};



// When size is submitted by the user, call makeGrid().
$('#submitSize').click(makeGrid);

// When cell is clicked by the user, change to the color selected by the user.
// $('#pixelCanvas tr td').each(function() {
// 	alert('td clicked')
// 	$(this).css("background-color", color);
// });

$("tr td").click(function(e){     //function_td
  alert('ha!');
  $(this).css("background-color",color);
  e.stopPropagation();
});


// $('.childDiv').click(function() {
//   $(this).parent().find('.childDiv').css('background-color', '#ffffff');
//   $(this).css('background-color', '#ff0000');
// });