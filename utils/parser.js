import _ from "lodash";

export function parseNumbers(input) {
  return _.map(input.split(","), (num) => parseFloat(num.trim()));
}

export function isValidOperation(operation) {
  return ["add", "subtract", "multiply", "divide"].includes(operation);
}

