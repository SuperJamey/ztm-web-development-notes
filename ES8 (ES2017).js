// create file

// padStart() and padEnd()
'Turtle'.padStart(10);  // Result = "    Turtle" (includes the text)
'Turtle'.padEnd(10);  // Result = "Turtle    " (also includes text)

// add comma after last parameter, it makes adding more params easier.
// put parameters on different lines to make the code cleaner, and also
// it makes Github green and red changes easier to read.
const = fun (
    a,
    b,
    c,
    d,   
    e,
    ) => {
    console.log(a);
}

fun(1,2,3,4,) // output will be 1

// Object.values & Object.entries (Object.keys, the old way)
Object.values
Object.entries
Object.keys

let obj = {      // not an array, can't us map, filter, or reduce
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr Grinch',
};

Object.keys(obj).forEach((key, index) => {  // now can use obj like an array on objects
    console.log(key, obj[key])
});


// using object.values makes it a little easier and
// returns the value of each object
Object.values(obj).forEach(value => {
    console.log(value);
})
VM219:2 Santa  //result
VM219:2 Rudolf
VM219:2 Mr Grinch
undefined


// object.entries returns an array of key:value pairs
Object.entries(obj).forEach(value => {
    console.log(value);
}) 
VM223:2 (2) ['username0', 'Santa']  //result
VM223:2 (2) ['username1', 'Rudolf']
VM223:2 (2) ['username2', 'Mr Grinch']


// scenario - replace username0 etc. with a real username
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})
(3) ['Santa0', 'Rudolf1', 'Mr Grinch2']  //result


// Exercise ES8.js
// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(value => value.join(" ")).join(' ')
