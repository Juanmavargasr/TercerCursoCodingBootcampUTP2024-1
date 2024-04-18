//18/04/2024 1:00 pm
//v 1.0
//Ing(c) Juan Manuel Vargas R.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación

const printPyramid14 = () => {
  let rows = 7;
  let columns = 13;

  for (row = 1; row <= rows; row++) {
    let actualRow = "";

    for (let column = 1; column <= columns; column++) {
      if (column >= row && column <= columns - row + 1) {
        actualRow = actualRow + "P";
      } else {
        actualRow = actualRow + " ";
      }
    }

    // Imprimimos la row actual
    console.log(actualRow);
  }
};
printPyramid14();
