//18/04/2024 1:00 pm
//v 1.0
//Ing(c) Juan Manuel Vargas R.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación

const readlineSync = require("readline-sync");

const sumFactorial7 = () => {
  let userNumber = parseInt(
    readlineSync.question(`Please type a number to calculate its factorial: `)
  );
  let sum = 1;
  let result = 1;

  while (userNumber < 0) {
    userNumber = parseInt(
      readlineSync.question(`That's not a correct number, try again: `)
    );
  }
  for (i = 1; i < userNumber + 1; i++) {
    sum = sum + result;
    let j = 0;
    for (j = 1; j < i + 1; j++) {}
    result = result * j;
  }
  console.log(`The factorial of this number is ${sum}`);
};
sumFactorial7();
