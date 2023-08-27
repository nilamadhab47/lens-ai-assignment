import React from "react";
import { Parallax } from "react-parallax";

const About = () => {
  return (
    <Parallax
    bgImage="/images/bg.jpeg"
    bgImageAlt="bg"
    strength={800}
    
    >

   
    <div className="section" style={{position:"relative", zIndex:"12"}} id="about">
      <div className="about-container bg-white text-black lg:mr-[10rem] lg:ml-[10rem] ml-4 mr-4 pr-4 pl-4 lg:pr-8 lg:pl-8 ">
        <h1 className="text-primaryT lg:text-[52px] text-[30px]  text-center mb-8 mt-8">About</h1>
        <p className="lg:text-2xl text-[18px] pb-8" style={{lineHeight:"1.6"}}>
          Neurodactyl is a technology start-up founded in 2023 by specialists in
          machine vision and deep learning technologies. We have vast experience
          on biometric markets and have been working with different biometric
          technologies starting from 2014, when neural network based facial
          recognition technologies have completely changed the market. Today we
          are focused on creating cutting edge algorithms in fingerprint
          recognition, striving to bring a new life and power of new mobile
          technologies to the market of old-school biometrics. We aim to make
          identification powered by biometrics convenient, easy and reliable and
          help to protect personal and financial data in new digital reality.
          Besides fingerprint recognition our R&D team also doing research in
          other biometrics like face, voice and iris.
        </p>
      </div>
    </div>
    </Parallax>
  );
};

export default About;
