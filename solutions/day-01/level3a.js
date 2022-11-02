console.clear();
// NOTE: uncomment prompts

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
const age = 12//+prompt('Enter your age:');
const feedback = age >= 18 ? 'You are old enough to drive.' : `You are left with ${18 - age} years to drive.`;
console.log(feedback);

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
const myAge = 33//+prompt('Enter my age:');
const yourAge = 1//+prompt('Enter your age:');
const feedback2 = myAge > yourAge ? `You are ${myAge - yourAge} years younger than me.` : `You are ${yourAge - myAge} years older than me.`;
console.log(feedback2);

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
let a = 4
let b = 3
let feedback3 = a > b ? 'a is greater than b' : 'a is less than b';
console.log(feedback3);

if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('a is less than b');
}

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
const oddEven = 11//+prompt('Enter a number:');
const isEven = Number.isInteger(oddEven / 2);
const feedback4 = isEven ? `${oddEven} is an even number` : `${oddEven} is an odd number`;
console.log(feedback4)

// Write a code which can give grades to students according to theirs scores:
let score = 82//+prompt('Enter your score:');
let grade = 'F';
if (score >= 80) {
    grade = 'A';
} else if (score > 70 && score <= 79) {
    grade = 'B';
} else if (score > 60 && score <= 69) {
    grade = 'C';
} else if (score > 50 && score <= 59) {
    grade = 'D';
}
console.log(`Your grade is ${grade}`);

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
const month = 'april'//prompt('Enter month:');
let season = '';
switch (month.toLowerCase()) {
    case 'september':
    case 'october':
    case 'november':
        season = 'Autumn';
        break;
    case 'december':
    case 'january':
    case 'february':
        season = 'Winter';
        break;
    case 'march':
    case 'april':
    case 'may':
        season = 'Spring';
        break;
    case 'june':
    case 'july':
    case 'august':
        season = 'Summer';
        break
    default:
        season = 'Invalid month';
        break;
}
console.log(`Current season: ${season} for the month of ${month}`);

// Check if a day is weekend day or a working day. Your script will take day as an input.
const currentDay = 'friday'//prompt('What is the day  today?');
let weekday = '';
switch (currentDay.toLowerCase()) {
    case 'saturday':
    case 'sunday':
        console.log(`${currentDay} is a weekend.`);
        break
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
    case 'Saturday is a weekend.':
        console.log(`${currentDay} is a working day.`);
        break;
    default:
        console.log(`Invalid day`);
        break
}

// Write a program which tells the number of days in a month.
const monthInput = 'april'//prompt('Enter month:');
let monthDate = null;
switch (monthInput.toLowerCase()) {
    case 'january':
        monthDate = new Date(2022, 1, 0);
        break;
    case 'february':
        monthDate = new Date(2022, 2, 0);
        break;
    case 'march':
        monthDate = new Date(2022, 3, 0);
        break;
    case 'april':
        monthDate = new Date(2022, 4, 0);
        break;
    case 'may':
        monthDate = new Date(2022, 5, 0);
        break;
    case 'june':
        monthDate = new Date(2022, 6, 0);
        break;
    case 'july':
        monthDate = new Date(2022, 7, 0);
        break;
    case 'august':
        monthDate = new Date(2022, 8, 0);
        break;
    case 'september':
        monthDate = new Date(2022, 9, 0);
        break;
    case 'october':
        monthDate = new Date(2022, 10, 0);
        break;
    case 'november':
        monthDate = new Date(2022, 11, 0);
        break;
    case 'december':
        monthDate = new Date(2022, 12, 0);
        break;
    default: break;
}
if (monthDate) {
    console.log(`${monthInput} has ${monthDate.getDate()} days.\n`, monthDate);
} else {
    console.log(`Invalid month`);
}

// 7. Objects
const dog = {
    name: 'Dog',
    legs: 4,
    color: 'blue',
    age: 3,
    bark: function () {
        return 'woof woof';
    },

};
console.log(dog);
console.log(`name: ${dog.name}, legs: ${dog.legs}, color: ${dog.color}, age: ${dog.age}, bark: ${dog.bark()}`);

dog.breed = '101';
dog.getDogInfo = function () {
    console.log(`Dog info - name: ${dog.name}, legs: ${dog.legs}, color: ${dog.color}, age: ${dog.age}, bark: ${dog.bark()}`);
}

dog.getDogInfo();

// Exercises: Level 2
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

// Find the person who has many skills in the users object.
let person;
for (let key of Object.keys(users)) {
    let user = users[key];
    if (person) {
        if (user.skills.length > person.info.skills.length) {
            person = { name: key, info: user };
        }
    } else {
        person = { name: key, info: user };
    }
}
console.log(`Has many skills:`, person);

// Count logged in users,count users having greater than equal to 50 points from the following object.
let loggedInUsers = 0;
let usersWithMoreThan50 = 0;
for (let key of Object.keys(users)) {
    let user = users[key];
    if (user.isLoggedIn) {
        loggedInUsers++;
    }
    if (user.points >= 50) {
        usersWithMoreThan50++;
    }
}
console.log(`loggedInUsers: ${loggedInUsers}, usersWithMoreThan50: ${usersWithMoreThan50}`);

// Find people who are MERN stack developer from the users object
let mernDevs = [];
for (let key of Object.keys(users)) {
    let user = users[key];
    if (user.skills.includes('MongoDB')
        && user.skills.includes('Express')
        && user.skills.includes('React')
        && user.skills.includes('Node')) {
        mernDevs.push({ [key]: user });
    }
}
console.log('mernDevs: ', mernDevs);

// Set your name in the users object without modifying the original users object
users.Neil = {
    email: 'neil@neil.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
};
console.log(users)

// Get all keys or properties of users object
for (let [key, values] of Object.entries(users)) {
    console.log(`key: ${key} \nvalues:`, values);
}

// Get all the values of users object
for (let [key, values] of Object.entries(users)) {
    console.log(`\n${key}`)
    for (let [key, value] of Object.entries(values)) {
        console.log(`${key}:`, value);
    }
}

// Use the countries object to print a country name, capital, populations and languages.
import countries from './countries.js';
for (let name of countries) {
    console.log(`name: ${name}`);
}