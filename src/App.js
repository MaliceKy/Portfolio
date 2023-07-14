// src/App.js
import React from 'react';
import './App.css';
import LandingPage from './components/landingpage';
import About from './components/aboutpage';
import Projects from './components/projectspage';
import NavBar from './components/navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;

