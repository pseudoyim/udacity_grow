var x = 1;

while (x <= 100){
	if (x % 3 === 0 && x % 5 === 0){
		console.log("FizzBuzz (" + x + ")");
		x = x + 1;
	}
	else if (x % 3 === 0){
		console.log("Fizz (" + x + ")");
		x = x + 1;
	}
	else if (x % 5 === 0){
		console.log("Buzz (" + x + ")");
		x = x + 1;
	}
	else{
		console.log(x);
		x = x + 1;
	}
}



// for submission
var x = 1;

while (x <= 20){
	if (x % 3 === 0 && x % 5 === 0){
		console.log("JuliaJames");
	}
	else if (x % 3 === 0){
		console.log("Julia");
	}
	else if (x % 5 === 0){
		console.log("James");
	}
	else{
		console.log(x);
	}
	x = x + 1;
}