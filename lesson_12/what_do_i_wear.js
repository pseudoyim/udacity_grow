/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// your code goes here
if 		((18 <= shirtWidth && shirtWidth < 20) && (28 <= shirtLength && shirtLength < 29) && (8.13 <= shirtSleeve && shirtSleeve < 8.38)){
	console.log("S");
}
else if ((20 <= shirtWidth && shirtWidth < 22) && (29 <= shirtLength && shirtLength < 30) && (8.38 <= shirtSleeve && shirtSleeve < 8.63)){
	console.log("M");
}
else if ((22 <= shirtWidth && shirtWidth < 24) && (30 <= shirtLength && shirtLength < 31) && (8.63 <= shirtSleeve && shirtSleeve < 8.88)){
	console.log("L");
}
else if ((24 <= shirtWidth && shirtWidth < 26) && (31 <= shirtLength && shirtLength < 33) && (8.88 <= shirtSleeve && shirtSleeve < 9.63)){
	console.log("XL");
}
else if ((26 <= shirtWidth && shirtWidth < 28) && (33 <= shirtLength && shirtLength < 34) && (9.63 <= shirtSleeve && shirtSleeve < 10.13)){
	console.log("2XL");
}
else if ((28 <= shirtWidth) && (34 <= shirtLength) && (10.13 <= shirtSleeve)){
	console.log("3XL");
}
else{
	console.log("N/A");
}