const yargs = require('yargs');
const { addPerson, deletePerson, listPersons, readData } = require('./data');

yargs.command({
  command: 'add',
  describe: 'Add a person',
  builder: {
    id: { describe: 'Person ID', type: 'number', demandOption: true },
    fname: { describe: 'First name', type: 'string', demandOption: true },
    lname: { describe: 'Last name', type: 'string', demandOption: true },
    age: { describe: 'Age', type: 'number', demandOption: true },
    city: { describe: 'City', type: 'string', demandOption: true }
  },
  handler(argv) {
    addPerson({
      id: argv.id,
      fname: argv.fname,
      lname: argv.lname,
      age: argv.age,
      city: argv.city
    });
  }
});

yargs.command({
  command: 'delete',
  describe: 'Delete a person by ID',
  builder: {
    id: { describe: 'Person ID', type: 'number', demandOption: true }
  },
  handler(argv) {
    deletePerson(argv.id);
  }
});

yargs.command({
  command: 'list',
  describe: 'List all persons',
  handler() {
    listPersons();
  }
});

yargs.command({
  command: 'read',
  describe: 'Read data for a person by ID',
  builder: {
    id: { describe: 'Person ID', type: 'number', demandOption: true }
  },
  handler(argv) {
    readData(argv.id);
  }
});

yargs.parse();
