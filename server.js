/** @format */
const express = require("express");
require("dotenv").config();
const ImportData = require("./DataImport.js");
const { connectDatabase } = require("./config/MongoDb.js");


connectDatabase();
const app = express();
app.use(express.json());
app.use("/api/import", ImportData);
const PORT = process.env.PORT || 6000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));

app.get("/", (req, res) => {
  res.send(`Server is running on port ${PORT}`);
});
