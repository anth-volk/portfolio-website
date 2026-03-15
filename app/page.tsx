import Image from 'next/image';
import Link from 'next/link';
import { mockArticles } from '@/data/articles';

export default function HomePage() {
  return (
    <>
      <div className="home-hero">
        <div className="hero-left">
          <h1 className="hero-name">Anthony Volk</h1>
          <p className="hero-role">Full-Stack Developer</p>
          <p className="hero-mission">
            I&apos;m a software engineer and international relations professional with a
            passion for building digital tools that empower people.
          </p>
          <div className="hero-cta">
            <a href="mailto:anth.volk@gmail.com" className="hero-btn hero-btn--primary">
              Email<span className="btn-arrow">&rarr;</span>
            </a>
            <a
              href="https://linkedin.com/in/anthonyvolk"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn--secondary"
            >
              LinkedIn<span className="btn-arrow">&rarr;</span>
            </a>
          </div>
          <div className="hero-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="hero-right">
          <div className="headshot-wrapper">
            <Image
              className="headshot"
              src="/images/headshot.png"
              alt="Anthony Volk"
              width={280}
              height={280}
              priority
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        </div>
      </div>

      {/* Experience Preview */}
      <div className="preview-section selection-blue">
        <div className="preview-header">
          <h2 className="preview-title">Experience</h2>
          <p className="preview-sub">Where I&apos;ve worked and what I&apos;ve built.</p>
        </div>
        <div
          className="preview-card"
          style={{ '--card-accent': 'var(--blue)' } as React.CSSProperties}
        >
          <div className="preview-card-meta">
            <h3>PolicyEngine</h3>
            <div className="preview-role" style={{ color: 'var(--blue)' }}>
              Full-Stack Developer
            </div>
            <div className="preview-dates">April 2023 &ndash; Present</div>
          </div>
          <div className="preview-card-body">
            <ul>
              <li>Led ground-up rewrite of web app across 1,300+ commits to modern React/TypeScript/Vite stack</li>
              <li>Architecting multi-agent AI pipeline to generate and deploy full-stack apps from natural-language specs</li>
              <li>Migrated simulation API to Modal, saving $11K/month via custom gateway and CI/CD pipeline</li>
              <li>Built Claude AI-powered policy analysis with streaming responses and real-time impact summaries</li>
              <li>Designed database schemas and API versioning with SQL, Pydantic, and Yup across Python and TypeScript</li>
              <li>Spearheaded roadmapping, quarterly planning, and sprint cycle processes</li>
            </ul>
            <div className="tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>SQL</span>
              <span>Python</span>
              <span>Flask</span>
              <span>PM</span>
            </div>
          </div>
        </div>
        <Link href="/experience" className="preview-link">
          View full experience<span className="btn-arrow">&rarr;</span>
        </Link>
      </div>

      {/* Writing Preview */}
      <div className="preview-section selection-yellow">
        <div className="preview-header">
          <h2 className="preview-title">Writing</h2>
          <p className="preview-sub">Thoughts on software, policy, and building things that matter.</p>
        </div>
        <div className="preview-articles">
          {mockArticles.map((_, i) => (
            <div key={i} className="article-card" />
          ))}
        </div>
        <Link href="/writing" className="preview-link">
          View all writing<span className="btn-arrow">&rarr;</span>
        </Link>
      </div>
    </>
  );
}
