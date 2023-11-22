import React from "react";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container">

      
      <div className="about-section-text-container">
        <p className="Head">About Me</p>
        <p className="primary-text">
        Perkenalkan, Saya Rayi Nur Iman, Mahasiswa jurusan
        Pendidikan Ilmu Komputer dari Universitas Pendidikan Indonesia. Saya mulai menjadi mahasiswa di UPI pada tahun 2022, Lulus dari SMAN 3 CImahi pada tahun 2022 dan tinggal di Cimahi,
        Keinginan saya adalah memiliki pola hidup yang sehat walaupun sampai saat ini masih dirasa sulit untuk merealisasikannya   
        
        </p>
      
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
    </div>
  );
};

export default About;
