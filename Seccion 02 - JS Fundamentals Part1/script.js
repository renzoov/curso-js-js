/*let js = 'amazing'
console.log(40 + 8 + 23 - 10)

console.log('Jonas')
console.log(23)

let firstName = 'Matilda'
console.log(firstName)
console.log(firstName)
console.log(firstName)

let jonas_matilda = 'JM'
let $function = 27

let person = 'jonas'
let PI = 3.1415

let myFirstJob = 'Coder'
let myCurrentJob = 'Teacher'

let job1 = 'programmer'
let job2 = 'teacher'

console.log(myFirstJob)

console.log("-------------------------------")

let javascriptIsFun = true
console.log(javascriptIsFun)

console.log(typeof true)
console.log(typeof javascriptIsFun)
console.log(typeof 23)
console.log(typeof 'Jonas')

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun)

let year
console.log(year)
console.log(typeof year)

year = 1991
console.log(year)
console.log(typeof year)

console.log(typeof null)

console.log("-------------------------------")

let age = 30
age = 31

const birthYear = 1991
// birthYear = 1990
// const job

var job = 'programmer'
job = 'teacher'

lastName = 'Schmedtmann'
console.log(lastName)

console.log("-------------------------------")

// Math Operators
const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018
console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

const firstName = 'Jonas'
const lastName = 'Schmedtmann'
console.log(firstName + ' ' + lastName)

// Assignment Operators
let x = 10 + 5
x += 10
x *= 4
x++
x--
console.log(x)

// Comparison Operators
console.log(ageJonas > ageSarah)
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18
console.log(now - 1991 > now - 2018)

console.log("-------------------------------")

// Operator Precedence
const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018

console.log(now - 1991 > now - 2018)

let x, y
x = y = 25 - 10 - 5 // x = y = 10, x = 10
console.log(x, y)

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge)

console.log("-------------------------------")

// Coding Challenge #1
/*Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height *
  height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
- Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
- Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.*/
/*const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95
const BMIMark = massMark / heightMark ** 2
const BMIJohn = massJohn / heightJohn ** 2
const markHigherBMI = BMIMark > BMIJohn
console.log(BMIMark, BMIJohn, markHigherBMI)

console.log("-------------------------------")

// Strings and Template Literals
const firstName = 'Jonas'
const job = 'teacher'
const birthYear = 1991
const year = 2037

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(jonasNew)

console.log(`Just a regular string...`)
console.log('String with \n\nmultiple\nlines')
console.log(`String with
multiple
lines`)

console.log("-------------------------------")

// Taking Decisions: if / else Statements
const age = 15
if (age >= 18) {
  console.log('Sarah can start driving license 🚗')
} else {
  const yearsLeft = 18 - age
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2012
let century
if (birthYear <= 2000) {
  century = 20
} else {
  century = 21
}
console.log(century)

console.log("-------------------------------")

// Coding Challenge #2
const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95

const BMIMark = massMark / heightMark ** 2
const BMIJohn = massJohn / (heightJohn * heightJohn)
console.log(BMIMark, BMIJohn)

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}

console.log("-------------------------------")

// Type Conversion and Coercion

//type conversion
const inputYear = '1991'
console.log(Number(inputYear), inputYear)
console.log(Number(inputYear) + 18)
console.log(Number('Jonas'))
console.log(typeof NaN)
console.log(String(23), 23)

//type coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10' - 3)
console.log('23' + '10' + 3)
console.log('23' * '2')
console.log('23' / '2')

let n = '1' + 1 // '11'
n = n - 1
console.log(n)


console.log("-------------------------------")

// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 100
if (money) {
  console.log("Don't spend it all ;)")
} else {
  console.log('You should get a job!')
}

let height = 0
if (height) {
  console.log('YAY! Height is defined')
} else {
  console.log('Height is UNDEFINED')
}

console.log("-------------------------------")

// Equality Operators: == vs. ===

const age = 18
if (age === 18) console.log('You just became an adult :D (strict)')

if (age == 18) console.log('You just became an adult :D (loose)')

const favorite = Number(prompt("What's your favorite number?"))
console.log(favorite)
console.log(typeof favorite)

if (favorite === 23) {
  console.log('Cool! 23 is an amazing number!')
}

console.log("-------------------------------")

// Logical Operators

const hasDriversLicense = true // A
const hasGoodVision = true // B

console.log(hasDriversLicense && hasGoodVision)
console.log(hasDriversLicense || hasGoodVision)
console.log(!hasDriversLicense)

const shouldDrive = hasDriversLicense && hasGoodVision
if (shouldDrive) {
  console.log('Sarah is able to drive!')
} else {
  console.log('Someone else should drive...')
}

const isTired = true
console.log(hasDriversLicense && hasGoodVision && !isTired)


console.log("-------------------------------")*/

// Coding Challenge #3
/*There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. 
The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. 
Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, 
and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both 
have a score greater or equal 100 points. Otherwise, no team wins the trophy.
Test data:
- Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
- Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
- Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 */

/*const scoreDolphins = (96 + 108 + 89) / 3
const scoreKoalas = (88 + 91 + 110) / 3
console.log(scoreDolphins, scoreKoalas)
if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy 🏆')
} else if (scoreKoalas > scoreDolphins) {
  console.log('Koalas win the trophy 🏆')
} else if (scoreDolphins === scoreKoalas) {
  console.log('Both win the trophy!')
}

console.log("-------------------------------")

// The switch Statement

const day = 'monday'

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course')
    console.log('Go to coding meetup')
    break
  case 'tuesday':
    console.log('Prepare theory videos')
    break
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples')
    break
  case 'friday':
    console.log('Record videos')
    break
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D')
    break
  default:
    console.log('Not a valid day!')
}

console.log("-------------------------------")

// Statements and Expressions
3 + 4
1991
true && false && !false
if (23 > 10) {
  const str = '23 is bigger'
}
const me = 'Jonas'
console.log(`I'm ${2021 - 1991} years old ${me}`)

console.log("-------------------------------")

// The Conditional (Ternary) Operator
const age = 23
age >= 18
  ? console.log('I like to drink wine 🍷')
  : console.log('I like to drink water 💧')

const drink = age >= 18 ? 'wine 🍷' : 'water 💧'
console.log(drink)

let drink2
if (age >= 18) {
  drink2 = 'wine 🍷'
} else {
  drink2 = 'water 💧'
}
console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`)

console.log("-------------------------------")*/

// Coding Challenge #4
/*Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. 
It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, 
and then try to convert it to a ternary operator!
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). 
Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
Test data:
- Data 1: Test for bill values 275, 40 and 430 */
/*const bill = 275
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

console.log("-------------------------------")*/
