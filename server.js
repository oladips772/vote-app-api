/** @format */
const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 6000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));

app.get("/", (req, res) => {
  res.send(`Server is running on port ${PORT}`);
});
