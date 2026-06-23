import React, { useEffect, useRef } from 'react';

const Project = () => {
  const ref = useRef(null);

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

  const projects = [
    {
      num: '01',
      title: 'SkillMatch App',
      tech: 'Mobile / Flutter',
      year: '2025',
      link: 'https://github.com/CLOWREX'
    },
    {
      num: '02',
      title: 'Website Project',
      tech: 'Frontend / React.js',
      year: '2025',
      link: 'https://github.com/CLOWREX'
    },
    {
      num: '03',
      title: 'Game Project',
      tech: 'Game / Unity',
      year: '2025',
      link: 'https://github.com/CLOWREX'
    },
  ];

  return (
    <section id="project" ref={ref} style={{
      padding: '6rem 3rem',
      borderBottom: '0.5px solid #1a1a1a'
    }}>
      <div className="fade" style={{
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease'
      }}>
        <h2 style={{
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          fontWeight: 800,
          lineHeight: 0.95,
          letterSpacing: '-2px',
          textTransform: 'uppercase'
        }}>
          <div>SELECTED</div>
          <div style={{ color: '#333' }}>WORKS.</div>
        </h2>
        <p style={{
          fontSize: '13px',
          letterSpacing: '2px',
          color: '#555',
          textTransform: 'uppercase',
          marginTop: '2rem',
          maxWidth: '480px',
          lineHeight: 1.8
        }}>
          A curated collection of my most impactful projects, bridging
          functionality with immersive digital experiences.
        </p>
      </div>

      <div style={{ marginTop: '3rem' }}>
        {projects.map((project, i) => (
          
            key={i}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <div
              className="fade"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
                transitionDelay: `${i * 0.1}s`,
                display: 'grid',
                gridTemplateColumns: '40px 1fr auto',
                alignItems: 'center',
                padding: '1.8rem 0',
                borderBottom: '0.5px solid #1a1a1a',
                gap: '2rem',
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.currentTarget.querySelector('.proj-title').style.color = '#aaa';
              }}
              onMouseLeave={e => {
                e.currentTarget.querySelector('.proj-title').style.color = '#fff';
              }}
            >
              <span style={{ fontSize: '12px', color: '#444' }}>{project.num}</span>
              <div
                className="proj-title"
                style={{
                  fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#fff',
                  transition: 'color 0.3s'
                }}
              >
                {project.title}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <span style={{
                  fontSize: '11px',
                  color: '#555',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>{project.tech}</span>
                <span style={{ fontSize: '11px', color: '#444' }}>—</span>
                <span style={{ fontSize: '11px', color: '#444' }}>{project.year}</span>
                <div style={{
                  width: '32px',
                  height: '32px',
                  border: '0.5px solid #333',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#555',
                  fontSize: '14px'
                }}>↗</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Project;