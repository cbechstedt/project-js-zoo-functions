const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findPerson = data.employees.find((element) => id === element.id);
  const firstAnimal = findPerson.responsibleFor[0];
  const findResidents = data.species.find((element) => element.id === firstAnimal).residents;
  const findOldest = findResidents.reduce((acc, curr) => {
    if (acc.age < curr.age) { return curr; }
    return acc;
  });
  return Object.values(findOldest);
}

module.exports = getOldestFromFirstSpecies;
