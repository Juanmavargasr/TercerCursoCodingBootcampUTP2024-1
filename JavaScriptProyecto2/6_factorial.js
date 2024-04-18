//18/04/2024 1:00 pm
//v 1.0
//Ing(c) Juan Manuel Vargas R.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación

const readlineSync = require("readline-sync");

const factorial6 = () => {
  let userNumber = parseInt(
    readlineSync.question(`Please type a number to calculate its factorial: `)
  );
  let result = 1;
  while (userNumber < 1) {
    userNumber = parseInt(
      readlineSync.question(`That's not a correct number, try again: `)
    );
  }
  for (i = 1; i < userNumber + 1; i++) {
    result = result * i;
  }
  console.log(`The factorial of this number is ${result}`);
};

factorial6();
