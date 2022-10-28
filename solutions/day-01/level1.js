console.clear();

// Declare an empty array;
const emptyArray = [];

// Declare an array with more than 5 number of elements
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

// Find the length of your array
console.log(`\nemptyArray length: ${emptyArray.length}`);
console.log(`\ncountries length: ${countries.length}`);
console.log(`\nwebTechs length: ${webTechs.length}`);

// Get the first item, the middle item and the last item of the array
const countriesMidIndex = Math.floor(countries.length / 2);
console.log(`\ncountries -- Fisrt: ${countries[0]}, Mid: ${countries[countriesMidIndex]}, Last: ${countries[countries.length - 1]}`);

const webTechsMidIndex = Math.floor(webTechs.length / 2);
console.log(`\nwebTechs -- Fisrt: ${webTechs[0]}, Mid: ${webTechs[webTechsMidIndex]}, Last: ${webTechs[webTechs.length - 1]}`);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
    1,
    { name: 'Test' },
    'Dog',
    'Cat',
    [1, 2, 3, 4, 5],
    99.99
];
console.log(`\nmixedDataTypes: ${mixedDataTypes.length}`, mixedDataTypes);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// Print the array using console.log()
console.log(`\nitCompanies: ${itCompanies}`);

// Print the number of companies in the array
console.log(`\nitCompanies: ${itCompanies.length}`);

// Print the first company, middle and last company
const itCompaniesMidIndex = Math.floor(itCompanies.length / 2);
console.log(`\nitCompanies -- Fisrt: ${itCompanies[0]}, Mid: ${itCompanies[itCompaniesMidIndex]}, Last: ${itCompanies[itCompanies.length - 1]}`);

// Print out each company
console.log(`\nList of itCompanies:`)
for (let cmp of itCompanies) { console.log(cmp); }

// Change each company name to uppercase one by one and print them out
console.log(`\nUpperCased: `);
for (let cmp of itCompanies) { console.log(cmp.toUpperCase()); }

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let itCompaniesTmp = Array.from(itCompanies);
let itCompaniesLastItem = itCompaniesTmp.pop();
itCompaniesTmp.push(`and ${itCompaniesLastItem}`);
console.log(`\n${itCompaniesTmp.join(', ')} are big IT companies.`);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let itCompany = 'Apple';
let hasitCompany = itCompanies.includes(itCompany);
if (hasitCompany) {
    console.log(`\n${itCompany} is not found.`);
} else {
    console.log(`\n${itCompany} found.`);
}

// Filter out companies which have more than one 'o' without the filter method
let itCompaniesFiltered = [];
for (let cmp of itCompanies) {
    let letters = cmp.split('');
    let letterOs = [];
    letters.forEach(l => {
        if (l.toLowerCase() === 'o') {
            letterOs.push(l); // collect Os
        }
    });
    if (letterOs.length > 1) {
        itCompaniesFiltered.push(cmp);
    }
}
console.log(`\nFiltered: ${itCompaniesFiltered.join(', ')}`);

// Sort the array using sort() method
console.log(`\nSorted: ${itCompanies.sort()}`);

// Reverse the array using reverse() method
console.log(`\nSorted reverse: ${itCompanies.reverse()}`);

// Slice out the first 3 companies from the array
let toSlice = Array.from(itCompanies);
console.log(`\nSliced first 3: ${toSlice.slice(3)}`);

// Slice out the last 3 companies from the array
console.log(`\nSliced last 3: ${toSlice.slice(3, toSlice.length - 3)}`);

// Slice out the middle IT company or companies from the array
function removeMiddle(collection) {
    let midIndex = collection.length / 2;
    if (Number.isInteger(midIndex)) {
        let toSlice2MidIndex = midIndex - 1;
        return collection.splice(toSlice2MidIndex, 2);
    } else {
        return toSlice2.splice(Math.floor(midIndex), 1);
    }    
}
let toSlice2 = Array.from(itCompanies);
console.log(`\nOriginal: ${toSlice2.join(', ')}`);
console.log(`Sliced middle: ${removeMiddle(toSlice2)}`);

// Remove the first IT company from the array
itCompanies.shift();
console.log(`\nitCompanies: ${itCompanies.join(', ')}`);

// Remove the middle IT company or companies from the array
console.log(`\nOriginal: ${itCompanies.join(', ')}`);
console.log(`Remove the middle: ${removeMiddle(itCompanies).join(', ')}`);

// Remove the last IT company from the array
console.log(`\nOriginal: ${itCompanies.join(', ')}`);
itCompanies.pop()
console.log(`Remove the last: ${itCompanies.join(', ')}`);

// Remove all IT companies
let itCompaniesTmp2 = Array.from(itCompanies);
console.log(`\nOriginal: ${itCompaniesTmp2.join(', ')}`);
itCompaniesTmp2 = [];
console.log(`Emptied.`);