//18/04/2024 1:00 pm
//v 1.0
//Ing(c) Juan Manuel Vargas R.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación

const rightArrow19 = () => {
  let rows = 6;
  let columns = 10;

  for (let row = 1; row < rows + 1; row++) {
    var currentRow = "";
    for (let column = 0; column < columns + 1; column++) {
      if (column < row) {
        currentRow += "A";
      } else {
        currentRow += " ";
      }
    }
    for (i = 0; i < 30; i++) {
      currentRow += " ";
    }
    console.log(currentRow.split("").reverse().join(""));
  }
  rows = 4;
  columns = 10;
  for (let row = 4; row >= 0; row--) {
    var currentRow = "";

    for (let column = 0; column < columns + 1; column++) {
      if (column <= row) {
        currentRow += "A";
      } else {
        currentRow += " ";
      }
    }
    for (i = 0; i < 30; i++) {
      currentRow += " ";
    }
    console.log(currentRow.split("").reverse().join(""));
  }
};
rightArrow19();
