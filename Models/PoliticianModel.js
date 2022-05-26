/** @format */
const mongoose = require("mongoose");

const PoliticianSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    age: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    party: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    state: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    about: {
      type: String,
      require: true,
    },
    twitter: {
      type: String,
      require: true,
    },
    facebook: {
      type: String,
      require: true,
    },
    instagram: {
      type: String,
      require: true,
    },
    linkedin: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Politician = mongoose.model("Politician", PoliticianSchema);
module.exports = Politician;
