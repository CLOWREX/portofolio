import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const QRLog = () => {
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

  const projectMeta = {
    category: 'Web Application — React.js — 2025',
    title: ['QR', 'LOG.'],
    desc: `A QR-based attendance system for schools. Students scan a QR
code to check in, view their weekly schedule, and track attendance
history — while teachers manage student data, register new students,
and monitor attendance directly from their own dashboard.`,
    techStack: ['React', 'QR Code', 'Role-based Access', 'Context API'],
    githubUrl: 'https://github.com/CLOWREX/AplikasiAbsensiSiswa',
  };

  const sections = [
    {
      id: '01',
      image: '/image/DashboardSiswa.png',
      imageAlt: 'Student home dashboard',
      heading: 'Dashboard siswa yang ramah dan informatif',
      body: 'Siswa disambut dengan sapaan personal dan akses cepat ke fitur utama seperti Presence, History, Schedule, dan Profile. Setiap fitur ditampilkan dalam kartu yang jelas dengan ikon yang mudah dipahami.',
    },
    {
      id: '02',
      image: '/image/ScheduleSiswa.png',
      imageAlt: 'Student schedule page',
      heading: 'Jadwal harian yang tersusun rapi',
      body: 'Siswa dapat melihat jadwal pelajaran per hari lengkap dengan jam, nama guru, dan ruangan. Navigasi antar hari dilakukan melalui tab yang responsif, memudahkan siswa mengecek jadwal kapan saja.',
    },
    {
      id: '03',
      image: '/image/DasboardGuru.png',
      imageAlt: 'Teacher dashboard',
      heading: 'Dashboard guru untuk kelola presensi',
      body: 'Guru memiliki akses berbeda: memeriksa kehadiran siswa, mendaftarkan siswa baru, dan mengelola data presensi secara langsung. Role-based access memastikan setiap pengguna hanya melihat fitur yang relevan dengan perannya.',
    },
  ];

  return (
    <div ref={ref} style={{ paddingTop: '80px', background: '#0a0a0a', minHeight: '100vh' }}>

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

export default QRLog;