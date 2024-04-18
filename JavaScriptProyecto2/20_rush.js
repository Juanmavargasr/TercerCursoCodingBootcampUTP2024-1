//18/04/2024 1:00 pm
//v 1.0
//Ing(c) Juan Manuel Vargas R.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación

const rush20 = (x, y) => {
  for (row = 1; row <= y; row++) {
    let actualRow = "";
    for (column = 1; column <= x; column++)
      if ((column === 1 && row === 1) || (column === x && row === y)) {
        actualRow += "/";
      } else if ((column === x && row === 1) || (column === 1 && row === y)) {
        actualRow += "\\";
      } else if (row === 1 || row === y || column === 1 || column === x) {
        actualRow += "*";
      } else {
        actualRow += " ";
      }
    console.log(actualRow);
  }
};
rush20();
