import React, { useState } from "react";

const BatteryRegistration = () => {
  const [formData, setFormData] = useState({
    batteryPassportID: "",
    manufacturerIdentity: "",
    manufacturerPlace: "",
    manufactureDate: "",
    batteryCategory: "",
    batteryWeight: "",
    batteryStatus: "Original",
    labelsAndCertifications: "",
    complianceTestResults: "",
    supplyChainReport: "",
    carbonFootprint: "",
    cfPerformanceClass: "",
    batteryChemistry: "",
    circularityReport: "",
    safetyInstructions: "",
    capacitySoH: "",
    expectedLifetime: "",
    negativeEvents: "",
  });

  const [expandedSections, setExpandedSections] = useState({
    generalInfo: true,
    manufacturingDetails: false,
    complianceCertifications: false,
    technicalDetails: false,
    lifecyclePerformance: false,
  });

  // Toggle the visibility of sections
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate all fields
    for (const key in formData) {
      if (!formData[key]) {
        alert(`Field "${key}" is required.`);
        return;
      }
    }
  
    try {
      // API call to save data to the backend
      const response = await fetch("http://localhost:5000/api/batteries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      // Check if the response is successful
      if (response.ok) {
        const data = await response.json();
        alert("Battery registered successfully!");
        console.log("Server Response:", data);
  
        // Clear the form after successful submission
        setFormData({
          batteryPassportID: "",
          manufacturerIdentity: "",
          manufacturerPlace: "",
          manufactureDate: "",
          batteryCategory: "",
          batteryWeight: "",
          batteryStatus: "Original",
          labelsAndCertifications: "",
          complianceTestResults: "",
          supplyChainReport: "",
          carbonFootprint: "",
          cfPerformanceClass: "",
          batteryChemistry: "",
          circularityReport: "",
          safetyInstructions: "",
          capacitySoH: "",
          expectedLifetime: "",
          negativeEvents: "",
        });
      } else {
        const errorText = await response.text(); // Read the error text from the response
        console.error("Error Response:", errorText); // Log for debugging
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error occurred while registering the battery:", error.message);
      alert("Failed to register the battery. Please try again.");
    }
  };
    
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-3xl space-y-6"
      >
        <h1 className="text-2xl font-bold text-center mb-6">Battery Registration</h1>

        {/* General Information */}
        <SectionToggle
          title="General Information"
          isExpanded={expandedSections.generalInfo}
          onClick={() => toggleSection("generalInfo")}
        >
          <InputField
            label="Battery Passport ID"
            name="batteryPassportID"
            value={formData.batteryPassportID}
            handleChange={handleChange}
          />
          <DropdownField
            label="Battery Status"
            name="batteryStatus"
            value={formData.batteryStatus}
            options={["Original", "Recycled"]}
            handleChange={handleChange}
          />
          <InputField
            label="Battery Category"
            name="batteryCategory"
            value={formData.batteryCategory}
            handleChange={handleChange}
          />
          <InputField
            label="Battery Weight (kg)"
            name="batteryWeight"
            value={formData.batteryWeight}
            handleChange={handleChange}
          />
        </SectionToggle>

        {/* Manufacturing Details */}
        <SectionToggle
          title="Manufacturing Details"
          isExpanded={expandedSections.manufacturingDetails}
          onClick={() => toggleSection("manufacturingDetails")}
        >
          <InputField
            label="Manufacturer Identity"
            name="manufacturerIdentity"
            value={formData.manufacturerIdentity}
            handleChange={handleChange}
          />
          <InputField
            label="Manufacturer Place"
            name="manufacturerPlace"
            value={formData.manufacturerPlace}
            handleChange={handleChange}
          />
          <InputField
            label="Manufacture Date"
            name="manufactureDate"
            type="date"
            value={formData.manufactureDate}
            handleChange={handleChange}
          />
        </SectionToggle>

        {/* Compliance and Certifications */}
        <SectionToggle
          title="Compliance and Certifications"
          isExpanded={expandedSections.complianceCertifications}
          onClick={() => toggleSection("complianceCertifications")}
        >
          <InputField
            label="Labels and Certifications"
            name="labelsAndCertifications"
            value={formData.labelsAndCertifications}
            handleChange={handleChange}
          />
          <InputField
            label="Compliance Test Results"
            name="complianceTestResults"
            value={formData.complianceTestResults}
            handleChange={handleChange}
          />
          <InputField
            label="Supply Chain Report"
            name="supplyChainReport"
            value={formData.supplyChainReport}
            handleChange={handleChange}
          />
        </SectionToggle>

        {/* Technical Details */}
        <SectionToggle
          title="Technical Details"
          isExpanded={expandedSections.technicalDetails}
          onClick={() => toggleSection("technicalDetails")}
        >
          <InputField
            label="Battery Chemistry"
            name="batteryChemistry"
            value={formData.batteryChemistry}
            handleChange={handleChange}
          />
          <InputField
            label="Carbon Footprint"
            name="carbonFootprint"
            value={formData.carbonFootprint}
            handleChange={handleChange}
          />
          <InputField
            label="CF Performance Class"
            name="cfPerformanceClass"
            value={formData.cfPerformanceClass}
            handleChange={handleChange}
          />
          <InputField
            label="Circularity Report"
            name="circularityReport"
            value={formData.circularityReport}
            handleChange={handleChange}
          />
        </SectionToggle>

        {/* Lifecycle and Performance */}
        <SectionToggle
          title="Lifecycle and Performance"
          isExpanded={expandedSections.lifecyclePerformance}
          onClick={() => toggleSection("lifecyclePerformance")}
        >
          <InputField
            label="Safety Instructions"
            name="safetyInstructions"
            value={formData.safetyInstructions}
            handleChange={handleChange}
          />
          <InputField
            label="Capacity SoH"
            name="capacitySoH"
            value={formData.capacitySoH}
            handleChange={handleChange}
          />
          <InputField
            label="Expected Lifetime"
            name="expectedLifetime"
            value={formData.expectedLifetime}
            handleChange={handleChange}
          />
          <InputField
            label="Negative Events"
            name="negativeEvents"
            value={formData.negativeEvents}
            handleChange={handleChange}
          />
        </SectionToggle>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 py-3 rounded text-white font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const SectionToggle = ({ title, isExpanded, onClick, children }) => (
  <div>
    <button
      type="button"
      onClick={onClick}
      className="w-full flex justify-between items-center text-left text-lg font-semibold py-3 px-4 bg-gray-700 rounded"
    >
      {title} <span>{isExpanded ? "▼" : "▶"}</span>
    </button>
    {isExpanded && <div className="mt-4 space-y-4">{children}</div>}
  </div>
);

const InputField = ({ label, name, value, handleChange, type = "text" }) => (
  <div>
    <label className="block font-semibold mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      className="w-full px-4 py-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
    />
  </div>
);

const DropdownField = ({ label, name, value, options, handleChange }) => (
  <div>
    <label className="block font-semibold mb-1">{label}</label>
    <select
      name={name}
      value={value}
      onChange={handleChange}
      className="w-full px-4 py-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring focus:ring-blue-500"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default BatteryRegistration;
