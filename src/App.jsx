import React from "react";
import Test from "./components/test"
import './App.css'
import HeroSection from "./components/HeroSection";
import RegisterBattery from "./Pages/RegisterBattery";
import BatteryDetails from "./Pages/BatteryDetails";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<HeroSection />} />
        <Route path='/RegisterBattery' element={<RegisterBattery />}/>
        <Route path='/Hero' element={<HeroSection />}/>
        <Route path="/battery/:passportID" element={<BatteryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
