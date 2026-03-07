import React, { useState, useCallback } from 'react';
import './styles/App.css';
import headshot from './assets/volk-anthony-img.png';
import { pages } from './data/pages';

const IconGitHub = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const IconLinkedIn = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const IconEmail = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const mockArticles = [
  {
    date: 'March 2026',
    title: 'Simulating Tax Policy with React and Python',
    excerpt: 'How we built a responsive front-end for microsimulation models that lets anyone explore the impact of policy reforms in real time.',
  },
  {
    date: 'January 2026',
    title: 'From Think Tank to Tech: Lessons in Career Pivoting',
    excerpt: 'Reflections on transitioning from international relations research to full-stack development, and why domain knowledge still matters.',
  },
  {
    date: 'November 2025',
    title: 'Using LLMs for Accessible Policy Analysis',
    excerpt: 'Designing an AI-powered feature that translates complex tax simulations into plain-language summaries for non-technical users.',
  },
];

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

  const socialLinks = (
    <>
      <a href="https://github.com/anth-volk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">{IconGitHub}</a>
      <a href="https://linkedin.com/in/anthonyvolk" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">{IconLinkedIn}</a>
      <a href="mailto:anth.volk@gmail.com" aria-label="Email">{IconEmail}</a>
    </>
  );

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
          {socialLinks}
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
        <div className="mobile-social">
          {socialLinks}
        </div>
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

          {/* Experience Preview */}
          <div className="preview-section">
            <div className="preview-header">
              <h2 className="preview-title">Experience</h2>
              <p className="preview-sub">Where I've worked and what I've built.</p>
            </div>
            <div className="preview-card" style={{ '--card-accent': 'var(--blue)' }}>
              <div className="preview-card-meta">
                <h3>PolicyEngine</h3>
                <div className="preview-role" style={{ color: 'var(--red)' }}>Full-Stack Developer</div>
                <div className="preview-dates">April 2023 &ndash; Present</div>
              </div>
              <div className="preview-card-body">
                <ul>
                  <li>Led ground-up rewrite across 1,300+ commits</li>
                  <li>Migrated simulation API saving $11K/month</li>
                  <li>Built Claude AI-powered policy analysis</li>
                </ul>
                <div className="tags">
                  <span>React</span><span>JavaScript</span><span>SQL</span>
                  <span>Python</span><span>Flask</span><span>PM</span>
                </div>
              </div>
            </div>
            <a className="preview-link" onClick={() => go('experience')}>
              View full experience<span className="btn-arrow">&rarr;</span>
            </a>
          </div>

          {/* Writing Preview */}
          <div className="preview-section">
            <div className="preview-header">
              <h2 className="preview-title">Writing</h2>
              <p className="preview-sub">Blog &amp; Products</p>
            </div>
            <div className="preview-articles">
              {mockArticles.map((a, i) => (
                <div key={i} className="article-card">
                  <div className="article-date">{a.date}</div>
                  <h3 className="article-title">{a.title}</h3>
                  <p className="article-excerpt">{a.excerpt}</p>
                </div>
              ))}
            </div>
            <a className="preview-link" onClick={() => go('writing')}>
              View all writing<span className="btn-arrow">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Experience */}
        <div className={`page${activePage === 'experience' ? ' active' : ''}`}>
          <h2 className="section-title">Experience</h2>
          <p className="section-sub">Where I've worked and what I've built.</p>

          <div className="job">
            <div className="job-meta">
              <h3>PolicyEngine</h3>
              <div className="role" style={{ color: 'var(--red)' }}>Full-Stack Developer</div>
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
              <div className="role" style={{ color: 'var(--blue)' }}>Research Lead</div>
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
              <div className="role" style={{ color: 'var(--yellow)' }}>Assistant Language Teacher</div>
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

        {/* Writing */}
        <div className={`page${activePage === 'writing' ? ' active' : ''}`}>
          <h2 className="section-title">Writing</h2>
          <p className="section-sub">Blog &amp; Products</p>
          <p className="writing-note">
            Coming soon &mdash; blog posts about full-stack development and policy technology,
            plus open-source tools that make policy accessible.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
