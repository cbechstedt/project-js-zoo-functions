const data = require('../data/zoo_data');

function countAnimals(animal) {
  const objAnimals = {};
  if (animal === undefined) {
    data.species.forEach((element) => {
      objAnimals[element.name] = element.residents.length;
    });
    return objAnimals;
  }

  if (Object.keys(animal).length === 2) {
    const findAnimal = data.species.find((element) => element.name === animal.specie);
    const collectAnimals = findAnimal.residents.filter((element) => element.sex === animal.sex);
    return collectAnimals.length;
  }

  const findAnimal = data.species.find((element) => element.name === animal.specie);
  return findAnimal.residents.length;
}

module.exports = countAnimals;
