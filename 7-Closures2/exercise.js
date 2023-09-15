function printName() {
    let helloName = "Hello John";
    function inner() {
        return console.log(helloName);
    }
    return inner();
}

setTimeout(printName, 1000);
