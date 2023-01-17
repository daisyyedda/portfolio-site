import React from 'react';
import 'animate.css';
import '../App.css';
import { useState } from 'react';
import Axios from 'axios';
import { Contact } from '../components/Contact';
import { Copyright } from '../components/Copyright';

export const Mathie = () => {
  const [ number, setNumber] = useState(null);
  const [ fact, setFact ] = useState('');
  const fetchData = () => {
    <script>
    {
      Axios.get(`http://numbersapi.com/${number}`).then((res) => {
        setFact(res.data);
      })
      }
    </script>
  };

  return (
    <div className='content animate__animated animate__bounceInUp' style={{color: "white"}}>
      <h2 className='pos'>Enter/select your favourite integer:</h2>
      <input
        type="number"
        onChange={(event) => {setNumber(event.target.value);}}
        style={{width: "100px", height: "35px"}}
      />
      <button className="btn" onClick={fetchData}>Submit</button>
      <h2 className='pos'>A fun fact of the integer is:</h2>
      <h2> { fact } </h2>
      <br/><br/><br/>
      <Contact />
      <Copyright />
    </div>
  );
}
