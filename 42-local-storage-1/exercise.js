const user = {
  id: 1,
  name: "John",
  age: 25,
};

const handleLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const local = handleLocalStorage(user);
console.log('local:', local);