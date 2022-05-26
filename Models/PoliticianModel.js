/** @format */
const mongoose = require("mongoose");

const PoliticianSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {},
  party: {},
  image: {},
  state: {},
  phone: {},
  about: {},
  twitter: {},
  facebook: {},
  instagram: {},
  linkedin: {},
});

const Politician = mongoose.model("Politician", PoliticianSchema);
module.exports = Politician;
