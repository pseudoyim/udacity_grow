//This was a godsend: https://stackoverflow.com/questions/19641188/jquery-click-function-not-working-on-td-tag
// And so was this: http://jsfiddle.net/NhT92/

var color

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

// When dims are submitted by the user, call makeGrid().
$('#submitSize').click(makeGrid);


// When a cell is clicked, change color of cell accordingly.
$('#pixelCanvas').on('click', 'td', function() {
    var cell = $(this);
    var state = cell.data('state') || 'first';
    color = $('#colorPicker').val();

    switch (state) {
        case 'first':
            cell.css('background-color', color);
            cell.data('state', 'second');
            break;
        case 'second':
            cell.css('background-color', 'white')
            cell.data('state', 'first');
            break;
        default:
            break;
    }
});
