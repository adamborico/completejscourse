'use strict'

function describeCountry(country, population, capitalCity){

    const textCountry = `${country} has ${population} million people and its 
    capital city is ${capitalCity}`;

    return textCountry;
}

const firstCountry = describeCountry('Spain', 46, 'Madrid');
console.log(firstCountry);
const secondCountry = describeCountry('Finland', 6, 'Helsinki');
console.log(secondCountry);
const thirdCountry = describeCountry('Portugal', 4, 'Lisboa ');
console.log(thirdCountry);

//FUNCTION DECLARATION
function percentageOfWorld1 (population) {
    return (population/7900) * 100;
}

/* function describePopulation(country, population){
    const percentage = percentageOfWorld1(population);

    const description = `${country} has ${population} million people, which is about 
    ${percentage} of the world`;

    console.log(description);
}

describePopulation('China', 1441);
describePopulation('Spain', 46); */

const describePopulation = (country, population) => {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about 
    ${percentage} of the world`;

    return description;
}

console.log(describePopulation('China', 14141));

//FUNCTION EXPRESSIONS
const percentageOfWorld2 = function (population) {
    return (population/7900) * 100;
}

const percentageOfSpain = percentageOfWorld1(46);
const percentageOfFinland = percentageOfWorld1(60);
const percentageOfChina = percentageOfWorld1(1441);

console.log(percentageOfSpain, percentageOfFinland, percentageOfChina);

//ARROW FUNCTION
const percentageOfWorld3 = population => (population/7900) * 100;

const percPortugal = percentageOfWorld3(10);
const percChina = percentageOfWorld3(1441);
const percUSA = percentageOfWorld3(332);
console.log(percPortugal, percChina, percUSA);

///Coding Challenge #1
/* 
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

/* 3times, 3results -> la suma de los 3 resultados divido 3 = average
win si el average es el doble del otro equipo, si no, ninguno gana */

const calcAverage = (a,b,c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner (avDolphins, avKoalas){
   if(avDolphins >= 2 * avKoalas){
     console.log('Dolphins wins');
   } else if (avKoalas >= 2 * avDolphins) {
    console.log('Koala wins');
   }else {
    console.log('nobody wins');
   }
}

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);


const populations = [46, 60, 101, 83];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
]

console.log(percentages);

//Coding Challenge #2
/* 
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
*/

//const bill = 100;

function calcTip (bill){
    if(bill >= 50 && bill <= 300){
        return bill * 0.15;
    }else{
        return bill * 0.20;
    }
}

/* 
const calcTip = function(bill){
    return bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.20;
} 
*/

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
]

console.log(tips);

const total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]

console.log(total);

//CHALLENGE
// Jonas has 3 friends, and his best friend is Michael

const Jonas = {
    firstName : 'Jonas',
    lastName : 'Doe',
    friends : ['Michael', 'Benito', 'Pepe']
}
console.log(`${Jonas.firstName} has ${Jonas.friends.length} friends, and his best friend is ${Jonas.friends[0]}`);

const neighbours = [
    'Denmark',
    'Poland',
    'Austria',
    'Switzerland',
    'France'
]
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop('Utopia');
console.log(neighbours);

if(!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf('France')] = 'Republic of Sweden';
console.log(neighbours);

const myCountry = {
    country: 'Spain',
    capital: 'Madrid',
    language: 'Spanish',
    population: 46,
    neighbours: [
        'Portugal',
        'Morocco',
        'Gibraltar',
        'France',
        'Andorra'
    ],
    describe: function(){
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, 
        ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
    },
    checkIsland: function(){
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
    }
}

console.log(myCountry);
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, 
${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

myCountry.population += 2
console.log(myCountry.population);

myCountry['population'] -= 2
console.log(myCountry.population);
myCountry.describe();
console.log(myCountry.checkIsland());

//Coding Challenge #3
/* 
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall. 
*/

const Mark = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass/this.height ** 2;
        return this.bmi;
    }
}

console.log(Mark);
Mark.calcBMI();
console.log(Mark.bmi);

const John = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass/this.height ** 2;
        return this.bmi;
    }
}

console.log(John);

John.calcBMI();
console.log(John.bmi);

console.log(`${Mark.name}'s BMI (${Mark.bmi}) is higher than ${John.name}'s (${John.bmi})!`)

// FOR LOOP 
/* 
el loop for tiene tres partes. Primero declaramos la variable, después
la condición y por último el incremento(expresión final)
*/

//Hay que declarar la varible let voter = ...
//Foor Loop se ejecuta mientras la condicion sea TRUE 'voter<=50'
for(let voters = 1 ; voters <= 50; voters++){
    console.log(`'Voter number ${voters} is currently voting`)
}


/////////////////////////
/* Ejercicios Extra */
//////////////////////// 
/* 
function EqualNumber (a, b) {
    const isEqualto = a === 100 || b === 100
    return isEqualto;
}
function plusNumber (a, b) {
    const isPlusto = a + b === 100
    return isPlusto;
}
console.log(EqualNumber(100,0))
console.log(plusNumber(50,50)) 
*/
const EqualNumber = (a, b) => a === 100 || b === 100 || a + b === 100;
console.log(EqualNumber(100, 50));

/* 
function displayMessage(){
    console.log('Hello World')
}
displayMessage();
*/
const welcomeMessage = displayMessage => console.log(displayMessage);
welcomeMessage('Hello World'); 

/* 
function findSquare(a){
    return a*a;
}
console.log(findSquare(2)); 
*/
const findSquare = a => a * a;
console.log(findSquare(100));
console.log(findSquare(4));

/* 
function calFahrenheit(cel){
    return (cel * 9/5) + 32;

}
console.log(calFahrenheit(30)); 
*/
const calFahrenheit = cel => (cel * 9/5) + 32;
console.log(calFahrenheit(30));

/* function rectangleAere(a, b){
    return a * b
}
console.log(rectangleAere(4,4)) 
*/

const rectangleAerea = (a, b) => a * b;
console.log(rectangleAerea(20, 20));

const getExtension = (filename) => filename.split(".").pop();

console.log((getExtension('script.js')));
console.log((getExtension('readme.txt')));
console.log((getExtension('index.html')));

/* const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log((getFileExtension('style.scss'))); */