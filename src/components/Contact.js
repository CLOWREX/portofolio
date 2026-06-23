import React, { useEffect, useRef } from 'react';

const Contact = () => {
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
    <section id="contact" ref={ref} style={{
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
          <div>LET'S BUILD</div>
          <div style={{ color: '#333' }}>SOMETHING</div>
          <div style={{ color: '#333' }}>TOGETHER.</div>
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
          Have a project in mind or just want to say hi? Feel free to reach out.
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
        marginTop: '3rem'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <p style={{
              fontSize: '11px',
              letterSpacing: '2px',
              color: '#444',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>Your Name *</p>
            <input
              type="text"
              placeholder="Jane Doe"
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '0.5px solid #333',
                color: '#aaa',
                fontSize: '14px',
                padding: '0.6rem 0',
                width: '100%',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>
          <div>
            <p style={{
              fontSize: '11px',
              letterSpacing: '2px',
              color: '#444',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>Your Email *</p>
            <input
              type="email"
              placeholder="jane@example.com"
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '0.5px solid #333',
                color: '#aaa',
                fontSize: '14px',
                padding: '0.6rem 0',
                width: '100%',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>
          <div>
            <p style={{
              fontSize: '11px',
              letterSpacing: '2px',
              color: '#444',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>Your Message *</p>
            <textarea
              placeholder="Tell me about your project..."
              rows={4}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: '0.5px solid #333',
                color: '#aaa',
                fontSize: '14px',
                padding: '0.6rem 0',
                width: '100%',
                outline: 'none',
                fontFamily: 'inherit',
                resize: 'none'
              }}
            />
          </div>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginTop: '1rem',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0
            }}
          >
            <span style={{
              fontSize: '13px',
              letterSpacing: '3px',
              color: '#fff',
              textTransform: 'uppercase'
            }}>Send Message</span>
            <div style={{
              width: '36px',
              height: '36px',
              border: '0.5px solid #444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '16px'
            }}>→</div>
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <div>
            <p style={{
              fontSize: '11px',
              letterSpacing: '2px',
              color: '#444',
              textTransform: 'uppercase',
              marginBottom: '0.8rem'
            }}>Contact Details</p>
            <p style={{ fontSize: '15px', color: '#aaa', marginBottom: '0.3rem' }}>
              ariefadiwibowo2@gmail.com
            </p>
            <p style={{ fontSize: '15px', color: '#aaa' }}>
              +62 857-1909-9241
            </p>
          </div>
          <div>
            <p style={{
              fontSize: '11px',
              letterSpacing: '2px',
              color: '#444',
              textTransform: 'uppercase',
              marginBottom: '0.8rem'
            }}>Social</p>
            
              href="https://github.com/CLOWREX"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'block',
                fontSize: '14px',
                color: '#aaa',
                textDecoration: 'none',
                marginBottom: '0.5rem',
                letterSpacing: '1px',
                transition: 'color 0.2s'
              }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = '#aaa'}
            >GITHUB</a>
            
              href="https://www.instagram.com/bayy_ysrl/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'block',
                fontSize: '14px',
                color: '#aaa',
                textDecoration: 'none',
                letterSpacing: '1px',
                transition: 'color 0.2s'
              }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = '#aaa'}
            >INSTAGRAM</a>
          </div>
          <div>
            <p style={{
              fontSize: '11px',
              letterSpacing: '2px',
              color: '#444',
              textTransform: 'uppercase',
              marginBottom: '0.8rem'
            }}>Location</p>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>
              Makasar, Jakarta Timur<br />
              DKI Jakarta, Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;