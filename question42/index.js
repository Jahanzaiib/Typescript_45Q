"use strict";
// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicans = ["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"];
function show_magicans(magicansArray) {
    console.log("Magicans:");
    magicansArray.forEach(magicans => {
        console.log(magicans);
    });
}
function make_great(magicansArray) {
    return magicansArray.map(magicans => `Great ${magicans}`);
}
;
let greatMagicans = make_great(magicans);
show_magicans(greatMagicans);
