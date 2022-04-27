// Code Wars Problem

// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.
// Returning Problem

function twoOldestAges(ages){

    let oldest = 0;
    let secondOldest = 0;
      
    for (let i = 0; i < ages.length; i++) { 
        if (ages[i] >= oldest) {
            secondOldest = oldest;
            oldest = ages[i];
        } else if (ages[i] > secondOldest && ages[i] < oldest) {
            secondOldest = ages[i];
        } 
    }
    return [secondOldest, oldest];
}

// Code Wars Problem #2 New Problem
/**
 Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 */

function digitize(n) {
    let arr = [];
    let arrOfNumbers = n.toString().split('');
    let arrOfNumbersLength = arrOfNumbers.length;
    
    for (let i = 0; i < arrOfNumbersLength; i++) {
      let popped = arrOfNumbers.pop();
      arr.push(+popped);
      }
      return arr;
  }

//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayDishes(obj){

    for (let i = 0; i < Object.keys(obj).length; i++){
        if (Array.isArray(Object.values(obj)[i])){
            Object.values(obj)[i].forEach(element => console.log(element))
        } else {
            console.log(Object.values(obj)[i])
        }
    }
}

console.log(displayDishes(person3))
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;

// Use an arrow to create the printInfo method
    this.printInfo = (job) => {
        console.log(`This is ${this.name} and they are ${this.age}, and a ${job}`)
        return "Returned Value"
    }

    this.addAge = (addAges) => {
        return this.age + addAges
    }
}

let personOne = new Person("Dennis", 29)
personOne.printInfo("Software Engineer")

let personTwo = new Person("Joe", 28)
personTwo.printInfo("UX Designer")
console.log(personTwo.addAge(3))

// Create another arrow function for the addAge method that takes a single parameter

// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function isStringLength(string) {
    return new Promise( (yes, no) =>{
        string.length > 10 ? console.log("Big Word") : console.log("Small Number")
    })
}

isStringLength("Calculation")
isStringLength("Hello")
