const express = require("express");
const mongoose = require("mongoose");
const Battery = require("../models/batterymodel"); // Ensure the correct path to the model

const router = express.Router();

// Route to insert a new battery document
router.post("/", async (req, res) => {
  try {
      const battery = new Battery(req.body); // Create a new battery from request body
      await battery.save(); // Save the battery to the database
      console.log("Battery inserted:", battery);
      res.status(201).json(battery); // Respond with the saved battery
  } catch (error) {
      console.error("Error inserting battery:", error);
      res.status(500).json({ message: "Server error while inserting battery." });
  }
});


// **Fetch all batteries**
router.get("/", async (req, res) => {
  try {
    const batteries = await Battery.find();
    res.status(200).json(batteries);
  } catch (error) {
    console.error("Error fetching all batteries:", error);
    res.status(500).json({ message: "Server error while fetching batteries." });
  }
});

// **Fetch a specific battery by its batteryPassportID or _id**
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Received ID:", id); // Log received ID for debugging

    // Validate the ID format for _id in MongoDB (ObjectId validation)
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.warn(`Invalid Battery ID format: ${id}`);
      return res.status(400).json({ message: "Invalid battery ID format" });
    }

    // Fetch the battery by ID or batteryPassportID
    const battery = await Battery.findOne({
      $or: [{ _id: id }, { batteryPassportID: id }],
    });

    if (!battery) {
      console.warn(`Battery with ID ${id} not found.`);
      return res.status(404).json({ message: "Battery not found" });
    }

    console.log("Battery found:", battery);
    res.status(200).json(battery); // Return the found battery details

  } catch (error) {
    console.error("Error fetching battery:", error);
    res.status(500).json({ message: "Server error while fetching battery." });
  }
});

module.exports = router; // Export routes for app.js to use
