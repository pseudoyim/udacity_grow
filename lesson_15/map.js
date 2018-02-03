//KEY FEATURE: Returns a NEW array, different from the one you started with.
//You no longer need to iterate through indices. map() does this for you.

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// improvedDonuts is a new array, whose contents are the result of 'donuts' but having undergone manipulation.
var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});



//yours
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut){
	donut += " hole";
	donut = donut.toUpperCase();
	return donut;	//each 'donut' element is dumped into the new array, 'improvedDonuts'.
});

improvedDonuts