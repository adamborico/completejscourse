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

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);
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