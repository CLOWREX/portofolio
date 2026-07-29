import React, { useEffect, useRef } from 'react';

const About = () => {
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

  return (
    <section id="about" ref={ref} style={{
      padding: '10rem 3rem 6rem',
      borderBottom: '0.5px solid #1a1a1a'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '3rem',
        alignItems: 'center'
      }}>
        <div className="fade" style={{
          opacity: 0,
          transform: 'translateY(30px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease'
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-2px',
            textTransform: 'uppercase'
          }}>
            <div>ARIEF</div>
            <div style={{ color: '#333' }}>ADI</div>
            <div>WIBOWO</div>
          </h1>

          <p style={{
            fontSize: '13px',
            letterSpacing: '2px',
            color: '#555',
            textTransform: 'uppercase',
            marginTop: '2rem',
            maxWidth: '480px',
            lineHeight: 1.8
          }}>
            A passionate web developer and fresh graduate from SMKN 10 Jakarta,
            specializing in building modern, responsive, and efficient web solutions.
          </p>
        </div>

        <div className="fade" style={{
          opacity: 0,
          transform: 'translateY(30px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
          transitionDelay: '0.2s',
          position: 'relative',
          width: '260px'
        }}>
          {/* Corner accents */}
          <div style={{ position: 'absolute', top: -1, left: -1, width: '16px', height: '16px', borderTop: '1px solid #666', borderLeft: '1px solid #666', zIndex: 2 }} />
          <div style={{ position: 'absolute', top: -1, right: -1, width: '16px', height: '16px', borderTop: '1px solid #666', borderRight: '1px solid #666', zIndex: 2 }} />
          <div style={{ position: 'absolute', bottom: -1, left: -1, width: '16px', height: '16px', borderBottom: '1px solid #666', borderLeft: '1px solid #666', zIndex: 2 }} />
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: '16px', height: '16px', borderBottom: '1px solid #666', borderRight: '1px solid #666', zIndex: 2 }} />

          <div
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            style={{
              padding: '10px',
              background: '#111',
              border: '0.5px solid #2a2a2a',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              transition: 'transform 0.3s ease'
            }}
          >
            <span style={{
              fontSize: '10px',
              letterSpacing: '2px',
              color: '#4caf50',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '10px'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4caf50', display: 'inline-block' }}></span>
              Open for PKL / Internship
            </span>

            <img
              src="/image/FOTO.png"
              alt="Arief Adi Wibowo"
              style={{
                width: '100%',
                height: '240px',
                objectFit: 'cover',
                objectPosition: 'top',
                display: 'block'
              }}
            />

            <p style={{
              fontSize: '10px',
              letterSpacing: '2px',
              color: '#444',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginTop: '10px'
            }}>Arief Adi Wibowo</p>
          </div>
        </div>
      </div>

      <div className="fade" style={{
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
        transitionDelay: '0.15s',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        marginTop: '4rem'
      }}>
        <div>
          <p style={{
            fontSize: '11px',
            letterSpacing: '3px',
            color: '#444',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            borderBottom: '0.5px solid #222',
            paddingBottom: '0.8rem'
          }}>My Story</p>
          <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.8 }}>
            My journey in coding started during junior high school at SMPN 281 Jakarta,
            where I discovered the fundamentals of programming. That curiosity grew into
            a passion, leading me to specialize in Software Engineering at SMKN 10 Jakarta
            — where I built real applications using modern technologies.
          </p>
        </div>
        <div>
          <p style={{
            fontSize: '11px',
            letterSpacing: '3px',
            color: '#444',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            borderBottom: '0.5px solid #222',
            paddingBottom: '0.8rem'
          }}>My Vision</p>
          <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.8 }}>
            To become a skilled web developer capable of building impactful digital
            experiences. I aim to contribute to innovative projects that bridge creativity
            and functionality, while continuously growing my expertise in front-end
            and mobile development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;