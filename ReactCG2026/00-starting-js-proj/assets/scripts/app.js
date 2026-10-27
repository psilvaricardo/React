/**
 * To avoid runtime errors, from the project directory, run:
 * npx serve .
 */

import * as util from "./util.js";

console.log("JS Refresher... starting point.");
console.log("JSR: apiKey: " + util.apiKey);

console.log("JSR: " + util.greet());
console.log("JSR: " + util.greetArrow());
console.table(util.user);

// classes
console.log(util.user1);

// arrays, values that are stored in certain order
// that can be accessed by the index
console.log(util.hobbies);
util.hobbies.push("Working");
console.log(util.hobbies);

const index = util.hobbies.findIndex((item) => item === "Sports");
console.log(index);

const editedHobbies = util.hobbies.map((item) => item + "!");
console.log(editedHobbies);
