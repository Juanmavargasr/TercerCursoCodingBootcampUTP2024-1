//18/04/2024 1:00 pm
//v 1.0
//Ing(c) Juan Manuel Vargas R.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación

const movingCharacters10 = () => {
  let output = ["A", " ", " ", " ", " ", " ", " ", "A"];

  console.log(output.join(""));

  for (let column = 0; column < 3; column++) {
    setTimeout(() => {
      console.clear();
      output[column] = " ";
      output[output.length - (column + 1)] = " ";
      output[column + 1] = "A";
      output[output.length - (column + 2)] = "A";
      console.log(output.join(""));
    }, 350 * column);
  }
};

movingCharacters10();
