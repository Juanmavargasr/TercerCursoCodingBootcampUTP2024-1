//18/04/2024 1:00 pm
//v 1.0
//Ing(c) Juan Manuel Vargas R.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación

const rombo16 = () => {
  //revisar
  var n = 4;
  for (var i = 0; i < n; i++) {
    var line = "";
    for (var j = 0; j < n - i; j++) {
      line += " ";
    }
    for (var k = 0; k < 2 * i + 1; k++) {
      line += "z";
    }
    console.log(line);
  }
  for (var i = n - 2; i >= 0; i--) {
    var line = "";
    for (var j = 0; j < n - i; j++) {
      line += " ";
    }
    for (var k = 0; k < 2 * i + 1; k++) {
      line += "z";
    }
    console.log(line);
  }
};
rombo16();
