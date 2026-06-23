import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('about');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: '#0a0a0a',
      padding: '1.2rem 3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '0.5px solid #222'
    }}>
      <span style={{
        fontSize: '13px',
        fontWeight: 600,
        letterSpacing: '2px',
        color: '#fff'
      }}>
        PORTFOLIO.
      </span>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {['about', 'skills', 'project', 'contact'].map((item) => (
          <span
            key={item}
            onClick={() => scrollToSection(item)}
            style={{
              fontSize: '12px',
              letterSpacing: '2px',
              color: active === item ? '#fff' : '#666',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'color 0.2s'
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;