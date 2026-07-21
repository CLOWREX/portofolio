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

  // ── Ganti data di bawah sesuai project kamu ─────────────────────────────────
  const projectMeta = {
    category: 'Mobile Application — Flutter — 2025',
    title: ['SKILL', 'MATCH.'],
    desc: `A mobile application that connects people with the skills they need.
Find your perfect collaboration partner based on specific skill categories,
match with them, and start building something great together.`,
    techStack: ['Flutter', 'Dart', 'Firebase', 'UI/UX Design'],
    githubUrl: 'https://github.com/CLOWREX/SkillMatch',
  };

  // ── Ganti sections: image bisa URL screenshot asli kamu ─────────────────────
  const sections = [
    {
      id: '01',
      image: 'https://placehold.co/640x400/0d0d0d/333?text=01+—+Dashboard',
      imageAlt: 'Dashboard screen',
      heading: 'Dashboard yang langsung to the point',
      body: 'Layar utama menampilkan ringkasan aktivitas, partner yang cocok, dan notifikasi terbaru — semua tanpa perlu banyak scroll. Pengguna langsung tahu langkah selanjutnya begitu buka aplikasi.',
    },
    {
      id: '02',
      image: 'https://placehold.co/640x400/0d0d0d/333?text=02+—+Smart+Matching',
      imageAlt: 'Smart matching screen',
      heading: 'AI matching yang kerja di belakang layar',
      body: 'Sistem matching berbasis AI mencocokkan pengguna berdasarkan kategori skill yang dipilih. Tidak ada swipe acak — setiap saran partner sudah difilter relevansinya dengan kebutuhan project.',
    },
    {
      id: '03',
      image: 'https://placehold.co/640x400/0d0d0d/333?text=03+—+Chat+%26+Explore',
      imageAlt: 'Chat and explore screen',
      heading: 'Kolaborasi mulai dari chat pertama',
      body: 'Fitur pesan real-time memungkinkan diskusi project langsung setelah match. Halaman Jelajah menampilkan semua pengguna beserta status online dan skill mereka untuk memperluas jaringan.',
    },
  ];

  return (
    <div ref={ref} style={{ paddingTop: '80px', background: '#0a0a0a', minHeight: '100vh' }}>

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 3rem', borderBottom: '0.5px solid #1a1a1a' }}>
        <div className="fade" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>

          {/* Back button */}
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

      {/* ── Zigzag Documentation ─────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 3rem', borderBottom: '0.5px solid #1a1a1a' }}>
        <div className="fade" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#555', textTransform: 'uppercase', marginBottom: '4rem' }}>
            Documentation
          </p>
        </div>

        {sections.map((sec, i) => {
          const isEven = i % 2 === 0; // even → gambar kiri, odd → gambar kanan
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
                direction: isEven ? 'ltr' : 'rtl', // flip kolom kanan-kiri
              }}
            >
              {/* Gambar */}
              <div style={{ direction: 'ltr' }}>
                <img
                  src={sec.image}
                  alt={sec.imageAlt}
                  style={{
                    width: '100%',
                    display: 'block',
                    border: '0.5px solid #1a1a1a',
                    filter: 'brightness(0.9)',
                  }}
                />
              </div>

              {/* Teks */}
              <div style={{ direction: 'ltr' }}>
                <span style={{
                  fontSize: '11px',
                  letterSpacing: '3px',
                  color: '#444',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '1.2rem',
                }}>
                  {sec.id} — Documentation
                </span>
                <h3 style={{
                  fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-1px',
                  textTransform: 'uppercase',
                  color: '#fff',
                  marginBottom: '1.2rem',
                }}>
                  {sec.heading}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: '#666',
                  lineHeight: 1.9,
                  maxWidth: '420px',
                }}>
                  {sec.body}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── Tech Stack ────────────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 3rem', borderBottom: '0.5px solid #1a1a1a' }}>
        <div className="fade" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}>
          <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#555', textTransform: 'uppercase', marginBottom: '2rem' }}>Tech Stack</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {projectMeta.techStack.map((tech, i) => (
              <span key={i} style={{
                fontSize: '11px',
                letterSpacing: '2px',
                color: '#888',
                border: '0.5px solid #2a2a2a',
                padding: '8px 16px',
                textTransform: 'uppercase',
              }}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GitHub link ───────────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 3rem' }}>
        <div className="fade" style={{
          opacity: 0,
          transform: 'translateY(30px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#c8a96e', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Source Code</p>
            <p style={{ fontSize: '13px', color: '#555' }}>View the full project on GitHub</p>
          </div>
          <a
            href={projectMeta.githubUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              fontSize: '12px',
              letterSpacing: '2px',
              color: '#888',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            <span>View on GitHub</span>
            <div style={{ width: '32px', height: '32px', border: '0.5px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{'↗'}</div>
          </a>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────────── */}
      <div style={{ padding: '2rem 3rem', textAlign: 'center', borderTop: '0.5px solid #1a1a1a' }}>
        <p style={{ fontSize: '11px', color: '#333', letterSpacing: '2px' }}>© 2025 PROJECT BY ARIEF ADI WIBOWO</p>
      </div>

    </div>
  );
};

export default SkillMatch;