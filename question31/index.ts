 // 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let usernames:string[] = ["Jahanzaib","kamran","Nomi","Haris"];

if(usernames.length>0){
    console.log("List of Usernames:",usernames)
}
else
{
    console.log("we need to add someuser")
}
usernames =[];
if(usernames.length>0){
    console.log("List of Usernames:",usernames)
}
else
{
    console.log("we need to add someuser")
}