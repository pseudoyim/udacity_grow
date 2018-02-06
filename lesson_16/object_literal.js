var sister = {
  name: "Sarah", 
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true
};

/*
The "key" (representing a property or method name) and its "value" are separated from each other by a colon
The key: value pairs are separated from each other by commas
The entire object is wrapped inside curly braces { }.
*/

// two equivalent ways to use the key to return its value
sister["parents"] // returns [ "alice", "andy" ] -- "BRACKET" notation (NOTE: Needs quotes around property name.)
sister.parents // also returns ["alice", "andy"] -- "DOT" notation


//METHODS

var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};

sister.paintPicture();