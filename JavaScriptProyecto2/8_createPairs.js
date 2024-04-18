//18/04/2024 1:00 pm
//v 1.0
//Ing(c) Juan Manuel Vargas R.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación

const readlineSync = require("readline-sync");

const createPairs8 = () => {
  const pairs = parseInt(
    readlineSync.question("How many pairs do you want to create? ")
  );
  for (i = 0; i < pairs; i++) {
    let secondValue = Math.floor(i / 2);

    console.log(i, secondValue);
  }
};

createPairs8();
