import React from 'react';
import 'animate.css';
import '../App.css';
import { Contact } from '../components/Contact';

export const About = () => {
  const profile = require('../img/profile.jpeg');

  return (
    <div style={{color: "black", fontFamily: 'Arial', fontWeight: 'light'}}>
      <img src={profile} alt="Daisy Profile Pic" style={{borderRadius: "50%", width: "300px", marginTop: "150px"}}/>
      <br/>
      <h1>Chun (Daisy) Ye</h1>
      <p style={{fontSize: "20px"}}>Engineer&nbsp;&nbsp;|&nbsp;&nbsp;Aspiring Freelancer</p>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Contact/>
    </div>
  );
}
