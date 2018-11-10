const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());




app.get("/", (req, res) => {
  res.send("hello").end();
});



const port = 3001;

app.listen(port, () => {
  console.log(`port running on ${port}`);
});
