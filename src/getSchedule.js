const data = require('../data/zoo_data');

const { species, hours } = data;
const animals = species.map((element) => element.name);
const days = Object.keys(hours);
console.log(animals);
console.log(days);

const getDaysOfAnimals = (animal) => {
  const findAnimal = species.find((element) => animal === element.name);
  return findAnimal.availability;
};

const getAnimalsOfDay = (day) => {
  if (day === 'Monday') return 'The zoo will be closed!';
  return species
    .filter((element) => element.availability.includes(day))
    .map((element) => element.name);
};

const getHours = (day) => {
  if (hours[day].open === 0) return 'CLOSED';
  return `Open from ${hours[day].open}am until ${hours[day].close}pm`;
};

console.log(getDaysOfAnimals('lions'));
console.log(getAnimalsOfDay('Friday'));
console.log(getHours('Wednesday'));

function getSchedule(scheduleTarget) {
  const specie = animals.find((element) => element === scheduleTarget);
  const objDays = {};
  days.forEach((element) => {
    objDays[[element]] = {
      officeHour: getHours(element),
      exhibition: getAnimalsOfDay(element),
    };
  });
  const dia = objDays[scheduleTarget];
  console.log(objDays);
  if (specie) return getDaysOfAnimals(scheduleTarget);
  if (dia) {
    const objDia = {};
    const findDay = days.find((element) => element === scheduleTarget);
    objDia[findDay] = objDays[scheduleTarget];
    return objDia;
  }
  return objDays;
}

console.log(getSchedule('lions'));
module.exports = getSchedule;
