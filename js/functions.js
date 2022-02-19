/* Arrow functions */

const pi = 3.14;
const area = (radius) => pi * radius ** 2;
console.log("The area of the circle is: ", area(4));

/* function declaration */
function greet(myname, time) {
    console.log(`Good ${time} ${myname}`);
}
greet((time = "night"), (myname = "Jame"));

/* function expression */

const timeFunc = function (time) {
    console.log("The time now is: ", time);
};

timeFunc(new Date().toLocaleTimeString());

/* callback function and foreach */
const names = ["James", "Thomas", "Joel", "Reagan"];
names.forEach((name) => console.log(name));
