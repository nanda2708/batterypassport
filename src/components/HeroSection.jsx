import { response } from "express";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiQrScan } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [passportID, setPassportID] = useState("");
  
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!passportID) {
      alert("Please enter a valid passport ID.");
      return;
    }

    navigate(`/battery/${passportID}`);

    // fetch(`http://localhost:5000/api/batteries/${passportID}`).then(reponse => response.json())

    console.log(response)
  };

  const handleSampleIDClick = () => {
    setPassportID("ABC");
  };

  const handleQrScan = () => {
    alert("QR scan feature coming soon!");
  };

  const handleRegisterClick = () => {
    navigate("/RegisterBattery");
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-teal-700 via-blue-800 to-gray-900 text-white flex flex-col font-inter">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 bg-opacity-50 backdrop-blur-md fixed w-full z-10 shadow-md">
        <h1 className="text-3xl font-bold text-white hover:text-blue-400 transition-all duration-300">
          Battery<span className="text-teal-400">Pass</span>
        </h1>
        <button
          onClick={handleRegisterClick}
          className="bg-teal-500 px-6 py-2 rounded-full text-white hover:bg-teal-400 transition-all duration-300"
        >
          Register Battery
        </button>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center mt-16 px-6 space-y-8">
        <h2 className="text-6xl font-extrabold leading-tight text-white">
          Powering the Future <br />
          <span className="text-teal-400">One Battery at a Time</span>
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl">
          Welcome to BatteryPass—a revolution in sustainable battery tracking. Enter a battery passport ID or scan the QR code to access battery details.
        </p>

        {/* Search Bar */}
        <div className="flex items-center space-x-2 bg-gray-800 rounded-full px-6 py-4 w-full max-w-xl shadow-lg">
          <input
            type="text"
            placeholder="Enter battery passport ID"
            value={passportID}
            onChange={(e) => setPassportID(e.target.value)}
            className="flex-grow bg-transparent text-lg border-none outline-none text-white placeholder-gray-400"
          />
          <button
            onClick={handleSearch}
            className="text-teal-400 hover:text-teal-300 transition-all duration-300"
          >
            <AiOutlineSearch size={28} />
          </button>
          <button
            onClick={handleQrScan}
            className="text-teal-400 hover:text-teal-300 transition-all duration-300"
          >
            <BiQrScan size={28} />
          </button>
        </div>

        <button
          onClick={handleSampleIDClick}
          className="text-teal-300 hover:text-teal-200 text-lg underline transition-all duration-300"
        >
          Use a sample battery passport ID
        </button>
      </main>

      {/* About Section */}
      <section className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-teal-400 mb-6">About the Project</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            This project is a collaborative effort by a group of four students: 
            <span className="text-teal-400"> Choulapally Sai Nanda Gopal</span>, 
            <span className="text-teal-400"> Anurag Rauniyar</span>, 
            <span className="text-teal-400"> Anirup Bhattacharjee</span>, and 
            <span className="text-teal-400"> Shreya Mukharjee</span>, under the mentorship of 
            <span className="text-blue-400"> Dr. Ganesh Madabattula</span>. Together, we aim to pioneer a 
            sustainable and scalable solution for battery tracking worldwide.
          </p>
        </div>
      </section>

      {/* Vision Gallery */}
      <section className="py-12 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold text-teal-400 text-center mb-6">
            Our Vision in Action
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img
              src="https://i1.rgstatic.net/ii/profile.image/619990571053057-1524828679839_Q512/Ganesh-Madabattula.jpg"
              alt="Vision 1"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://media.licdn.com/dms/image/v2/D4E22AQH5974uhBV4NQ/feedshare-shrink_800/feedshare-shrink_800/0/1703337619289?e=2147483647&v=beta&t=yEXsTfYkk9AY-EBXN9CXJmEuXeasGJI_QjfTOUUrLew"
              alt="Vision 2"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://chemeng.iisc.ac.in/wp-content/uploads/2024/05/Ganesh_Madabattula.jpg"
              alt="Vision 3"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center text-gray-400">
        <p className="text-sm">© 2024 Battery Pass™</p>
        <p className="text-xs mt-2">
          Disclaimer: The industrial partners of this project have provided sample data. The values shown are for demonstration purposes only.
        </p>
      </footer>
    </div>
  );
};

export default HeroSection;
