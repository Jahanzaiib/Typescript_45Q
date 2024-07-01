// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// Shrinking Guest List: You just found out that your 


let guestList:string[] = ["Umer ","Haris ","JAhanzaib"];

for (var i = 0; i < guestList.length; i++) {
    console.log("My Frind "+guestList[i]+ "I found a bigger dinner table.");
}

let atTheBigning = guestList.unshift("Kamran");
console.log(guestList);

let GuestAtMiddle : string= "Zaghum";
let middleIndex : number = Math.floor(guestList.length/2);
console.log(middleIndex);
guestList.splice(middleIndex, 0, GuestAtMiddle);
console.log(guestList);

