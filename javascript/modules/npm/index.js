// Either use Commonjs or ES Modules

// import Joke from "awesome-dev-jokes";
// const Joke = require("awesome-dev-jokes");
// console.log(Joke.getRandomJoke());

const axios = require("axios");

// AXIOS Example
const user_api = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
  try {
    const res = await axios.get(user_api);
    const data = res.data;
    // console.log("data", data);
  } catch (err) {
    console.log(err);
  }
}
getUsers();

// Utils Test Example
const getSum = (a, b) => a + b;

module.exports = {
  getSum,
  getUsers,
};
