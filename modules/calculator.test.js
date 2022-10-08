const calculate = require("./calculator");

//Arrange
const message = {
  add: "sum of 2 numbers are:",
  divide: "division of 2 numbers are:",
  multiply: "multiplication of 2 numbers are:",
  subtract: "Subtraction of 2 numbers are:",
};

const sumOfNumbers = calculate.add(8, 4);
const divisionOfNumbers = calculate.divide(8, 4);
const multiplicationOfNumbers = calculate.multiply(8, 4);
const subtractionOfNumbers = calculate.subtract(8, 4);

describe("calculate", () => {
  test(message.success, () => {
    expect(sumOfNumbers).toBe(12);
  });
  test(message.success, () => {
    expect(divisionOfNumbers).toBe(2);
  });
  test(message.success, () => {
    expect(multiplicationOfNumbers).toBe(32);
  });
  test(message.success, () => {
    expect(subtractionOfNumbers).toBe(4);
  });
});