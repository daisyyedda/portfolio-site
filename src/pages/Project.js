import React from 'react';
import 'animate.css';
import '../App.css';
import { Contact } from '../components/Contact';
import Stack from 'react-bootstrap/Stack';

export const Project = () => {
  const cc3k = require('../img/cc3k.png');
  const shop = require('../img/shop.jpeg');
  const reversi = require('../img/reversi.png');
  const ucharity = require('../img/ucharity.png');

  const openShop = () => {
    return window.open('https://github.com/daisyyedda/Online-Shop-App.git', "_blank");
  }

  const openCC3K = () => {
    return window.open('https://github.com/daisyyedda/ChamberCrawler3000.git', "_blank");
  }

  const openReversi = () => {
    return window.open('https://github.com/daisyyedda/Reversi.git', "_blank");
  }

  const openUCharity = () => {
    return window.open('https://github.com/daisyyedda/UCharity.git', "_blank");
  }

  return (
    <div className='content animate__animated animate__bounceInUp'>
      <h2>I enjoy doing side projects to enhance my knowledge in full-stack development and empower the communities.</h2>
      <h3>Click the pictures to view project repositories.</h3>
      <Stack gap={200}>
        <div className="bg-light border">
          <h3 className='pos'>Online Shop App (Node.js /  EJS  /  MongoDB)</h3>
          <img className="project" alt="Online Shop App Snapshot" src={shop} onClick={openShop}></img> 
        </div>
        <div className="bg-light border">
          <h3 className='pos'>Game of ChamberCrawler3000+ (C++) </h3>
          <img className= "project" alt="CC3k+ Snapshot" src={cc3k} onClick={openCC3K}></img>
        </div>
        <div className="bg-light border">
          <h3 className='pos'> Game of Reversi (C++)</h3>
          <img className="project" alt="Reversi Snapshot" src={reversi} onClick={openReversi}></img>
        </div>
        <div className="bg-light border">
          <h3 className='pos'>UCharity Website (HTML / CSS / JavaScript) </h3> 
          <img className="project" alt="UCharity Logo" src={ucharity} onClick={openUCharity}>
          </img>
        </div>
      </Stack>
      <br/><br/><br/>
      <Contact />
    </div>
  );
}
