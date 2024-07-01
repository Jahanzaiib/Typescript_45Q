"use strict";
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let favouritePlaces = ["Pakistan", "USA", "Canada", "Paris", "China"];
console.log("Original Order:", favouritePlaces);
favouritePlaces.sort();
console.log("alphabetical order", favouritePlaces);
console.log("Order after Sorting:", favouritePlaces);
console.log("Alphabetical Reversed Order:", [...favouritePlaces].sort().reverse());
console.log("Order After Alphabetical Reversed:", favouritePlaces);
favouritePlaces.reverse();
console.log("Reversed Order:", favouritePlaces);
favouritePlaces.reverse();
console.log("back to Original Order:", favouritePlaces);
favouritePlaces.sort();
console.log("Sort Order:", favouritePlaces);
favouritePlaces.sort().reverse();
console.log("Sort Reversed Order:", favouritePlaces);
