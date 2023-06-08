const chalk = require("chalk");

// Custom middlewares
const timeLogger = (req, res, next) => {
  console.log(chalk.blue("Time requested:", Date.now()));
  next();
};

const validateUserId = (req, res, next) => {
  const Id = req.params.id;
  if (Id > 10) {
    console.log(chalk.green("Valid ID"));
  } else {
    console.log(chalk.red("InValid ID"));
  }
  next();
};

const trimSearchInput = (req, res, next) => {
  const search = req.query.search;
  const textToSearch = search.trim();
  console.log(chalk.bgCyan(textToSearch));
  next();
};

module.exports = {
  timeLogger,
  validateUserId,
  trimSearchInput,
};
