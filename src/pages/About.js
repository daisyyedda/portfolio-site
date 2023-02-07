import React from 'react';
import 'animate.css';
import '../App.css';
import { Contact } from '../components/Contact';

export const About = () => {
  const profile = require('../img/profile.jpeg');

  return (
    <div style={{color: "black", fontFamily: "Arial"}}>
      <img src={profile} alt="Daisy Profile Pic" style={{borderRadius: "50%", width: "300px", marginTop: "150px"}}/>
      <br/><br/>
      <h2>Chun (Daisy) Ye</h2>
      <h3>Engineer&nbsp;&nbsp;|&nbsp;&nbsp;Aspiring Freelancer</h3>
      <Contact/>
    </div>
  );
}
