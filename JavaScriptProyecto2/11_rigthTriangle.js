//18/04/2024 1:00 pm
//v 1.0
//Ing(c) Juan Manuel Vargas R.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación

const rigthTriangle11 = () => {
  let rows = 5;
  let columns = 5;
  for (let row = 25; row > rows; row--) {
    let currentLine = "";
    for (let column = 25; column > columns; column--) {
      if (row <= column) {
        currentLine += "A";
      } else {
        currentLine += " ";
      }
    }
    for (i = 0; i < 55; i++) {
      currentLine += " ";
    }
    console.log(currentLine.split("").reverse().join(""));
  }
};

rigthTriangle11();
