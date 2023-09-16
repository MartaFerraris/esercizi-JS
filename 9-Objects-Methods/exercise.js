const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys
let keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person);

for (let entry of entries) {
  let [keys, values] = entry;
  console.log(keys + ": " + values);
}