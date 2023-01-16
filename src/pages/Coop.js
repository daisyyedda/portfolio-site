import React from 'react';
import 'animate.css';
import '../App.css';
import { useState } from 'react';
import { Contact } from '../components/Contact';
import Stack from 'react-bootstrap/Stack';
import { Copyright } from '../components/Copyright';
import { set } from 'lodash';

export const Coop = () => {
  const ford = require('../img/fordpro.png');
  const rf = require('../img/rf.png');
  const lcg = require('../img/lcg.jpeg');
  const bmo = require('../img/bmo.jpeg');
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);

  const handleClick = () => {
    setClick(!click);
  }
  const handleClick2 = () => {
    setClick2(!click2);
  }
  const handleClick3 = () => {
    setClick3(!click3);
  }
  const handleClick4 = () => {
    setClick4(!click4);
  }

  return (
    <div className='content' class='animate__animated animate__bounceInUp' style={{color: "white"}}>
      <h2>I am interested in software development, combinatorics & optimization (who doesn't adore lin alg?), and consulting.</h2>
      <h3> Click on the logos to view more details.</h3>
      <Stack gap={200}>
        <div className="bg-light border">
          <h3 className='pos'>Software Engineer - Ford Pro (Jan 2023 - Present)</h3>
          <img className="company" alt="Ford Pro logo" src={ford} onClick={handleClick}></img> 
          {click ? 
          <p class='animate__animated animate__bounceInRight'>
            • Embrace Agile-eXtreme Programming principles to deliver innovative software products for Ford Pro Tech.
          </p>  
           : null}
        </div>
        <div className="bg-light border">
          <h3 className='pos'>Business Analyst - BMO Financial Group (Jan 2022 - Apr 2022)</h3>
          <img className="company" alt="BMO logo" src={bmo} onClick={handleClick2}></img>
          {click2 ? 
          <p class='animate__animated animate__bounceInRight'>
            • Improved the performance of BMO Client Portal by testing persisting bugs and writing test cases in System
            Integration Testing, User Acceptance Testing, and Regression Testing cycles. 
            <br/> <br/>
            • Facilitated communication and collaboration between business and development teams by raising, examining, and optimizing JIRA tickets.
            <br/> <br/>
            • Resolved over 50 system defects and French translation errors for March and May 2022 releases.
          </p> : null}
        </div>
        <div className="bg-light border">
          <h3 className='pos'>Consultant - Laurier Consulting Club (Sep 2021 - Dec 2021)</h3>
          <img className="company" alt="LCG logo" src={lcg} onClick={handleClick3}></img>
          {click3 ? 
          <p class='animate__animated animate__bounceInRight'>
            • Consulted with stakeholders to analyze companies’ demographics and market development plans.
            <br/> <br/>
            • Designed and implemented strategies for an AI start-up to target small to medium e-commerce businesses.
            <br/> <br/>
            • Enhanced understanding in natural language processing (NLP) and website content generation.
          </p> : null}      
        </div>
        <div className="bg-light border">
          <h3 className='pos'>Associate Consultant - RecruitFirst (May 2021 - Aug 2021)</h3> 
          <img className="company" alt="RF logo" src={rf} onClick={handleClick4}></img>
          {click4 ? 
          <p class='animate__animated animate__bounceInRight'>
            • Analyzed market trends and opportunities for FMCG industries to implement sustainable and long-term CRM strategies for the clients.
            <br/> <br/>
            • Collected, classified, and organized relevant candidate information to meet the hiring needs of the clients.
            <br/> <br/>
            • Supported three hiring seasons by providing clients with compatible candidates and procedural assistance.
            <br/> <br/>
            • Expanded the team’s existing candidate database by roughly 20% via researching and talent landscaping.
          </p> : null}
        </div>
        
      </Stack>
      <br/><br/><br/>
      <Contact />
      <Copyright />
    </div>
  );
}
