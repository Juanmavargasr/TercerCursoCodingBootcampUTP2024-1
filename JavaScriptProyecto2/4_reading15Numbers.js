//18/04/2024 1:00 pm
//v 1.0
//Ing(c) Juan Manuel Vargas R.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación

const reading15Numbers4 = () => {
  console.log(`hello mor, i need 15 numbers different than 0 from you.`);
  var numbers = "";
  var totalNumbers = [];
  var numbersGreaterThan150 = [];
  var negativeNumbersFound = [];
  var positiveNumbersFound = [];

  for (i = 0; i < 15; i++) {
    do {
      numbers = parseInt(
        readlineSync.question(
          i === 0
            ? "Type the first number: "
            : i === 14
            ? "Type the last number: "
            : "Type the next number: "
        )
      );
      if (numbers === 0) {
        console.log("You can't type 0.");
      }
    } while (numbers === 0);
    totalNumbers.push(numbers);
    if (numbers > 150) {
      numbersGreaterThan150.push(numbers);
    }
    if (numbers < 0) {
      negativeNumbersFound.push(numbers);
    } else {
      positiveNumbersFound.push(numbers);
    }
  }
  console.log(
    `The qty of numbers greaters than 150 are: ${numbersGreaterThan150.length}`
  );
  console.log(
    `The biggest number in the group is: ${Math.max(
      ...totalNumbers
    )} and the lowest is: ${Math.min(...totalNumbers)}`
  );
  console.log(`There is ${negativeNumbersFound.length} negative numbers`);

  const averagePositiveNumbers = (numbersArray) => {
    var avg = 0;
    for (i = 0; i < numbersArray.length; i++) {
      avg = avg + numbersArray[i];
    }
    avg = avg / numbersArray.length;
    return avg;
  };

  console.log(
    `The average of positive numbers is ${averagePositiveNumbers(
      positiveNumbersFound
    )}`
  );
};

reading15Numbers4();
