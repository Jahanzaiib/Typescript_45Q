"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicianName = ["Jazi", "Nomi", "Thoms"];
function show_magicians(magicansArray) {
    console.log("magicans:");
    magicansArray.forEach(magicianName => {
        console.log("Great  " + magicianName);
    });
}
show_magicians(magicianName);
