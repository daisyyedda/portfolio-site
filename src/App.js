import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Project } from './pages/Project';
import { About } from './pages/About';
import { Coop } from './pages/Coop';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={< About />} />
          <Route path="/project" element={< Project />} />
          <Route path="/coop" element={< Coop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
