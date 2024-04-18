//18/04/2024 1:00 pm
//v 1.0
//Ing(c) Juan Manuel Vargas R.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación

const v17 = () => {
  const rows = 10;
  const columns = 19;
  for (let row = 0; row < rows; row++) {
    let currentRow = "";
    for (let column = 0; column < columns; column++) {
      if (column === row) {
        currentRow += "Z";
      } else if (columns - column === row + 1) {
        currentRow += "Z";
      } else if (column < row) {
        currentRow += " ";
      } else {
        currentRow += " ";
      }
    }
    console.log(currentRow);
  }
};
v17();
