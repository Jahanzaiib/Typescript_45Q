"use strict";
// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guestList = ["Umer ", "Haris ", "Mirza Irfan Baig", "JAhanzaib"];
let unableToAttend = guestList.pop();
console.log(`Unfortunetly ${unableToAttend}, can't make it to the dinner.`);
let newGuest = "Ali Akbar";
guestList.push(newGuest);
for (var i = 0; i < guestList.length; i++) {
    console.log("My Frind " + guestList[i] + "I invite you for dinner");
}
