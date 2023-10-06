const number = 15;

const promiseNumbers = new Promise((resolve, reject)=> {
    if (number > 10) {
        resolve("This number is major then 10");
    } else {
        reject("This number isn't major then 10");
    }
});

promiseNumbers
    .then((result)=> console.log(result))
    .catch((error)=> console.log(error));
    