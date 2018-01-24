//Attempt 1: This gets the correct output, but it's not actually multiplying with all the numbers below it.
var solution = 12;

for (var x = solution; x > 1; x--){
	solution *= (x-1);
}
console.log(solution)


//Attempt 2: Just swap the role that x plays (to be the smaller number to begin with); then the loop will go all the way down to 1.
var solution = 12;

for (var x = solution - 1; x > 0; x--){
	solution *= x;
}
console.log(solution)