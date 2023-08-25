import React from "react";
import "./HeroSection.css";
import BROLL from "../assets/BROLL.mp4";


function HeroSection() {

  return (
  <>
    <div className="hero-container">
      <video src={BROLL} autoPlay loop muted type="video/mp4"/>
        <div className="content">
          <h1 className="header">Bear's Bakery</h1>
          <p className="paragraph1">baked goods that will prevent bear attacks</p>
        </div>
    </div>
  </>
  );
};

export default HeroSection;
