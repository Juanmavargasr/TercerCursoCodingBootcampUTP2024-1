//18/04/2024 1:00 pm
//v 1.0
//Ing(c) Juan Manuel Vargas R.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación

const readlineSync = require("readline-sync");

const reverseNumberString3 = () => {
  const inputNumber = readlineSync.question(
    `What number do you want to reverse mor? `
  );
  console.log(inputNumber.split("").reverse().join(""));
};

reverseNumberString3();
