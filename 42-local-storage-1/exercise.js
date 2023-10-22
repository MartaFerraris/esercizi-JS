const user = {
  id: 1,
  name: "John",
  age: 25,
};

const handleLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

handleLocalStorage(user);
const local = JSON.parse(localStorage.getItem('user'));
console.log('local:', local);