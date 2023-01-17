import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Project } from './pages/Project';
import { About } from './pages/About';
import { Coop } from './pages/Coop';
import { Mathie } from './pages/Mathie';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={< About />} />
          <Route path="/project" element={< Project />} />
          <Route path="/coop" element={< Coop />} />
          <Route path="/mathie" element={< Mathie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
