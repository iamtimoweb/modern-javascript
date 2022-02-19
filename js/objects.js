// object literals
let user = {
    name: "crystal",
    age: 30,
    email: "crystall@thenetninja.co.uk",
    location: "Berlin",
    blogs: [
        { title: "why mac and cheese rules", likes: 30 },
        { title: "10 things to make with mamite", likes: 50 },
    ],

    // methods
    login() {
        console.log(this.name, " is logged in");
    },
    printDetails: function () {
        console.log(`My name is ${this.name} and i live in ${this.location}`);
    },
    printBlogs() {
        console.log("==========", this.name, " has written the following blogs ==========");
        for (let i = 0; i < this.blogs.length; i++) {
            console.log(this.blogs[i].title + " - " + this.blogs[i].likes + " likes");
        }
    },
};

console.log(user);

// Accessing  object properties

// 1) Using the dot notation
console.log("My name is ", user.name);

// using the key property
console.log("I live in ", user["location"]);

/*
 * updating the object properties
 */
user.name = "Chen Long";
user.location = "China";

// 1) Using the dot notation
console.log("My name now is ", user.name);

// using the key property
console.log("I now live in ", user["location"]);

/*****************************
 * Creating the method for the object
 *****************************/
user.login();
user.printDetails();
user.printBlogs();

/*****************************
 * Math Object
 *****************************/

console.log("Math Object= ", Math);
console.log("Random Number btn 1 and 0= ", Math.random());
// getting a random number between 1 and 100
console.log("Random number between 1 and 100= ", Math.round(Math.random() * 1000000));
