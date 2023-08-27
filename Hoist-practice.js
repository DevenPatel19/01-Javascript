// GIVEN
// console.log(example);
// var example = "I'm the example!";
// // AFTER HOISTING BY THE INTERPRETER
// // var example;
// console.log(example); // logs undefined
// // example = "I'm the example!";

// console.log(example);
// let example = "I'm the example!";

// 1
console.log(hello);  // logs undefined
var hello = 'world'; // 

// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle); //logs magnet
}

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan); 
}
console.log(brendan); //logs super cool

// 4
var food = 'chicken';
console.log(food); //logs chicken
eat();
function eat(){
    food = 'half-chicken';
    console.log(food); //logs half-chicken
    var food = 'gone';
}

// 5
mean(); //TypeError not defined
console.log(food); 
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// 6
mean(); //TypeError function mean is not defined as a function
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// 7
dojo = "san jose";
console.log(dojo); // logs san jose
learn(); //
function learn() {
    dojo = "seattle"; 
    console.log(dojo); //logs seattle
    var dojo = "burbank";
    console.log(dojo); //logs burbank
}
console.log(dojo); // logs san jose



