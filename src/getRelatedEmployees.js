const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const workers = [];
  employees.forEach((employee) => {
    if (employee.managers.includes(managerId)) {
      workers.push(`${employee.firstName} ${employee.lastName}`);
    }
  });

  return workers;
}

module.exports = { isManager, getRelatedEmployees };
