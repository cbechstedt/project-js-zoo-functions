const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const obj = {};
  const children = entrants.filter((person) => person.age < 18).length;
  const adults = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const seniors = entrants.filter((person) => person.age >= 50).length;
  obj.child = children;
  obj.adult = adults;
  obj.senior = seniors;
  return obj;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) { return 0; }
  const visitors = countEntrants(entrants);
  const sum = (visitors.child * data.prices.child)
    + (visitors.adult * data.prices.adult) + (visitors.senior * data.prices.senior);
  return sum;
}

module.exports = { calculateEntry, countEntrants };
