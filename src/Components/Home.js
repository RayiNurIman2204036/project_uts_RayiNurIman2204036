import React from "react";
import BannerBackground from "../Assets/home-banner-background (2).png";
import Navbar from "./Navbar";


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container"> 
         <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="home-heading">
          WELCOME TO MY PROFILE WEBPAGE
          </h1>
          <p className="home-primary-text">
          A small page where I introduce my self and tell a couple things about me
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
