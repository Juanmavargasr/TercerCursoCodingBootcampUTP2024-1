//18/04/2024 1:00 pm
//v 1.0
//Ing(c) Juan Manuel Vargas R.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación

const multiplication = () => {
  for (table = 1; table < 11; table++) {
    `This is the ${table} table multiplication`;
    for (digit = 1; digit < 11; digit++) {
      console.log(`${table} X ${digit} = ${table * digit}`);
    }
    console.log("--------------------------------------");
  }
  console.log("bye");
};
multiplication();
