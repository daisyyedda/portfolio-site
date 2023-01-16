import React from 'react';
import 'animate.css';
import '../App.css';
import '../img/profile.jpeg';
import { useState } from 'react';
import { Contact } from '../components/Contact';

export const About = () => {
  const profile = require('../img/profile.jpeg');
  const [email, seeEmail] = useState("Click to see Email");

  return (
    <div className='content' class='animate__animated animate__bounceInUp' style={{color: "#754E4E"}}>
      <h1>Hi there, thanks for visiting my site.</h1>
      <button className="btn" 
        onClick={() => {
        email === "Click to see Email" ? seeEmail("c42ye@uwaterloo.ca") : seeEmail("Click to see Email");
      }}
      >{email}</button>
      <h2>Chun (Daisy) Ye</h2>
      <p style={{fontSize: "large"}}> University of Waterloo && Wilfrid Laurier University
      <br/><br/>
      Bachelor of Computer Science && Bachelor of Business Administration (Double Degree)
      <br/><br/>
      Artificial Intelligence Specialization && Combinatorics and Optimization Minor </p>
      <Contact />
      <img src={profile} alt="Daisy Profile Pic" style={{borderRadius: "500px"}}/>
    </div>
  );
}
