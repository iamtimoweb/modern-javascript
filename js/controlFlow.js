/*
 * forloops
 */
const names = ["shaun", "mario", "luigi"];

console.log("================Executing a forloop===================================");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log("================Executing a whileloop===================================");

/*
 * while loops
 */
let i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

console.log("================Executing a Do while===================================");

/*
 * do loops
 */
const marks = [70, 90, 56, 30, 26, 40];
let x = 0;
do {
    console.log(marks[x]);
    x++;
} while (x < marks.length);

// break and continue statements

const studAge = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(
    "===========================break and continue statements============================="
);
for (let i = 0; i < studAge.length; i++) {
    if (studAge[i] === 0) {
        continue;
    }
    console.log(studAge[i]);
    // use of the break statement
    if (studAge[i] === 50) {
        console.log("You have reached 50 years of studAge");
        break;
    }
}

/*
 * SWITCH STATEMENT
 */

let day = new Date().getDay();

switch (day) {
    case 0:
        console.log("Today is a sunday");
        break;
    case 1:
        console.log("Today is a Monday");
        break;
    case 2:
        console.log("Today is a Tuesday");
        break;
    case 3:
        console.log("Today is a Wednesday");
        break;
    case 4:
        console.log("Today is a Thursday");
        break;
    case 5:
        console.log("Today is a Friday");
        break;
    case 6:
        console.log("Today is a Saturday");
        break;
    default:
        console.log("Invalid value for the day");
        break;
}

/*
 * VARIABLE & BLOCK SCOOP
 */

let age = 30;

if (true) {
    // The value of age can be changed since it references the global scope variable age outside the if statement
    let age = 40;

    //creating a local variable scope that can only be accessed inside the block
    let fullNames = "kakande samuel";

    console.log(`The value of age inside the block is ${age} ${fullNames}`);

    if (true) {
        let age = 50;
        console.log("The value of age in the innermost block statement is", age);
    }
}
// Note: The fullName variable can't be accessed from outside the if block statement else it generates an error
console.log(`The value of age outside the block is ${age}`);
