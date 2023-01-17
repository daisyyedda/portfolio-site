import React from 'react';
import 'animate.css';
import '../App.css';
import { useState } from 'react';
import { Contact } from '../components/Contact';
import { Copyright } from '../components/Copyright';

export const About = () => {
  const profile = require('../img/profile.jpeg');
  const [email, seeEmail] = useState("Click to see email");

  return (
    <div className='content animate__animated animate__bounceInUp' style={{color: "white"}}>
      <h1>Hi there, thanks for visiting my site.</h1>
      <button className="btn" 
        onClick={() => {
        email === "Click to see email" ? seeEmail("c42ye@uwaterloo.ca") : seeEmail("Click to see email");
      }}
      >{email}</button>
      <h2>Chun (Daisy) Ye</h2>
      <p style={{fontSize: "large"}}> University of Waterloo && Wilfrid Laurier University
      <br/><br/>
      Bachelor of Computer Science && Bachelor of Business Administration (Double Degree)
      <br/><br/>
      Artificial Intelligence Specialization && Combinatorics and Optimization Minor </p>
      <br/>
      <Contact />
      <br/>
      <img src={profile} alt="Daisy Profile Pic" style={{borderRadius: "50%"}}/>
      <Copyright />
    </div>
  );
}
