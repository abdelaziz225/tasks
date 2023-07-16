const fs = require('fs');

const addPerson = (person) => {
  try {
    let persons = [];
    if (fs.existsSync('persons.json')) {
      const personsJson = fs.readFileSync('persons.json');
      persons = JSON.parse(personsJson);
    }
    persons.push(person);
    fs.writeFileSync('persons.json', JSON.stringify(persons));
    console.log(`Person with ID ${person.id} added successfully`);
  } catch (err) {
    console.error(`Error adding person: ${err.message}`);
  }
};

const deletePerson = (id) => {
  try {
    const personsJson = fs.readFileSync('persons.json');
    const persons = JSON.parse(personsJson);
    const index = persons.findIndex(person => person.id === id);
    if (index !== -1) {
      persons.splice(index, 1);
      fs.writeFileSync('persons.json', JSON.stringify(persons));
      console.log(`Person with ID ${id} deleted successfully`);
    } else {
      console.error(`Person with ID ${id} not found`);
    }
  } catch (err) {
    console.error(`Error deleting person: ${err.message}`);
  }
};
module.exports = {
  addPerson,
  deletePerson
};