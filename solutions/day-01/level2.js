console.clear();

import countries from './countries.js';
import webTechs from './web_techs.js';

console.log('countries:', countries);
console.log('webTechs:', webTechs);

// First remove all the punctuations and change the string to array and count the number of words in the array
let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replaceAll('.', '');
text = text.replaceAll(',', '');
const words = text.split(' ');
console.log(words);
console.log(words.length);

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat'); // add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.push('Sugar'); // add Sugar at the end of you shopping cart if it has not been already added
console.log(`\nOrig:`, shoppingCart);
let shoppingCart2 = shoppingCart.filter(e => e !== 'Honey'); // remove 'Honey' if you are allergic to honey
console.log(`shoppingCart2:`, shoppingCart2);
shoppingCart2 = shoppingCart2.map(e => e === 'Tea' ? 'Green Tea' : 'e'); // modify Tea to 'Green Tea'
console.log(`shoppingCart2:`, shoppingCart2);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes('Ethiopia')) {
    console.log('\nETHIOPIA');
} else {
    countries.push('Ethiopia');
    console.log(`\nUpdated: `, countries);
}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes('Sass')) {
    console.log(`\nSass is a CSS preprocess`);
} else {
    webTechs.push('Sass');
    console.log(`\nUpdated: `, webTechs);
}

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)