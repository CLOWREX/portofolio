import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SkillMatch = () => {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = ref.current.querySelectorAll('.fade');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    { num: '01', title: 'Cari Partner', desc: 'Search for the right partner based on the skill you need. Choose from categories like Web/App Development, UI/UX Design, Video Editing, Content Writing, Public Speaking, Photography, and more.' },
    { num: '02', title: 'Smart Matching', desc: 'AI-powered matching system that connects you with the most suitable partner based on your project needs and selected skill categories.' },
    { num: '03', title: 'Match List', desc: 'View all your matched partners in one place. See their skills and start a conversation directly from the match list.' },
    { num: '04', title: 'Pesan (Chat)', desc: 'Real-time messaging with your matched partners. Start a conversation, discuss your project, and collaborate seamlessly.' },
    { num: '05', title: 'Jelajah', desc: 'Explore all users on the platform. See their online/offline/busy status, skills, and follower count to find the best collaborator.' },
    { num: '06', title: 'Profil', desc: 'Customize your profile with your main skill, additional skills, and bio. Track your followers, following, likes, and match count.' },
  ];

  const techStack = ['Flutter', 'Dart', 'Firebase', 'UI/UX Design'];

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontSize: '12px',
    letterSpacing: '2px',
    color: '#888',
    textTransform: 'uppercase',
    textDecoration: 'none'
  };

  return (
    <div ref={ref} style={{ paddingTop: '80px' }}>
      <section style={{ padding: '4rem 3rem', borderBottom: '0.5px solid #1a1a1a' }}>
        <div className="fade" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span
              onClick={() => navigate('/project')}
              style={{ fontSize: '12px', letterSpacing: '2px', color: '#555', textTransform: 'uppercase', cursor: 'pointer' }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = '#555'}
            >{'<- Back to Projects'}</span>
          </div>
          <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#555', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Mobile Application — Flutter — 2025
          </p>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase' }}>
            <div>SKILL</div>
            <div style={{ color: '#333' }}>MATCH.</div>
          </h1>
          <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.8, maxWidth: '600px', marginTop: '2rem' }}>
            A mobile application that connects people with the skills they need.
            Find your perfect collaboration partner based on specific skill categories,
            match with them, and start building something great together.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 3rem', borderBottom: '0.5px solid #1a1a1a' }}>
        <div className="fade" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#555', textTransform: 'uppercase', marginBottom: '3rem' }}>Features</p>
        </div>
        {features.map((feature, i) => (
          <div key={i} className="fade" style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            transitionDelay: `${i * 0.1}s`,
            display: 'grid',
            gridTemplateColumns: '60px 200px 1fr',
            alignItems: 'start',
            padding: '1.5rem 0',
            borderBottom: '0.5px solid #1a1a1a',
            gap: '2rem'
          }}>
            <span style={{ fontSize: '12px', color: '#444' }}>{feature.num}</span>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>{feature.title}</div>
            <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.8 }}>{feature.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ padding: '4rem 3rem', borderBottom: '0.5px solid #1a1a1a' }}>
        <div className="fade" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#555', textTransform: 'uppercase', marginBottom: '2rem' }}>Tech Stack</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {techStack.map((tech, i) => (
              <span key={i} style={{ fontSize: '11px', letterSpacing: '2px', color: '#888', border: '0.5px solid #2a2a2a', padding: '8px 16px', textTransform: 'uppercase' }}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 3rem' }}>
        <div className="fade" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#c8a96e', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Source Code</p>
            <p style={{ fontSize: '13px', color: '#555' }}>View the full project on GitHub</p>
          </div>
          <a href="https://github.com/CLOWREX/SkillMatch" target="_blank" rel="noreferrer" style={linkStyle}>
            <span>View on GitHub</span>
            <div style={{ width: '32px', height: '32px', border: '0.5px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{'↗'}</div>
          </a>
        </div>
      </section>

      <div style={{ padding: '2rem 3rem', textAlign: 'center', borderTop: '0.5px solid #1a1a1a' }}>
        <p style={{ fontSize: '11px', color: '#333', letterSpacing: '2px' }}>© 2025 PROJECT BY ARIEF ADI WIBOWO</p>
      </div>
    </div>
  );
};

export default SkillMatch;