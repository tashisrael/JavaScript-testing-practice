const stringLength = require("./stringLength");

const message = {
  success: "Length of string is greater than 1 and less than 10",
  error: "length of the string must be less than 10 and greater than 0",
};

const countSuccessFunction = stringLength("Tashobya");
const countFailFunction = () => stringLength("");

test(message.success, () => {
  expect(countSuccessFunction).toBe(8);
});
test(message.error, () => {
  expect(countFailFunction).toThrow("Error");
});