//18/04/2024 1:00 pm
//v 1.0
//Ing(c) Juan Manuel Vargas R.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación

const readlineSync = require("readline-sync");

const createTriplet9 = () => {
  const triplets = parseInt(
    readlineSync.question("How many triplets do you want to create? ")
  );

  for (i = 1; i < triplets + 1; i++) {
    var secondValue = Math.ceil(i / 3);
    var thirdValue = ((i - 1) % 3) + 1;

    console.log(i, secondValue, thirdValue);
  }
};

createTriplet9();
