import React from "react";
import instagram from "../Assets/instagram.png";
import gmail from "../Assets/gmail.png";
import facebook from "../Assets/facebook2.png";


const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <p className="Contact-Head">Contact</p>
      <div class="row">
      <div class="fb">
        <img src={facebook} alt="Facebook"/>
        <p>Rayi Nuriman</p>
      </div>
      <div class="gm">
        <img src={gmail} alt="GMAIL"/>
        <p>Rayinuriman@upi.edu</p>
      </div>
      <div class="ig">
        <img src={instagram} alt="Instagram"/>
        <p>mulskymax</p>
      </div>
  </div>
    </div>
  );
};

export default Contact;
