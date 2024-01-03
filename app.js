const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.end(JSON.stringify(req.body, null, 2));
});

app.listen(port);
