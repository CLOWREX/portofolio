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