// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


// equality and inequality:
let city1 : string ="Karachi";
let city2 : string ="Lahore";
console.log(city1!==city2);
console.log(city1==city2);

//Lower case test:
let name1 :String ="WANIA";
let name2 :String ="wania";
console.log(name1.toLowerCase() == name2);
console.log(name1.toLowerCase() !== name2);

//Numerical test:
let num1 :number =10;
let num2 :number =5;
console.log(num1 !== num2);
console.log(num1 == num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

// And OR :
let condition1 :boolean = true;
let condition2 :boolean = false;
console.log(condition1 || condition2);
console.log(condition1 && condition2);

//testing whether item is in array:
let array : number[] =[1,2,3,4,5,6];
console.log(array.includes(1));

//testing whether item is not in array:
let array1 : number[] =[1,2,3,4,5,6];
console.log(!array.includes(1));
