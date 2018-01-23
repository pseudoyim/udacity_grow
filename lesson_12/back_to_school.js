/*
 * Programming Quiz: Back to School (3-9)
 */

// change the value of `education` to test your code
var education = "no high school diploma";
var phrase1 = "In 2015, a person with " 
var phrase2 = " earned an average of $"
var phrase3 = "/year."
// set the value of this based on a person's education
var salary;

// your code goes here
switch(education){
	case "no high school diploma":
		salary = 25636
		console.log(phrase1 + education + phrase2 + salary.toLocaleString("en-US") + phrase3)
		break;
	case "a high school diploma":
		salary = 35256
		console.log(phrase1 + education + phrase2 + salary.toLocaleString("en-US") + phrase3)
		break;
	case "an Associate's degree":
		salary = 41496
		console.log(phrase1 + education + phrase2 + salary.toLocaleString("en-US") + phrase3)
		break;
	case "a Bachelor's degree":
		salary = 59124
		console.log(phrase1 + education + phrase2 + salary.toLocaleString("en-US") + phrase3)
		break;
	case "a Master's degree":
		salary = 69732
		console.log(phrase1 + education + phrase2 + salary.toLocaleString("en-US") + phrase3)
		break;
	case "a Professional degree":
		salary = 89960
		console.log(phrase1 + education + phrase2 + salary.toLocaleString("en-US") + phrase3)
		break;
	case "a Doctoral degree":
		salary = 84396
		console.log(phrase1 + education + phrase2 + salary.toLocaleString("en-US") + phrase3)
		break;
}
