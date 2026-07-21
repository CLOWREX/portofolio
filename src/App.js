import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Projects';
import Contact from './components/Contact';
import SkillMatch from './components/SkillMatch';
import WebsiteProject from './components/Websiteproject';
import WebProject from './components/Webproject';

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
        <Route path="/project/website" element={<WebsiteProject />} />
        <Route path="/project/game" element={<WebProject />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;