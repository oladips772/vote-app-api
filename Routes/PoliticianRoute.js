/** @format */
const express = require("express");
const asyncHandler = require("express-async-handler");
const PoliticianRouter = express.Router();
const Politician = require("../Models/PoliticianModel.js");

// ? get poloticians from mongo server
PoliticianRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const politicians = await Politician.find({});
    res.json(politicians);
  })
);

// ? create a politician
PoliticianRouter.post(
  "/create",
  asyncHandler(async (req, res) => {
    const {
      name,
      age,
      email,
      party,
      image,
      state,
      phone,
      about,
      twitter,
      facebook,
      instagram,
      linkedin,
    } = req.body;
    const userExists = await Politician.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("politician already exist");
    }

    if (
      !name ||
      !age ||
      !email ||
      !party ||
      !image ||
      !state ||
      !phone ||
      !about ||
      !twitter ||
      !facebook ||
      !instagram ||
      !linkedin
    ) {
      throw new Error("please fill all fields");
    }

    const politician = await Politician.create({
      name,
      age,
      email,
      party,
      image,
      state,
      phone,
      about,
      twitter,
      facebook,
      instagram,
      linkedin,
    });
    if (politician) {
      res.json({
        _id: politician._id,
        name: politician.name,
        age: politician.age,
        email: politician.email,
        party: politician.party,
        image: politician.image,
        state: politician.state,
        phone: politician.phone,
        about: politician.about,
        twitter: politician.twitter,
        facebook: politician.facebook,
        instagram: politician.instagram,
        linkedin: politician.linkedin,
        createdAt: politician.createdAt,
      });
    } else {
      res.status(400);
      throw new Error("invalid developer credentials");
    }
  })
);

// ? get politician by id
PoliticianRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const politician = await Politician.findById(req.params.id);
    if (!politician) {
      res.status(404).json({ msg: "politician not found" });
    } else {
      res.json(politician);
    }
  })
);

// ? update politician by id
PoliticianRouter.put(
  "/profile/:id",
  asyncHandler(async (req, res) => {
    const politician = await Politician.findById(req.params.id);
    if (politician) {
      (politician.name = req.body.name || politician.name),
        (politician.age = req.body.age || politician.age),
        (politician.email = req.body.email || politician.email),
        (politician.party = req.body.party || politician.party),
        (politician.image = req.body.image || politician.image),
        (politician.state = req.body.state || politician.state),
        (politician.phone = req.body.phone || politician.phone),
        (politician.about = req.body.about || politician.about),
        (politician.twitter = req.body.twitter || politician.twitter),
        (politician.facebook = req.body.facebook || politician.facebook),
        (politician.instagram = req.body.instagram || politician.instagram),
        (politician.linkedin = req.body.linkedin || politician.linkedin);
      const updatedPolitician = await politician.save();
      res.json({
        _id: updatedPolitician._id,
        name: updatedPolitician.name,
        age: updatedPolitician.age,
        email: updatedPolitician.email,
        party: updatedPolitician.party,
        image: updatedPolitician.image,
        state: updatedPolitician.state,
        phone: updatedPolitician.phone,
        about: updatedPolitician.about,
        twitter: updatedPolitician.twitter,
        facebook: updatedPolitician.facebook,
        instagram: updatedPolitician.instagram,
        linkedin: updatedPolitician.linkedin,
        createdAt: updatedPolitician.createdAt,
      });
    } else {
      throw new Error("politician not found");
    }
  })
);

// ? delete politician by id
PoliticianRouter.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const politician = await Politician.findByIdAndDelete(req.params.id);
    if (politician) {
      res.json({ msg: `politician deleted ${req.params.id}` });
    } else {
      throw new Error("politician not found");
    }
  })
);
module.exports = PoliticianRouter;
