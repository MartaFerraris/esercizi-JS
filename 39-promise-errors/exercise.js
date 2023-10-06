const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const isLogged = true
        if (isLogged) {
            const randomNum = Math.random();
            resolve(randomNum);
        } else {
            reject("Error");
        }
    }, 1000);
});

const secondPromise = (numberValue) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numberValue > 0.5) {
                resolve({ name: "John", age: 24 });
            } else {
                reject("NaN");
            }
        }, 1000);
    });
};

firstPromise
    .then((randomNum) => {
        return secondPromise(randomNum);
    })
    .then((finalData) => {
        console.log(finalData);
    })
    .catch((error) => {
        console.log(error.message);
    })
    .finally(()=> {
        console.log("Operation completed.")
    });