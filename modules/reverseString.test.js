const reverseString = require("./reverseString");

const message = {
  success: "String succesfully reversed",
  error: "String failed to reverse",
};

const countSuccessFunction = reverseString("Tash");

test(message.success, () => {
  expect(countSuccessFunction).not.toMatch("Tash");
});