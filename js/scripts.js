// Gallons to liters
var gallons = parseInt(prompt("Enter number of gallons:"));

var litersConvert = function(gallons){
  return gallons * 3.79;
};

var litersFinal = litersConvert(gallons);
alert(litersFinal + " Liters");

// Quarts to Liters
var quarts = parseInt(prompt("Enter number of quarts:"));

var litersConvert = function(quarts){
  return quarts * 0.95;
};

var litersFinal = litersConvert(quarts);
alert(litersFinal + " Liters");

// Cups to Liters
var cups = parseInt(prompt("Enter number of cups:"));

var litersConvert = function(cups){
  return cups * 0.24;
};

var litersFinal = litersConvert(cups);
alert(litersFinal + " Liters");

// lbs to kg
var lbs = parseInt(prompt("Enter number of lbs:"));

var kgConvert = function(lbs){
  return lbs * 0.45;
};

var kgFinal = kgConvert(lbs);
alert(kgFinal + " kg");

// oz to grams
var ounces = parseInt(prompt("Enter number of ounces:"));

var gramsConvert = function(ounces){
  return ounces * 28.35;
};

var gramsFinal = gramsConvert(ounces);
alert(gramsFinal + " grams");

// fl. oz to mL
var flOunces = parseInt(prompt("Enter number of fl oz:"));

var mlConvert = function(flOunces){
  return flOunces * 29.57;
};

var mlFinal = mlConvert(flOunces);
alert(mlFinal + " ml");
