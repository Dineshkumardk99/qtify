import React from "react";
import "./HeroSection.css";
import HeroImage from "../../assets/Hero-Image.png";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>100 Thousand Songs, ad-free </h1>
        <h1> Over thousands podcast episodes</h1>
      </div>

      <div className="hero-image">
        <img src={HeroImage} alt="heroimage" width={212} />
      </div>
    </div>
  );
};

export default HeroSection;
