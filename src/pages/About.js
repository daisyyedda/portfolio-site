import React from 'react';
import 'animate.css';
import '../App.css';
import '../img/profile.jpeg';
import { useState } from 'react';
import Resume from '../Chun Ye Resume.pdf';

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
    <div className='content' class='animate__animated animate__bounceInUp'>
      <h1>Hi there, thanks for visiting my site.</h1>
      <button onClick={() => {
        email === "Click to see Email" ? seeEmail("c42ye@uwaterloo.ca") : seeEmail("Click to see Email");
      }}
      >{email}</button>
      <h2>Chun (Daisy) Ye</h2>
      <p> University of Waterloo && Wilfrid Laurier University </p>
      <p> Bachelor of Computer Science && Bachelor of Business Administration (Double Degree) </p>
      <p> Artificial Intelligence Specialization && Combinatorics and Optimization Minor </p>
      <button onClick={toResume}>Resume</button>
      <button onClick={toGitHub}>GitHub</button>
      <button onClick={toLinkedIn}>LinkedIn</button>
      <p></p>
      <img src={profile} alt="Daisy Profile Pic" />
    </div>
  );
}
