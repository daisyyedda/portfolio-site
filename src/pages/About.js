import React from 'react';
import 'animate.css';
import '../App.css';
import '../img/profile.jpeg';
import { useState } from 'react';
import Resume from '../Chun Ye Resume.pdf';
import { BsGithub, BsLinkedin, BsFileEarmarkTextFill } from "react-icons/bs";

export const About = () => {
  const profile = require('../img/profile.jpeg');
  const [email, seeEmail] = useState("Click to see Email");
  const toResume = () => {
    return window.open(Resume);
  }
  const toGitHub = () => {
    return window.open('https://github.com/daisyyedda');
  }
  const toLinkedIn = () => {
    return window.open('https://www.linkedin.com/in/chun-ye-5766ba18b/');
  }

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
      <button className="btn" onClick={toResume}> <BsFileEarmarkTextFill style={{size: "large"}}/>Resume</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn"  onClick={toGitHub}> <BsGithub style={{size: "large"}}/> GitHub </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn" onClick={toLinkedIn}><BsLinkedin style={{size: "large"}}/> LinkedIn </button>
      <p></p>
      <img src={profile} alt="Daisy Profile Pic" style={{borderRadius: "500px"}}/>
    </div>
  );
}
