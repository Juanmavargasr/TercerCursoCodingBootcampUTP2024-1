//18/04/2024 1:00 pm
//v 1.0
//Ing(c) Juan Manuel Vargas R.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación

const twoArrows15 = () => {
  const rows = 7;
  const middle = Math.floor(rows / 2);
  for (let row = 0; row < rows; row++) {
    let currentLine = "";
    for (let i = 0; i < 27; i++) {
      currentLine += " ";
    }
    for (let column = 0; column < rows; column++) {
      if (
        (column <= row && column < middle && row < middle) ||
        (column + row >= rows - 1 && column > middle && row < middle) ||
        row === middle ||
        (row > middle && column + row <= rows - 1) ||
        (row > middle && rows - 1 - column + row <= rows - 1)
      ) {
        currentLine += "A";
      } else {
        currentLine += " ";
      }
    }
    currentLine += " ";
    console.log(currentLine);
  }
};
twoArrows15();
