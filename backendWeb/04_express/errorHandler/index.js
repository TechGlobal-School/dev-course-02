const return404Error = (req, res) => {
  res.status(404);
  res.render("404");
};

const return500Error = (err, req, res, next) => {
  res.status(500);
  res.render("500", { message: err.message });
};

module.exports = {
  return404Error,
  return500Error,
};
