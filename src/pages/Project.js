import React from 'react';
import 'animate.css';
import '../App.css';
import { useState } from 'react';
import { Contact } from '../components/Contact';
import Stack from 'react-bootstrap/Stack';
import { Copyright } from '../components/Copyright';

export const Project = () => {
  const cc3k = require('../img/cc3k.png');
  const shop = require('../img/shop.jpeg');
  const reversi = require('../img/reversi.png');
  const ucharity = require('../img/ucharity.png');
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
    <div className='content animate__animated animate__bounceInUp' style={{color: "white"}}>
      <h2>I enjoy doing side projects to enhance my knowledge in full-stack development and empower the communities.</h2>
      <h3>Click the pictures to view project repositories.</h3>
      <Stack gap={200}>
        <div className="bg-light border">
          <h3 className='pos'>Online Shop App (Node.js /  EJS  /  MongoDB)</h3>
          <img className="project" alt="Online Shop App Snapshot" src={shop} onClick={handleClick}></img> 
          {click ? 
          window.open('https://github.com/daisyyedda/Online-Shop-App.git', "_self")
           : null}
        </div>
        <div className="bg-light border">
          <h3 className='pos'>Game of ChamberCrawler3000+ (C++) </h3>
          <img className= "project" alt="CC3k+ Snapshot" src={cc3k} onClick={handleClick2}></img>
          {click2 ? window.open("https://github.com/daisyyedda/ChamberCrawler3000.git", "_self") : null}
        </div>
        <div className="bg-light border">
          <h3 className='pos'> Game of Reversi (C++)</h3>
          <img className="project" alt="Reversi Snapshot" src={reversi} onClick={handleClick3}></img>
          {click3 ? window.open("https://github.com/daisyyedda/Reversi.git", "_self") : null}      
        </div>
        <div className="bg-light border">
          <h3 className='pos'>UCharity Website (HTML / CSS / JavaScript) </h3> 
          <img className="project" alt="UCharity Logo" src={ucharity} onClick={handleClick4}>
            {click4 ? window.open("https://github.com/daisyyedda/UCharity.git", "_self") : null}
          </img>
        </div>
      </Stack>
      <br/><br/><br/>
      <Contact />
      <Copyright />
    </div>
  );
}
