// continue from yesterday with control flow
// switch case

let day = new Date().getDay()

let literalDay = new Date().toString()

console.log(day)
console.log(literalDay)

// switch case statement syntax
switch (day) {
    case 0 :
        console.log('Sleep all Sunday...')
        break;
    case 1 :
        console.log('Write code it\'s Monday.')
        break;
    case 2 :
        console.log('Tacos for everyone! It\'s Tuesday!!!')
        break;
    case 3 :
        console.log('Keep testing code... It\'s Wednesday my dudes...')
        break;
    case 4 :
        console.log('Write a new feature for project, it\'s Thursday.')
        break;
    case 5 :
        console.log('Call Rebecca Black... It\'s Friday!')
        break;
    case 6 :
        console.log('Spend Saturday out in the sun.')
        break;
    default :
    console.log('We don\'t have a case a for that...')
}

// literal day example
switch (literalDay.split(" ")[0]) {
    case "Sun" :
        console.log('Sleep all Sunday...')
        break;
    case "Mon" :
        console.log('Write code it\'s Monday.')
        break;
    case "Tue" :
        console.log('Tacos for everyone! It\'s Tuesday!!!')
        break;
    case "Wed" :
        console.log('Keep testing code... It\'s Wednesday my dudes...')
        break;
    case "Thu" :
        console.log('Write a new feature for project, it\'s Thursday.')
        break;
    case "Fri" :
        console.log('Call Rebecca Black... It\'s Friday!')
        break;
    case "Sat" :
        console.log('Spend Saturday out in the sun.')
        break;
    default :
    console.log('We don\'t have a case a for that...')
}

// -- creation of objects in JavaScript -- //

// -- simple object in JS -- //

let person = {
    name : 'Timothy',
    age : 21,
    favColor : 'Purple'
}

// accessing info //

console.log(person['name']) // bracket notation
console.log(person.favColor) // dot notation

// complex JavaScript object //

let person2 = {
    name: "Trini",
    age: 27,
    progLanguages: ["JavaScript", "Python", "C++", "Java"],
    favColor: "Yellow",
    team: [
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball: ['Chicago Bulls', 'Chicago Sky'],
            soccer: ['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            football: ['New Orleans Saints', 'San Francisco 49ers', 'Green Bay Packers'],
            baseball: ['SF Giants', 'Seattle Mariners'],
            basketball: ['Lakers', 'Cavs', 'Sac Kings', 'Trail Blazers', 'Wolves', 'Harlem Globetrotters'],
            soccer: ['Columbus Crew', 'Timbers', 'The Red Team', 'Sounders', 'Manchester United', 'Bruins', 'Boston Bolts'],
            hockey: ['La Kings', 'Red Wings', 'Seattle Kraken', 'Dallas Stars', 'Bruins', 'Bluejackets']
        }
    ]
}

console.log(person2.progLanguages[2])
console.log(person2.team[0].hockey)
console.log(person2.team[1].soccer[5])
console.log(person2)

// -- JavaScript object prototype methods -- object literal -- //
console.log(Object.keys(person2))
console.log(Object.values(person2))

// DONT DO THIS WHEN LOOPING
for (let i = 0; i < person2.length; i++){
    console.log(person2[i])
}

// correct way to loop through objects
for (let i = 0; i < Object.keys(person2).length; i++){
    if (Array.isArray(Object.values(person2)[i])){
        Object.values(person2)[i].forEach(element => console.log(element))
    } else {
        console.log(Object.values(person2)[i])
    }
}

// create an object prototype -- with 
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    // a method belonging to the prototype
    this.printInfo = function(color, wheels = 4){
        console.log(`This is a ${this.year}, ${this.make}, ${this.model}
        and it has ${wheels} wheels and the color is ${color}`)
        return "Returned Value"
    }
}

// create instance of prototype
let myCar = new Car("Volkswagon", "Jetta", "2013")

// call prototype method
myCar.printInfo("Black Black")

// JS classes -- ES6 //
class Human{
    constructor(name, age, gender){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }
    printInfo(){
        return `Name: ${this.name} \nAge: ${this.age} \nGender: ${this.gender}`
    }
}

let bobby = new Human('Bobby', 33, 'Female')
console.log(bobby.printInfo())

// inheritance using JavaScript classes
class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender)
        this.walking = walking
    }

    isBabyWalking(){
        return this.walking ? `${this.name} is walking` : `${this.name} is not walking yet`
    }
}

// create an instance of Baby class //
let laya = new Baby('Laya', 1, 'Female', true)
console.log(laya.printInfo())
console.log(laya.isBabyWalking())

// Async JavaScript Section //

// -- JavaScript Callbacks -- //

/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/

// basic exmaples of callbacks

function first() {
    console.log(1)
}

function second() {
    console.log(2)
}

// first()
// second()

// but what happens if we add a delay to the first function ???
function firstDelay() {
// simulate delay
setTimeout( () => console.log("delayed for 5 seconds"), "5000")
}

function secondDelay() {
    console.log("Second function was not delayed")
}

// firstDelay()
// secondDelay()

// callbackfunction syntax //
function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`)
    callback()
}

// doHomework("JavaScript", () => console.log("Done with Homework."))

/*
    Thought Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell

    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷🏾‍♂️
                })
            })
        })
    })
*/


// we solve this with Promises

// ==== creating a JS Promise ==== //
const isEvenNumber = num => {
    return new Promise( (yessir, nosir) =>{
        num % 2 == 0 ? yessir(true) : nosir(num)
    })
}

// using JS Promise
isEvenNumber(99)

// happy resolver path
.then((result )=> {
    console.log(`${result} this is an even number`)
})

.catch((error) => {
    console.log(`${error} this is an odd number`)
})

// another promise example
function increaseSalary(base, increase){
    const newSalary = base + increase
    console.log(`New Salary: ${newSalary}`)
    return newSalary
}

// add salary slowly
function slowSalary(n1, n2) {
    return new Promise( resolve => {
        setTimeout(()=> resolve(n1+n2), 3000)
    })
}

function increaseSlowSalary(base, increase){
    const newSalary = slowSalary(base, increase)
    console.log(`New Salary: ${newSalary}`)
    return newSalary 
}

async function increaseSlowSalary(base, increase){
    const newSalary = await slowSalary(base, increase)
    console.log(`New Salary: ${newSalary}`)
    return newSalary 
}