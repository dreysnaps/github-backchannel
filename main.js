const express = require("express");
const path = require("path");

const debug = require("debug")("xendit:*");

const PORT = process.env.PORT || 5000;

const index = require("./routes/index");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("/", index);

app.listen(PORT, () => {
  debug(`---- Server started on port ${PORT}`);
});
module.exports = app;
