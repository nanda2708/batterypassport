const mongoose = require("mongoose");

const batterySchema = new mongoose.Schema({
  batteryPassportID: { type: String, required: true },
  manufacturerIdentity: { type: String, required: true },
  manufacturerPlace: { type: String, required: true },
  manufactureDate: { type: Date, required: true },
  batteryCategory: { type: String, required: true },
  batteryWeight: { type: Number, required: true },
  batteryStatus: { type: String, required: true },
  labelsAndCertifications: { type: String, required: true },
  complianceTestResults: { type: String, required: true },
  supplyChainReport: { type: String, required: true },
  carbonFootprint: { type: String, required: true },
  cfPerformanceClass: { type: String, required: true },
  batteryChemistry: { type: String, required: true },
  circularityReport: { type: String, required: true },
  safetyInstructions: { type: String, required: true },
  capacitySoH: { type: String, required: true },
  expectedLifetime: { type: String, required: true },
  negativeEvents: { type: String, required: true },
});

module.exports = mongoose.model("Battery", batterySchema);
