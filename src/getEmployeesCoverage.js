const data = require('../data/zoo_data');

const { species, employees } = data;

const findPerson = (param) => {
  if (param.name) {
    return employees.find(({ firstName, lastName }) => [firstName, lastName].includes(param.name));
  } if (param.id) {
    return employees.find(({ id }) => id === param.id);
  }
};

const employeesInfos = (param2) => {
  const infos = findPerson(param2);
  if (!infos) {
    throw new Error('Informações inválidas');
  }
  const resp = species.filter((element) => infos.responsibleFor.includes(element.id));
  return {
    id: infos.id,
    fullName: `${infos.firstName} ${infos.lastName}`,
    species: resp.map((element) => element.name),
    locations: resp.map((element) => element.location),
  };
};

const findNames = () => {
  const array = employees.map((element) => employeesInfos({ id: element.id }));
  return array;
};
console.log(findNames());

function getEmployeesCoverage(param3) {
  if (!param3) {
    return findNames();
  }
  return employeesInfos(param3);
}

module.exports = getEmployeesCoverage;
