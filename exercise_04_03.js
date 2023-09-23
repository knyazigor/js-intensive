//1. Construcor Function() 

function Person(name) {
  this.name = name;  
}

Person.prototype.logInfo = function () {
  console.log(`My name is ${this.name}`);
}

const person1 = new Person('Bender');
const person2 = new Person('Fry');

person1.logInfo(); // 'My name is Bender'
person2.logInfo(); // 'My name is Fry'

//2. ES6+ Classes

class Person {
  constructor(name) {
    this.name = name;
  }

  logInfo() {
    console.log(`My name is ${this.name}`);
  }
}

const person3 = new Person('Hubert');
const person4 = new Person('Leela');

person1.logInfo(); // 'My name is Hubert'
person2.logInfo(); // 'My name is Leela'

//3. Objectes

const personPrototype = {
  logInfo() {
    console.log(`My name is ${this.name}`);
  }
}

const person5 = Object.create(personPrototype);
person5.name = 'Hermes';

const person6 = Object.create(personPrototype);
person6.name = 'Zoidberg';

