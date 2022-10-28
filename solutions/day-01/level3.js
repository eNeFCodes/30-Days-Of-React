console.clear();

import countries from './countries.js';
import webTechs from './web_techs.js';

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log(ages.sort());
console.log(`min: ${minAge}, max: ${maxAge}`);

const ageMidIndex = ages.length / 2;
if (Number.isInteger(ageMidIndex)) {
    const midIndex = ageMidIndex - 1;
    const agesTmp = ages.splice(midIndex, 2);
    const median = (agesTmp[0] + agesTmp[1]) / 2;
    console.log(`median agEs ${agesTmp}: ${median}`);
} else {
    const midIndex = Math.floor(ageMidIndex);
    console.log(`median age: ${ages[midIndex]}`);
}

const total = ages.reduce((total, curr) => total + curr);
const average = total / ages.length;
console.log(`sum: ${total}/${ages.length} - average age: ${average}`);

// Find the range of the ages(max minus min) 
console.log(`\nRage: ${maxAge - minAge}`);

const minAve = Math.abs(minAge - average);
const maxAve = Math.abs(maxAge - average);
console.log(`\n[min - average]: ${minAve}, [max - average]: ${maxAve}`);

// 1.Slice the first ten countries from the countries array
const toSliced = Array.from(countries);
const slicded10 = toSliced.splice(0, 10);
console.log(`\nSlice 10: ${slicded10}`);

// Find the middle country(ies) in the
console.log(`\ncountries: `, countries);
const countriesMid = countries.length / 2;
if (Number.isInteger(countriesMid)) {
    const midIndex = countriesMid - 1;
    const collection = ages.splice(midIndex, 2);
    console.log(`middle country(ies): ${collection}`);
} else {
    const midIndex = Math.floor(countriesMid);
    console.log(`middle country(ies): ${countries[midIndex]}`);
}

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const countriesCollection = [];
if (Number.isInteger(countriesMid)) {
    countriesCollection.push(Array.from(countries).splice(0, countriesMid));
    countriesCollection.push(Array.from(countries).splice(countriesMid, countries.length));
} else {
    const midInd = Math.ceil(countriesMid);
    countriesCollection.push(Array.from(countries).splice(0, midInd));
    countriesCollection.push(Array.from(countries).splice(midInd, countries.length));
}
console.log(`\ncountriesCollection: `, countriesCollection);

/// Conditionals
