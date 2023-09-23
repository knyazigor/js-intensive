class PersonThree {
  constructor(name) {
    this._name = name
  }

  get name() {
    return this._name
  }

  set name(name) {
    this._name = name;
    console.log(`Name is changed to ${name}`);
  }
}

const person1 = new PersonThree('Bender');

console.log(person1.name) // Bender
person1.name = 'Scruffy' // Name is changed to Scruffy

console.log(person1.name); // Scruffy
