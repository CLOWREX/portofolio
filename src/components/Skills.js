import React, { useEffect, useRef } from 'react';

const Skills = () => {
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

  const expertise = [
    {
      title: 'Web Development',
      sub: 'Frontend Solutions',
      desc: 'Building modern, responsive websites using React.js and JavaScript with a strong focus on UI/UX principles.'
    },
    {
      title: 'Mobile Development',
      sub: 'Cross-Platform Apps',
      desc: 'Developing cross-platform mobile applications using Flutter, including the SkillMatch app.'
    },
    {
      title: 'UI / UX Design',
      sub: 'User Interface',
      desc: 'Designing intuitive and visually appealing interfaces that enhance user experience across platforms.'
    },
    {
      title: 'Game Development',
      sub: 'Unity Engine',
      desc: 'Creating interactive game experiences using Unity as part of exploring the broader software development landscape.'
    },
  ];

  const tags = ['JavaScript', 'React.js', 'HTML', 'CSS', 'Flutter', 'Dart', 'Unity', 'UI / UX', 'Figma'];

  return (
    <section id="skills" ref={ref} style={{
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
          <div>AREAS OF</div>
          <div style={{ color: '#333' }}>EXPERTISE.</div>
        </h2>
      </div>

      <div style={{ marginTop: '4rem' }}>
        {expertise.map((item, i) => (
          <div
            key={i}
            className="fade"
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
              transitionDelay: `${i * 0.1}s`,
              display: 'grid',
              gridTemplateColumns: '120px 1fr 1fr',
              alignItems: 'center',
              padding: '1.5rem 0',
              borderBottom: '0.5px solid #1a1a1a',
              gap: '2rem'
            }}
          >
            <span style={{
              fontSize: '11px',
              color: '#444',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>Expertise</span>
            <div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff' }}>{item.title}</div>
              <div style={{
                fontSize: '11px',
                color: '#555',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginTop: '4px'
              }}>{item.sub}</div>
            </div>
            <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.7 }}>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="fade" style={{
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
        transitionDelay: '0.5s',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginTop: '3rem'
      }}>
        {tags.map((tag, i) => (
          <span key={i} style={{
            fontSize: '11px',
            letterSpacing: '2px',
            color: '#888',
            border: '0.5px solid #2a2a2a',
            padding: '8px 16px',
            textTransform: 'uppercase'
          }}>{tag}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;