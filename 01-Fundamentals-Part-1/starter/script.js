/*
let js = 'amazing';
      
console.log(40+8+23-10);

const isIsland = false;
const language = 'spanish';

const country = 'Spain';
const continent = 'Europe';
let population = 46;

const description = country + ' ' + 'is in' + ' ' + continent + ',' 
+ ' ' + 'and its' + ' ' + population + ' ' + 'million people speak' + ' ' + language;


console.log(description);

console.log(country);
console.log(continent);

console.log(population);
console.log(population/2);
population++
console.log(population);
console.log(population > 6);
console.log(population < 33);

console.log(typeof isIsland) // boolean
console.log(typeof population) //number
console.log(typeof country) // string
console.log(typeof language) //undefined
*/

/////// Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

//Creamos las variables con los Datos
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

// Asignamos a una variable el calculo del BMI
const BMIMark = markMass / markHeight**2; 
const BMIJohn = johnMass / johnHeight**2;

// Una variable booleana donde comparamos si el BMI es mayor que.
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);

/*
The Complete JavaScript Course 6
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`)
}

const language = 'spanish';

const country = 'Spain';
const continent = 'Europe';
let population = 130;
const isIsland = false;

const description =`${country} is in ${continent}
and its ${population} million people speak ${language}`;

console.log(description);

if(population > 33){
    console.log(`${country} population is above average`);
}else{
    console.log(`${country} population is ${33 - population} million below average`);
}
    
//Type Conversion and Coercion 
console.log('9' - '5');//4
console.log('19' - '13' + '17')//617
console.log('19' - '13' + 17)//23
console.log('123' < 57)//False
console.log(5 + 6 + '4' + 9 - 4 -2)//1143

// const numNeighbours = Number(
//     prompt('How many neighbour countries does your country have?')
// );

// if(numNeighbours === 1){
//     console.log ('Only 1 border!');
// } else if(numNeighbours > 1){
//     console.log('More than 1 border');
// }else {
//     console.log('No borders')
// }

if (language === 'spanish' && population > 50 && !isIsland)
 {
 console.log(`You should live in ${country} :)`);
 } else {
 console.log(`${country} does not meet your criteria :(`);
 }


// Coding Challenge #3
/* 
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 
*/

/* 
const averageDolphins = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 100 + 110) / 3;

console.log(averageDolphins);

if(averageDolphins > averageKoalas) {
    console.log(`Dolphins win ${averageDolphins}`)
} else if(averageDolphins < averageKoalas) {
    console.log(`Koalas win ${averageKoalas} `)
} else if(averageDolphins === averageKoalas){
    console.log(`it's a Draw ${averageDolphins}-${averageKoalas}`)
} 
*/

const scoreDolphins = (97 + 112 + 10) / 3;
const scoreKoalas = (109 + 95 + 10) / 3;

console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log(`Dolphins wins 🏆`)
} else if( scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log(`Koalas wins 🏆`)
} else if(scoreDolphins === scoreKoalas && scoreKoalas >= 100 && scoreDolphins>= 100){
    console.log(`it's a Draw`)
}else{
    console.log('nobody wins');
}