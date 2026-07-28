import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Projects';
import Contact from './components/Contact';
import SkillMatch from './components/SkillMatch';
import QRLog from './components/QRLog';
import FinanceTracker from './components/FinanceTracker';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/skillmatch" element={<SkillMatch />} />
        <Route path="/project/qrlog" element={<QRLog />} />
        <Route path="/project/finance" element={<FinanceTracker />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;