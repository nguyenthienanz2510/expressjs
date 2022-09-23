const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("this always run");
  next();
});

app.use("/product", (req, res, next) => {
  res.send("<h2>This is product page</h2>");
});

app.use("/", (req, res, next) => {
  res.send("<h2>nguyenthienan</h2>");
});

app.listen(3000);
