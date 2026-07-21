import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const WebsiteProject = () => {
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

  // ── Ganti data di bawah sesuai project kamu ─────────────────────
  const projectMeta = {
    category: 'Frontend — React.js — 2025',
    title: ['WEBSITE', 'PROJECT.'],
    desc: `A modern web application built with React.js, focused on clean UI
and smooth user experience. Designed to be fast, responsive,
and accessible across all devices.`,
    techStack: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/CLOWREX',
  };

  const sections = [
    {
      id: '01',
      image: 'https://placehold.co/640x400/0d0d0d/222?text=01+—+Landing+Page',
      imageAlt: 'Landing page',
      heading: 'Landing page yang langsung bicara',
      body: 'Halaman utama dirancang untuk menyampaikan pesan utama dalam hitungan detik. Layout bersih dengan hierarki tipografi yang jelas memandu pengunjung ke call-to-action tanpa kebingungan.',
    },
    {
      id: '02',
      image: 'https://placehold.co/640x400/0d0d0d/222?text=02+—+Core+Feature',
      imageAlt: 'Core feature',
      heading: 'Fitur utama yang mudah digunakan',
      body: 'Antarmuka dibangun dengan komponen React yang modular dan reusable. Setiap interaksi dibuat intuitif — pengguna tidak perlu membaca manual untuk memahami cara kerja aplikasi.',
    },
    {
      id: '03',
      image: 'https://placehold.co/640x400/0d0d0d/222?text=03+—+Responsive',
      imageAlt: 'Responsive design',
      heading: 'Responsive di semua ukuran layar',
      body: 'Tampilan menyesuaikan diri secara mulus dari desktop hingga mobile. Setiap breakpoint diperhatikan agar pengalaman pengguna tetap konsisten tanpa mengorbankan estetika desain.',
    },
  ];

  return (
    <div ref={ref} style={{ paddingTop: '80px', background: '#0a0a0a', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <section style={{ padding: '4rem 3rem', borderBottom: '0.5px solid #1a1a1a' }}>
        <div className="fade" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span
              onClick={() => navigate('/project')}
              style={{ fontSize: '12px', letterSpacing: '2px', color: '#555', textTransform: 'uppercase', cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = '#555'}
            >{'<- Back to Projects'}</span>
          </div>
          <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#555', textTransform: 'uppercase', marginBottom: '1rem' }}>
            {projectMeta.category}
          </p>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-2px', textTransform: 'uppercase' }}>
            <div>{projectMeta.title[0]}</div>
            <div style={{ color: '#333' }}>{projectMeta.title[1]}</div>
          </h1>
          <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.8, maxWidth: '600px', marginTop: '2rem', whiteSpace: 'pre-line' }}>
            {projectMeta.desc}
          </p>
        </div>
      </section>

      {/* ── Zigzag Documentation ── */}
      <section style={{ padding: '4rem 3rem', borderBottom: '0.5px solid #1a1a1a' }}>
        <div className="fade" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#555', textTransform: 'uppercase', marginBottom: '4rem' }}>
            Documentation
          </p>
        </div>

        {sections.map((sec, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={sec.id}
              className="fade"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
                transitionDelay: `${i * 0.12}s`,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
                padding: '4rem 0',
                borderBottom: '0.5px solid #1a1a1a',
                direction: isEven ? 'ltr' : 'rtl',
              }}
            >
              <div style={{ direction: 'ltr' }}>
                <img
                  src={sec.image}
                  alt={sec.imageAlt}
                  style={{ width: '100%', display: 'block', border: '0.5px solid #1a1a1a', filter: 'brightness(0.9)' }}
                />
              </div>
              <div style={{ direction: 'ltr' }}>
                <span style={{ fontSize: '11px', letterSpacing: '3px', color: '#444', textTransform: 'uppercase', display: 'block', marginBottom: '1.2rem' }}>
                  {sec.id} — Documentation
                </span>
                <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1px', textTransform: 'uppercase', color: '#fff', marginBottom: '1.2rem' }}>
                  {sec.heading}
                </h3>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.9, maxWidth: '420px' }}>
                  {sec.body}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── Tech Stack ── */}
      <section style={{ padding: '4rem 3rem', borderBottom: '0.5px solid #1a1a1a' }}>
        <div className="fade" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#555', textTransform: 'uppercase', marginBottom: '2rem' }}>Tech Stack</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {projectMeta.techStack.map((tech, i) => (
              <span key={i} style={{ fontSize: '11px', letterSpacing: '2px', color: '#888', border: '0.5px solid #2a2a2a', padding: '8px 16px', textTransform: 'uppercase' }}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GitHub link ── */}
      <section style={{ padding: '4rem 3rem' }}>
        <div className="fade" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#c8a96e', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Source Code</p>
            <p style={{ fontSize: '13px', color: '#555' }}>View the full project on GitHub</p>
          </div>
          <a href={projectMeta.githubUrl} target="_blank" rel="noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '12px', letterSpacing: '2px', color: '#888', textTransform: 'uppercase', textDecoration: 'none' }}>
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

export default WebsiteProject;