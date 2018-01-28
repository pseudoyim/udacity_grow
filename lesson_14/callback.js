// Function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// Function declaration helloCat, which takes a callback function as an argument.
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// Pass in catSays as a callback function.
helloCat(catSays);

