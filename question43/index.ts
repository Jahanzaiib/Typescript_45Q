 // 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
 let magicans :string[]=["Jazi","Nomi","Thoms","Kalia","Hanif Gujar","Kaka Musali"];
function show_magicans(magicansArray:string[]){
    console.log("Magicans:")
    magicansArray.forEach(magicans =>{
        console.log(magicans)
    });
}
function make_great(magicansArray:string[]): string[]{
    return magicansArray.map(magicans => `Great ${magicans}`)
};
let greatMagicans =make_great(magicans);
show_magicans(greatMagicans);


