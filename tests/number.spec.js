import test from "ava";
const {
  min,
  isNumber,
  isNaN,
  max,
  lt,
  isPositive,
  isNegative,
  isInteger,
  equals,
  gt,
  between
} = require("../number");

test("isNumber should return false when input is not a number", t => {
  const inputs = ["1", true, "-3", null, "$4"];
  inputs.forEach(input => {
    const type = typeof input;
    t.is(isNumber(input), false, `${input} is ${type}`);
  });
});
test("isNumber should return true when input is a number", t => {
  const inputs = [Number.NaN, Number.NEGATIVE_INFINITY, Math.PI, 1, -1, 0xff];
  inputs.forEach(input => {
    const type = typeof input;
    t.is(isNumber(input), true, `${input} is ${type}`);
  });
});

test("isNaN should return true", t => {
  const inputs = [Number.NEGATIVE_INFINITY, Math.PI, 1, -1, 0xff];
  inputs.forEach(input => {
    const type = typeof input;
    t.is(isNaN(input), false, `${input} is ${type}`);
  });
});
test("isNaN should return false", t => {
  const inputs = [Number.NaN];
  inputs.forEach(input => {
    const type = typeof input;
    t.is(isNaN(input), true, `${input} is ${type}`);
  });
});

test("min should throw error when argument is invalid", t => {
  const pair = [null, 1];
  const error = t.throws(() => min(pair[0])(pair[1]), TypeError);
  t.is(error.message, "min is not a valid number");
});
test.todo("min should should return true");

test.todo("max should be a function");
test.todo("max should throw error when argument is invalid");
test.todo("max should should return right");

test.todo("lt should be a function");
test.todo("lt should throw error when argument is invalid");
test.todo("lt should return true");
test.todo("lt should return false");

test.todo("isPositive should return true");
test.todo("isPositive should return false");

test.todo("isNegative should return true");
test.todo("isNegative should return false");

test.todo("isInteger should return true");
test.todo("isInteger should return false");

test.todo("equals should be a function");
test.todo("equals should throw error when argument is invalid");
test.todo("equals should return true");
test.todo("equals should return false");

test.todo("gt should be a function");
test.todo("gt should throw error when argument is invalid");
test.todo("gt should return true");
test.todo("gt should return false");

test.todo("between should be a function");
test.todo("between should throw error when arguments is invalid");
test.todo("between should return true");
test.todo("between should return false");
