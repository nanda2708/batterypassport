import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get the ID from the URL

const BatteryDetails = () => {
  const { id } = useParams(); // Get the MongoDB _id from the URL
  const [batteryData, setBatteryData] = useState(null); // State to store battery data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    // Function to fetch battery data based on the MongoDB _id
    const fetchBatteryDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/batteries/${id}`);
        
        if (!response.ok) {
          throw new Error("Battery not found or error occurred");
        }

        const data = await response.json();
        setBatteryData(data); // Set battery data
        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        setError(err.message); // Set error if the request fails
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchBatteryDetails(); // Call the function to fetch battery data
  }, [id]); // Re-fetch data if ID changes

  // If data is still loading, show loading message
  if (loading) return <div className="text-white">Loading...</div>;

  // If an error occurred, show the error message
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-700 via-blue-800 to-gray-900 text-white flex flex-col items-center py-10 px-6">
      <h1 className="text-4xl font-extrabold text-teal-400 mb-8">Battery Details</h1>
      
      <div className="max-w-4xl w-full space-y-6">
        {batteryData ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <BatteryCard title="Battery Passport ID" value={batteryData._id} />
            <BatteryCard title="Manufacturer Identity" value={batteryData.manufacturerIdentity} />
            <BatteryCard title="Manufacturer Place" value={batteryData.manufacturerPlace} />
            <BatteryCard title="Manufacture Date" value={new Date(batteryData.manufactureDate).toLocaleDateString()} />
            <BatteryCard title="Battery Category" value={batteryData.batteryCategory} />
            <BatteryCard title="Battery Weight" value={`${batteryData.batteryWeight} kg`} />
            <BatteryCard title="Battery Status" value={batteryData.batteryStatus} />
            <BatteryCard title="Labels & Certifications" value={batteryData.labelsAndCertifications} />
            <BatteryCard title="Compliance Test Results" value={batteryData.complianceTestResults} />
            <BatteryCard title="Supply Chain Report" value={batteryData.supplyChainReport} />
            <BatteryCard title="Carbon Footprint" value={batteryData.carbonFootprint} />
            <BatteryCard title="CF Performance Class" value={batteryData.cfPerformanceClass} />
            <BatteryCard title="Battery Chemistry" value={batteryData.batteryChemistry} />
            <BatteryCard title="Circularity Report" value={batteryData.circularityReport} />
            <BatteryCard title="Safety Instructions" value={batteryData.safetyInstructions} />
            <BatteryCard title="Capacity SoH" value={batteryData.capacitySoH} />
            <BatteryCard title="Expected Lifetime" value={batteryData.expectedLifetime} />
            <BatteryCard title="Negative Events" value={batteryData.negativeEvents} />
          </div>
        ) : (
          <p className="text-white text-center">No battery data found.</p>
        )}
      </div>
    </div>
  );
};

// Battery card component
const BatteryCard = ({ title, value }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
    <h3 className="text-xl font-semibold text-teal-400 mb-2">{title}</h3>
    <p className="text-lg text-white">{value || "Not Available"}</p>
  </div>
);

export default BatteryDetails;
