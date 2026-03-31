'use strict'

/*let hasDriversLicense = false
const passTest = true

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('I can drive :D')

// const interface = 'Audio'
// const private = 534

console.log("-------------------------------")

// Funciones
function logger() {
  console.log('My name is Jonas')
}

logger()
logger()
logger()

function fruitProcessor(apples, oranges) {
  console.log(apples, orange)
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)

const num = Number('23')

console.log("-------------------------------")

// Function declaration vs expression

// Function declaration
const age1 = calcAge1(1991)

function calcAge1(birthYear) {
  return 2037 - birthYear
}

// Function expression
const age2 = calcAge2(1991)

const calcAge2 = function (birthYear) {
  return 2037 - birthYear
}

console.log(age1, age2)

console.log("-------------------------------")

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1991)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear
  const retirement = 65 - age
  return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1980, 'Bob'))

console.log("-------------------------------")

// Functions calling other functions
function cutFruitPieces (fruit) {
  return fruit * 4
}

function fruitProcessor (apples, oranges) {
  const applePieces = cutFruitPieces(apples)
  const orangePieces = cutFruitPieces(oranges)

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
  return juice
}

console.log(fruitProcessor(2, 3))

console.log("-------------------------------")

// Reviewing functions
const calcAge = function (birthYear) {
  return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear)
  const retirement = 65 - age

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`)
    return retirement
  } else {
    console.log(`${firstName} has already retired`)
    return -1
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1950, 'Mike'))

console.log("-------------------------------")

// Coding Challenge #1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

const scoreDolphins = calcAverage(44, 23, 71)
const scoreKoalas = calcAverage(65, 54, 49)

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
  } else {
    console.log('No team wins...')
  }
}

checkWinner(scoreDolphins, scoreKoalas)

console.log("-------------------------------")

// Arrays

const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Peter'

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends)

const years = new Array(1991, 1984, 2008, 2020)

console.log(friends[0])
console.log(friends[2])

console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = 'Jay'
console.log(friends)

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]
console.log(jonas)

console.log("-------------------------------")

// basic array operations (methods)
const friends = ['Michael', 'Steven', 'Peter']

// Add elements
const newLength = friends.push('Jay')
console.log(friends)
console.log(newLength)

friends.unshift('John')
console.log(friends)

// Remove elements
friends.pop() // Last
const popped = friends.pop()
console.log(friends)
console.log(popped)

friends.shift() // First
console.log(friends)

console.log(friends.indexOf('Steven'))
console.log(friends.indexOf('Bob'))

friends.push(23)
console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'))
console.log(friends.includes(23))

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven')
}

console.log("-------------------------------")

// Coding Challenge #2

const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2)

const bills = [125, 555, 44]
const tips = bills.map(calcTip)
const totals = bills.map((bill, i) => bill + tips[i])
console.log(bills, tips, totals)


console.log("-------------------------------")

// Objects

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
}

console.log(jonas)

console.log(jonas.lastName)
console.log(jonas['lastName'])

const nameKey = 'Name'
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

const interestedIn = prompt(
  'What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends'
)

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn])
} else {
  console.log(
    'Wrong request! Choose between firstName, lastName, age, job, and friends'
  )
}

jonas.location = 'Portugal'
jonas['twitter'] = '@jonasschmedtman'
console.log(jonas)

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best is called ${jonas.friends[0]}`
)

console.log("-------------------------------")

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 19911,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYeah
    return this.age
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
}

console.log(jonas.calcAge())

console.log(jonas.age)
console.log(jonas.getSummary())

console.log("-------------------------------")

// Coding Challenge #3
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  }
}

mark.calcBMI()
john.calcBMI()

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  )
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  )
}

console.log("-------------------------------")

// iteration: the for loop

for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`)
}

console.log("-------------------------------")

// Looping arrays, breaking and continuing

const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
]

const types = []

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i])
  // Filling types array
  types.push(typeof jonas[i])
}

console.log(types)

const years = [1991, 2007, 1969, 2020]
const ages = []

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i])
}

console.log(ages)

console.log("-------------------------------")

// loop backwards and loops in loops

const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
]

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i])
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise} --------`)

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`)
  }
}

console.log("-------------------------------")

// while loop

let rep = 1
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`)
  rep++
}

let dice = Math.trunc(Math.random() * 6) + 1

while (dice !== 6) {
  console.log(`You rolled a ${dice}`)
  dice = Math.trunc(Math.random() * 6) + 1
  if (dice === 6) console.log('Loop is about to end...')
}

console.log("-------------------------------")*/

// Coding Challenge #4

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i])
  tips.push(tip)
  totals.push(tip + bills[i])
}

console.log(bills, tips, totals)

const calcAverage = function (arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}

console.log(calcAverage(totals))
