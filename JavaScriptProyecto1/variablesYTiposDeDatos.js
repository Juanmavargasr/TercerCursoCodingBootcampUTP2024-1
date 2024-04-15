//15/04/2024 1:00 pm
//v 1.0
//Ing(c) Juan Manuel Vargas R.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación
//About the program: the current program, let to the user choose the action that want to do. The options are:
//convert from celcius to farenheit, calculate the BMI, autogenerate a username, or know a specific position in fibonacci serie.

const readlineSync = require("readline-sync");

const conversorDeTemperatura = () => {
  var degreesCelsius = readlineSync.question(
    "We are here to convert from degrees Celsius to Fahrenheit. How many degrees Celsius do you want to convert?: "
  );
  const degreesFarenheit = (9 / 5) * degreesCelsius + 32;

  console.log(
    `We got it! ${degreesCelsius} Celsius are ${degreesFarenheit} Farenheit. Bye!`
  );
};

const calculadoraDeIMC = () => {
  var weight = readlineSync.question("Please, let me know your weight: : ");
  var height = readlineSync.question(
    "Please, let me know your height in metters: : "
  );

  const IMC = weight / (height * height);

  console.log(`Your IMC is ${IMC}`);
};

const generadorDeNombresDeUsuario = () => {
  var name = readlineSync.question("Let me know your name!: ");
  var lastname = readlineSync.question("Let me know your lastname!: ");
  var year = readlineSync.question("Let me know your born year!: ");

  console.log(`Your username is: ${name}${lastname}${year}`);
};

const fibonacci = () => {
  let n1 = 0;
  let n2 = 1;

  var numeroIngresado = readlineSync.question(
    "Ingrese la posición de la serie Fibonacci que desea averiguar: "
  );
  numeroIngresado = Number(numeroIngresado);
  console.log(typeof numeroIngresado);

  if (typeof numeroIngresado !== "number" || numeroIngresado <= 0) {
    console.log("Ingresa un numero valido");
    return;
  } else {
    if (numeroIngresado === 1) {
      console.log(0);
      return;
    } else if (numeroIngresado === 2) {
      console.log(1);
      return;
    } else {
      for (let i = 2; i < numeroIngresado; i++) {
        var resultado = n1 + n2;
        // resultado = 1, 2, 3
        n1 = n2;
        //n1 = 1, 1, 2
        n2 = resultado;
        //n2= 1, 2, 3

        //   console.log("El valor de i es: " + i);
        // serie = (0,1,1,2,3,5,8,13)
      }
      console.log(resultado);
    }
  }
};

const programa = () => {
  let exit = false;
  while (!exit) {
    console.log(
      `Hello, this is your multipurpose program, here you can press:`
    );
    console.log(`1. Convert from degrees Celsius to farenheit`);
    console.log(`2. Calculate your BMI`);
    console.log(`3. Create a user name`);
    console.log(
      `4. Find a number in an particular position in fibonacci serie`
    );
    console.log(`5. Exit ☺`);
    const option = readlineSync.question(`What do you want to do? `);

    switch (option) {
      case "1":
        conversorDeTemperatura();
        break;
      case "2":
        calculadoraDeIMC();
        break;
      case "3":
        generadorDeNombresDeUsuario();
        break;
      case "4":
        fibonacci();
        break;
      case "5":
        exit = true;
        console.log(exit);
        break;
      default:
        console.log(`Please choose a valid option`);
    }
  }
};

programa();
