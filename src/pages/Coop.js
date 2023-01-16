import React from 'react';
import 'animate.css';
import '../App.css';
import { useState } from 'react';
import Resume from '../Chun Ye Resume.pdf';
import { BsGithub, BsLinkedin, BsFileEarmarkTextFill } from "react-icons/bs";
import { Contact } from '../components/Contact';
const ford = () => {
  return (
    <h1> hi </h1>
  )
}

const bmo = () => {
  return (
    <h1> hi </h1>
  )
}

const lcg = () => {
  return (
    <h1> hi </h1>
  )
}

const rf = () => {
  return (
    <h1> hi </h1>
  )
}

export const Coop = () => {

  return (
    <div className='content' class='animate__animated animate__bounceInUp' style={{color: "#754E4E"}}>
      <h2>As a BCS/BBA double degree student, I am interested in software development, <br/> combinatorics & optimization (who doesn't adore lin alg?), and consulting.</h2>

      <h2>Click on any of the followings to view my past experiences.</h2>

      <Contact />
    </div>
  );
}