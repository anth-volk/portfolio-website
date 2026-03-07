import React, { useState, useCallback } from 'react';
import './styles/App.css';
import headshot from './assets/volk-anthony-img.png';
import { pages } from './data/pages';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const go = useCallback((slug) => {
    setActivePage(slug);
    setMobileMenuOpen(false);
  }, []);

  const toggleMob = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const getColor = (slug) => pages.find((p) => p.slug === slug)?.color;

  // Pages that appear as home cards (everything except home itself)
  const cardPages = pages.filter((p) => p.slug !== 'home');

  return (
    <>
      <header className="header">
        <div className="header-brand">
          <span className="logo" onClick={() => go('home')}>Anthony Volk</span>
        </div>
        <nav className="nav">
          {pages.map((p) => (
            <a
              key={p.slug}
              className={`nav-link${activePage === p.slug ? ' active' : ''}`}
              onClick={() => go(p.slug)}
              style={{ '--accent': p.color }}
            >
              {p.name}
            </a>
          ))}
        </nav>
        <div className="nav-social">
          <a href="https://github.com/anth-volk" target="_blank" rel="noopener noreferrer">GH</a>
          <a href="https://linkedin.com/in/anthonyvolk" target="_blank" rel="noopener noreferrer">LI</a>
        </div>
        <button className={`hamburger${mobileMenuOpen ? ' open' : ''}`} onClick={toggleMob}>
          <div></div><div></div><div></div>
        </button>
      </header>

      <div className={`mobile-menu${mobileMenuOpen ? ' open' : ''}`}>
        {pages.map((p) => (
          <a key={p.slug} className="nav-link" onClick={() => go(p.slug)}>
            {p.name}
          </a>
        ))}
      </div>

      <div className="page-wrap">
        {/* Home */}
        <div className={`page${activePage === 'home' ? ' active' : ''}`}>
          <div className="home-hero">
            <div className="hero-left">
              <h1 className="hero-name">Anthony Volk</h1>
              <p className="hero-role">Full-Stack Developer</p>
              <p className="hero-mission">
                I'm a software engineer and international relations professional
                with a passion for building digital tools that empower people.
              </p>
              <div className="hero-cta">
                <a href="mailto:anth.volk@gmail.com" className="hero-btn hero-btn--primary">
                  Email<span className="btn-arrow">&rarr;</span>
                </a>
                <a href="https://linkedin.com/in/anthonyvolk" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn--secondary">
                  LinkedIn<span className="btn-arrow">&rarr;</span>
                </a>
              </div>
              <div className="hero-bar"><span></span><span></span><span></span></div>
            </div>
            <div className="hero-right">
              <div className="headshot-wrapper">
                <img className="headshot" src={headshot} alt="Anthony Volk" />
                <div className="headshot-frame"></div>
              </div>
            </div>
          </div>
          <div className="home-cards">
            {cardPages.map((p) => (
              <div
                key={p.slug}
                className="home-card"
                style={{ '--card-accent': p.color }}
                onClick={() => go(p.slug)}
              >
                <div className="card-title">{p.name}</div>
                <p className="card-desc">
                  {p.slug === 'experience' && 'PolicyEngine, ISE, JET — three chapters of building and learning.'}
                  {p.slug === 'skills' && 'Full-stack development, design, strategy, and languages.'}
                  {p.slug === 'writing' && 'Posts about code, policy, and the overlap between them.'}
                  {p.slug === 'contact' && 'Reach out via email, LinkedIn, or GitHub.'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className={`page${activePage === 'experience' ? ' active' : ''}`}>
          <h2 className="section-title">Experience</h2>
          <p className="section-sub">Where I've worked and what I've built.</p>

          <div className="job">
            <div className="job-meta">
              <h3>PolicyEngine</h3>
              <div className="role" style={{ color: getColor('home') }}>Full-Stack Developer</div>
              <div className="dates">April 2023 &ndash; Present</div>
            </div>
            <div className="job-body">
              <ul>
                <li>Led ground-up rewrite across 1,300+ commits</li>
                <li>Migrated simulation API saving $11K/month</li>
                <li>Built Claude AI-powered policy analysis</li>
                <li>Designed database schemas with SQL &amp; Pydantic</li>
                <li>Spearheaded roadmapping and sprint cycles</li>
              </ul>
              <div className="tags">
                <span>React</span><span>JavaScript</span><span>SQL</span>
                <span>Python</span><span>Flask</span><span>PM</span>
              </div>
            </div>
          </div>

          <div className="job">
            <div className="job-meta">
              <h3>ISE</h3>
              <div className="role" style={{ color: getColor('experience') }}>Research Lead</div>
              <div className="dates">July 2018 &ndash; October 2022</div>
            </div>
            <div className="job-body">
              <ul>
                <li>Co-led three reports on service delivery constraints</li>
                <li>Produced Asia-Pacific infrastructure reports</li>
              </ul>
              <div className="tags">
                <span>Strategy</span><span>Research</span>
                <span>Client-Facing</span><span>PM</span>
              </div>
            </div>
          </div>

          <div className="job">
            <div className="job-meta">
              <h3>JET Programme</h3>
              <div className="role" style={{ color: getColor('skills') }}>Assistant Language Teacher</div>
              <div className="dates">Aug 2019 &ndash; Aug 2020</div>
            </div>
            <div className="job-body">
              <ul>
                <li>English classes of ~30 students</li>
                <li>Cross-cultural work in Japanese</li>
              </ul>
              <div className="tags">
                <span>Education</span><span>Planning</span><span>Japanese</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className={`page${activePage === 'skills' ? ' active' : ''}`}>
          <h2 className="section-title">Skills &amp; Interests</h2>
          <p className="section-sub">What I work with and what I care about.</p>
          <div className="skills-grid">
            <div>
              <h3 className="sk-title">Skills</h3>
              <div className="sk-list">
                <span>JavaScript</span><span>HTML</span><span>CSS</span>
                <span>Wireframing</span><span>Figma</span><span>SQL</span>
                <span>Node</span><span>Express</span><span>React</span>
                <span>Strategy</span><span>Python</span><span>Flask</span><span>C</span>
              </div>
            </div>
            <div>
              <h3 className="sk-title">Interests</h3>
              <div className="sk-list">
                <span>Travel</span><span>Languages</span><span>Foreign Policy</span>
                <span>Politics</span><span>Hiking</span><span>Fermentation</span>
                <span>Cuisine</span><span>Cultures</span>
              </div>
            </div>
          </div>
        </div>

        {/* Writing */}
        <div className={`page${activePage === 'writing' ? ' active' : ''}`}>
          <h2 className="section-title">Writing</h2>
          <p className="section-sub">Blog &amp; Products</p>
          <p className="writing-note">
            Coming soon &mdash; blog posts about full-stack development and policy technology,
            plus open-source tools that make policy accessible.
          </p>
        </div>

        {/* Contact */}
        <div className={`page${activePage === 'contact' ? ' active' : ''}`}>
          <h2 className="section-title">Contact</h2>
          <p className="section-sub">I'm always open to conversations about technology and policy.</p>
          <div className="contact-list">
            <a href="mailto:anth.volk@gmail.com">Email <span>anth.volk@gmail.com</span></a>
            <a href="https://linkedin.com/in/anthonyvolk" target="_blank" rel="noopener noreferrer">LinkedIn <span>anthonyvolk</span></a>
            <a href="https://github.com/anth-volk" target="_blank" rel="noopener noreferrer">GitHub <span>anth-volk</span></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
