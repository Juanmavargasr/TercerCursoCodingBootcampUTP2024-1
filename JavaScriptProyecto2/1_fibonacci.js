//18/04/2024 1:00 pm
//v 1.0
//Ing(c) Juan Manuel Vargas R.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación

const fibonacci1 = () => {
  let n1 = 0;
  let n2 = 1;
  var result = 0;
  var fibonacciSerie = [0, 1];

  while (result < 10000) {
    result = n1 + n2;
    n1 = n2;
    n2 = result;
    if (result < 10000) {
      fibonacciSerie.push(result);
    }
  }
  console.log(`mor, here is the fibonacci serie: ${fibonacciSerie}`);
};

fibonacci1();
