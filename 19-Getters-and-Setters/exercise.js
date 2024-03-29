class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get firstName(){
    return this._firstName;
  }
  get lastName(){
    return this._lastName;
  }
  get age(){
    return this._age;
  }

  set firstName(newFirstName) {
    this._firstName = newFirstName;
  }
  set lastName(newLastName) {
    this._lastName = newLastName
  }
  set age(newAge) {
    this._age = newAge;
  }

  get fullName(){
    return `${this._firstName} ${this._lastName}`;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);