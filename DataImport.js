/** @format */
const express = require("express");
const { politicians } = require("./data/politicians.js");
const Politician = require("./Models/PoliticianModel.js");
const asyncHandler = require("express-async-handler");

const ImportData = express.Router();

// ? Import all the data from the politicians.js file
ImportData.post(
  "/politicians",
  asyncHandler(async (req, res) => {
    await Politician.remove({});
    const importPoliticians = await Politician.insertMany(politicians);
    res.json({ importPoliticians });
  })
);

module.exports = ImportData;
