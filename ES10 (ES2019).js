// Start of ES10 12.29.31

// flat() method
/* The flat() method is an inbuilt array method that flattens 
a given array into a newly created one-dimensional array. It 
concatenates all the elements of the given multidimensional array, 
and flats upto the specified depth. We can specify the depth limit 
to where we need to flatten the array. By default, the depth limit is 1 */

const array = [1,2,3,4,5]
array.flat()  // output = [1,2,3,4,5] - this array is already flat.

const array2 = [1,[2,3],[4,5]]
array2.flat()  // output = [1,2,3,4,5] - no more nested arrays, array is now flat.

const array3 = [1,2[3,4,[5]]]
array3.flat()  // output = [1,2,3,4, Array(1)] - nested 5 is flattened by 1 level.
// .flat() (default) is same as .flat(1)

const array4 = [1,2[3,4,[5]]]
array4.flat(2)  // output = [1,2,3,4,5] - the parameter tells the depth to go
// in this case, 2 levels

const array5 = [[ 1,2 ], 3, 4, [ 5,6 ], [[[[7]]], 8], [ 9,0 ]]
array5.flat(4)  // output = [1,2,3,4,5,6,7,8,9,0] - in this example there are
// a total of 4 'layers'. Any number above 4 will work here i.e. .flat(50)

const entries = ['teresa', 'ashley',,,,,,,,,'caprice']
entries.flat()  // output = ['teresa', 'ashley', 'caprice'] - flat also cleans
// up and removes blank entries


// flatmap() method
// The flatMap() method returns a new array formed by applying a given callback 
// function to each element of the array, and then flattening the result by one 
// level. It is identical to a map() followed by a flat() of depth 1 ( arr. map(... args)

const array6 = array5.flatMap(arr => arr + '#')
// output = ['1,2#', '3#', '4#', '5,6#', '7,8#', '9,0#']
// flatmap() allows us to use the basic map() function, and then
// flatten it to a depth of 1


// trimStart() - removes any spaces from the beginning of variable
// trimEnd() - removes any spaces from the end of variable
const userEmail = ',,,,,,,,,,Jinx@jmail.com';
const userEmail1 = 'jameyDanger@fluid.com        '
console.log(userEmail.trimStart())  // output = 'Jinx@jmail.com'
console.log(userEmail1.trimEnd())  // output = 'jameyDanger@fluid.com'


//  fromEntries - transforms a list of key: value pairs to an object
userProfiles = [['theCommander', 54], ['jezebel', 33], ['teresa', 40]]
Object.fromEntries(userProfiles)  // ouput - {theCommander: 54, jezebel: 33, teresa: 40}
jezebel: 33
teresa: 40
theCommander: 54
[[Prototype]]; Object  // had to use semi-colon here to avoid the squiggly line! Lol

const obj1 = Object.fromEntries(userProfiles)
Object.entries(obj1)  // output - [Array(2), Array(2), Array(2)]
 //                                0: (2) ['theCommander', 54]
 //                                1: (2) ['jezebel', 33]
 //                                2: (2) ['teresa', 40]
 // does the opposite of fromEntries, which came from Object.entries(obj1)


 // try{} and catch{} - they work together
 // try {
 //   evaluate an equation etc...
 // } catch {
 // if an error occured, run this
 // }
 