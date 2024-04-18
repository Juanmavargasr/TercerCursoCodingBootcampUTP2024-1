//18/04/2024 1:00 pm
//v 1.0
//Ing(c) Juan Manuel Vargas R.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación

const reverseV18 = () => {
  //arreglar la junta
  const rows = 10;
  const columns = 19;
  for (let row = 1; row < rows + 1; row++) {
    let currentRow = "";
    for (let column = 1; column < columns + 1; column++) {
      if (row === 1 && column === 10) {
        for (i = 0; i < 0; i++) {
          currentRow += "Z";
        }
        currentRow += "Z";
        for (i = 0; i < 0; i++) {
          currentRow += "Z";
        }
        break;
      }
      if (row + column === 11 || column - row === 9) {
        currentRow += "Z";
      } else {
        currentRow += " ";
      }
    }
    console.log(`${currentRow} `);
  }
};
reverseV18();
