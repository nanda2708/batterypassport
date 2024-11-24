import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BatteryDetails = () => {
  const { batteryId } = useParams();
  const [batteryData, setBatteryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBatteryData = async () => {
      try {
        console.log(`Fetching data for batteryId: ${batteryId}`);
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/batteries/${batteryId}`);
        if (!response.ok) {
          throw new Error('Battery not found');
        }
        const data = await response.json();
        console.log('Battery data:', data);
        setBatteryData(data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (batteryId) {
      fetchBatteryData();
    }
  }, [batteryId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin border-4 border-t-transparent border-blue-500 w-16 h-16 rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-5 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  if (!batteryData) {
    return (
      <div className="text-center py-5">
        <p>No battery details found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center mb-5">Battery Details</h1>
      <div className="space-y-4">
        <div>
          <span className="font-bold">Battery ID:</span> {batteryData._id}
        </div>
      </div>
    </div>
  );
};

export default BatteryDetails;
