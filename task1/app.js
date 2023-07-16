const fs = require('fs');

// Step 1: Create object
const person = {
  fname: 'ahmed',
  lname: 'hossam',
  age: 20,
  city: 'alex'
};

// Step 2: Convert object to JSON
const personJson = JSON.stringify(person);

// Step 3: Store JSON in file
fs.writeFileSync('person.json', personJson);

// Step 4: Read JSON from file
const personJsonFromFile = fs.readFileSync('person.json');

// Step 5: Convert JSON to object
const personFromFile = JSON.parse(personJsonFromFile);

// Step 6: Update data
personFromFile.fname = 'adel';
personFromFile.lname = 'ahmed';
personFromFile.age = 40;
personFromFile.city = 'cairo';

// Step 7: Convert object to JSON
const updatedPersonJson = JSON.stringify(personFromFile);

// Step 8: Store updated JSON in file
fs.writeFileSync('updatedPerson.json', updatedPersonJson);