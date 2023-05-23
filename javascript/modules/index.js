// CommonJS
// const utils = require("./utils.js"); // ReferenceError: require is not defined
// utils.getSum();

// ES Modules
import { getSum } from "./utils.js";

console.log(getSum(1, 2));
