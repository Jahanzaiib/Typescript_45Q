"use strict";
// 3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName1 = "Jahanzaib khan";
// lowercase
console.log(personName1.toLowerCase());
//uppercase
console.log(personName1.toUpperCase());
//titlecase
let word = personName1.split(" ");
console.log(word);
let titlecaseName = "";
for (let i = 0; i < word.length; i++) {
    titlecaseName += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() + " ";
}
console.log(titlecaseName);
