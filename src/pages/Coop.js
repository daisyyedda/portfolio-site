import React from 'react';
import 'animate.css';
import '../App.css';
import { useState } from 'react';
import Resume from '../Chun Ye Resume.pdf';
import { BsGithub, BsLinkedin, BsFileEarmarkTextFill } from "react-icons/bs";

const 
export const Coop = () => {

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
      <h2>As a BCS/BBA double degree student, I am interested in software development, <br/> combinatorics & optimization (who doesn't adore lin alg?), and consulting.</h2>

      <h2>Click on any of the followings to view my past experiences.</h2>

      <button className="btn" onClick={toResume}> <BsFileEarmarkTextFill style={{size: "large"}}/>Resume</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn"  onClick={toGitHub}> <BsGithub style={{size: "large"}}/> GitHub </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn" onClick={toLinkedIn}><BsLinkedin style={{size: "large"}}/> LinkedIn </button>
    </div>
  );
}