/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code

// USING NORMAL IF-ELSE STATEMENTS
var eatsPlants = false;
var eatsAnimals = true;

var category;

if (eatsPlants === true && eatsAnimals === true){
	category = "omnivore"
}
else if (eatsPlants === true && eatsAnimals === false){
	category = "herbivore"
}
else if (eatsPlants === false && eatsAnimals === true){
	category = "carnivore"
}
else {
	category = undefined
}	

console.log(category);



//USING TERNARY OPERATORS IN SERIES
var eatsPlants = false;
var eatsAnimals = true;

var category = (eatsPlants === true && eatsAnimals === true) ? "omnivore" : (eatsPlants === true && eatsAnimals === false) ? "herbivore" : (eatsPlants === false && eatsAnimals === true) ? "carnivore" : undefined

console.log(category);

