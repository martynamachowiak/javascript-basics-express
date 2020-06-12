const createPerson = (name, age) => {
  return { name, age };
};

const getName = (object) => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return !!object[property];
};

const isOver65 = (person) => {
  return person.age > 65;
};

const getAges = (people) => {
  return people.map((person) => person.age);
};

const findByName = (name, people) => {
  return people.find((person) => person.name === name);
};

const findHondas = (cars) => {
  return cars.filter((car) => car.manufacturer === "Honda");
};

const averageAge = (people) => {
  return people.reduce((a, b) => a + b.age, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce: (newPerson) =>
      `Hi ${newPerson}, my name is ${name} and I am ${age}!`,
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
