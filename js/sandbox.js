/*
 * Javascript Datatypes: Numbers, Strings, Booleans, Nulls, Undefined, Object, Symbols
 */

/**********************************
 * STRINGS
 **********************************/
let fullName = "kakinda james";
let email = "mgbtmth92@gmail.com";
console.log("The length of the string is " + fullName.length);

// capitalizing the string
console.log("string capitalized " + fullName.toUpperCase());

// lowercasing the string
console.log("string lowercased " + fullName.toLowerCase());

// getting the index of the @ symbol from the email
console.log("The index of @ in the email address " + email.indexOf("@"));

// getting the last occurence of the letter m
console.log("The last occurence of the letter m from the email " + email.lastIndexOf("m"));

// getting the substring of email
console.log("The substring from the email is ", email.substring(10, 15));

// checking whether string has a value
console.log("Does the fullname include the value james " + fullName.includes("james"));

// getting the character code of a string character
console.log("The character code of s in the string is: " + fullName.charCodeAt(8));

// normalizing a string
console.log("The string has been normalized: " + fullName.normalize());

/**********************************
 * ARRAYS
 **********************************/

let studNames = ["Mark", "James", "Ronald", "Peter", "Cristiano"];

console.log("=========================Arrays in javascript=====================================");
console.log("Student one " + studNames[0]);
console.log("Student two " + studNames[1]);

// The length of the array
console.log("The length of the students array is ", studNames.length);

// Array methods
console.log("student names array joined and separated with commas: ", studNames.join());

// getting the index of an array element
console.log("The index of cristiano is: ", studNames.indexOf("Cristiano"));

// add more values to the original array
studNames.push(["Timothy", "Reagan", "cyndy"]);
console.log("The new array is: " + studNames);

// adding more values to the beginning of the array
studNames.unshift(["David", "Anthony"]);
console.log("The new array is: " + studNames);

// Removes the last element or elements to be added from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log("The last element from the array removed is: ", studNames.pop());

// new elements after the pop() method on the studNames
console.log("The new array is now ", studNames);

