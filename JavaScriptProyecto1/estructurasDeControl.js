const readlineSync = require("readline-sync");

const guessTheNumber = () => {
  const randomNumber = Math.floor(Math.random() * 101);

  console.log(` I got a number between 1 and 100, please try to find this!`);
  var userNumber = parseInt(readlineSync.question(`Try a number: `));
  var isCorrect = false;

  do {
    if (userNumber === randomNumber) {
      isCorrect = true;
    }
    if (userNumber > randomNumber) {
      userNumber = parseInt(readlineSync.question(`Try with a lower number: `));
    } else {
      userNumber = parseInt(
        readlineSync.question(`Try with a higher number: `)
      );
    }
  } while (!isCorrect);

  console.log(`Congratulations! the number ${userNumber} is correct!`);
};

const factorial = () => {
  const factorialNumber = readlineSync.question(
    "Which number do you want to calculate? "
  );
  var value = 1;
  var counter = 0;
  for (i = 0; i < factorialNumber; i++) {
    counter = counter + 1;

    value = value * counter;
  }
  console.log(`The factorial number is: ${value}`);
};

const vocalCounter = () => {
  const inputphrase = readlineSync.question(
    "Where are we going to count the vocals? "
  );

  phrase = inputphrase.toLowerCase();

  var ACounter = 0;
  var ECounter = 0;
  var Icounter = 0;
  var Ocounter = 0;
  var Ucounter = 0;

  for (i = 0; i < phrase.length; i++) {
    if (phrase[i] === "a") {
      ACounter = ACounter + 1;
    }
    if (phrase[i] === "b") {
      ECounter = ECounter + 1;
    }
    if (phrase[i] === "i") {
      Icounter = Icounter + 1;
    }
    if (phrase[i] === "o") {
      Ocounter = Ocounter + 1;
    }
    if (phrase[i] === "u") {
      Ucounter = Ucounter + 1;
    }
  }
  console.log(
    `In your phrase there is A:${ACounter}, E:${ECounter}, I:${Icounter}, O:${Ocounter}, U:${Ucounter}`
  );
};

const programa = () => {
  let exit = false;
  while (!exit) {
    console.log(
      `Hello, this is your multipurpose program, here you can press:`
    );
    console.log(`1. Find a random number!`);
    console.log(`2. Find the factorial of a number!`);
    console.log(`3. Strings vocal cunter`);
    console.log(`4. Exit ☺`);
    const option = readlineSync.question(`What do you want to do? `);

    switch (option) {
      case "1":
        guessTheNumber();
        break;
      case "2":
        factorial();
        break;
      case "3":
        vocalCounter();
        break;
      case "4":
        exit = true;
        break;
      default:
        console.log(`Please choose a valid option`);
    }
  }
};

programa();
