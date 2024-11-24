const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Adjust if needed
  }));
  
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/batteries', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Define the Battery Schema
const batterySchema = new mongoose.Schema({
  batteryPassportID: { type: String, required: true },
  manufacturerIdentity: String,
  manufacturerPlace: String,
  manufactureDate: Date,
  batteryCategory: String,
  batteryWeight: Number,
  batteryStatus: String,
  labelsAndCertifications: String,
  complianceTestResults: String,
  supplyChainReport: String,
  carbonFootprint: String,
  cfPerformanceClass: String,
  batteryChemistry: String,
  circularityReport: String,
  safetyInstructions: String,
  capacitySoH: String,
  expectedLifetime: String,
  negativeEvents: String,
});

// Create a Model for Batteries
const Battery = mongoose.model('Battery', batterySchema);

// Endpoint to fetch battery details by ID
app.get('/api/batteries/:id', async (req, res) => {
  console.log('Received ID:', req.params.id); // Debugging log
  try {
    const battery = await Battery.findById(req.params.id);
    console.log(battery)
    if (!battery) {
      return res.status(404).send({ error: 'Battery not found' });
    }
    res.send(battery);
  } catch (error) {
    console.error('Error fetching battery data:', error);
    res.status(500).send({ error: 'Error fetching battery data' });
  }
});

// Endpoint to register a new battery
app.post('/api/batteries', async (req, res) => {
  console.log('Incoming request to register battery:', req.body); // Debugging log
  try {
    const battery = new Battery(req.body);
    await battery.save();
    res.status(201).send(battery); // Return the saved battery
  } catch (error) {
    console.error('Error saving battery:', error.message); // Log the error for debugging
    res.status(400).send({ error: 'Invalid data format or missing fields' });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
