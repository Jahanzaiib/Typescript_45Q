"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "Large", message = "I love TypeScript") {
    console.log(`size of shirt ${size} and message is ${message}`);
}
;
make_shirt();
make_shirt("Meduim", "Code with Jahanzaib");
make_shirt("Small", "Code with Jahanzaib");
