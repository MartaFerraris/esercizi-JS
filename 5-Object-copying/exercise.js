const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};


const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

console.log(person1);
console.log(person2);

//Perchè con la riassegnazione non copio l'oggetto in sè, ma solo il suo riferimento 
//quindi il suo indirizzo di memoria. 
//Modificando una proprietà di person2 in realtà modifico il valore della stessa 
//proprietà di partenza di person1.