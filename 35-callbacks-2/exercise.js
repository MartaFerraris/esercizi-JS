function repeatHello(callback) {
    setInterval(()=> callback(), 1000);
}

const callbackHello = ()=> console.log("Hello");

repeatHello(callbackHello);

/* Le arrow function lavorano nel loro preciso scope e velocemente, così da velocizzare l'esecuzione 
e mantenere il suo contesto. */