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
      <div className="preview-section">
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
            <div className="preview-role" style={{ color: 'var(--red)' }}>
              Full-Stack Developer
            </div>
            <div className="preview-dates">April 2023 &ndash; Present</div>
          </div>
          <div className="preview-card-body">
            <ul>
              <li>Led ground-up rewrite across 1,300+ commits</li>
              <li>Migrated simulation API saving $11K/month</li>
              <li>Built Claude AI-powered policy analysis</li>
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
        <Link href="/writing" className="preview-link">
          View all writing<span className="btn-arrow">&rarr;</span>
        </Link>
      </div>
    </>
  );
}
