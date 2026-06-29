import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { label: 'ABOUT', path: '/about' },
    { label: 'SKILLS', path: '/skills' },
    { label: 'PROJECT', path: '/project' },
    { label: 'CONTACT', path: '/contact' },
  ];

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
      <span
        onClick={() => navigate('/')}
        style={{
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '2px',
          color: '#fff',
          cursor: 'pointer'
        }}>
        PORTFOLIO.
      </span>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {links.map((link) => (
          <span
            key={link.path}
            onClick={() => navigate(link.path)}
            style={{
              fontSize: '12px',
              letterSpacing: '2px',
              color: location.pathname === link.path ? '#fff' : '#666',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'color 0.2s'
            }}
          >
            {link.label}
          </span>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;