import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience — Anthony Volk',
  description: "Where I've worked and what I've built.",
};

export default function ExperiencePage() {
  return (
    <>
      <h2 className="section-title">Experience</h2>
      <p className="section-sub">Where I&apos;ve worked and what I&apos;ve built.</p>

      <div className="job">
        <div className="job-meta">
          <h3>PolicyEngine</h3>
          <div className="role" style={{ color: 'var(--red)' }}>
            Full-Stack Developer
          </div>
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
            <span>React</span>
            <span>JavaScript</span>
            <span>SQL</span>
            <span>Python</span>
            <span>Flask</span>
            <span>PM</span>
          </div>
        </div>
      </div>

      <div className="job">
        <div className="job-meta">
          <h3>ISE</h3>
          <div className="role" style={{ color: 'var(--blue)' }}>
            Research Lead
          </div>
          <div className="dates">July 2018 &ndash; October 2022</div>
        </div>
        <div className="job-body">
          <ul>
            <li>Co-led three reports on service delivery constraints</li>
            <li>Produced Asia-Pacific infrastructure reports</li>
          </ul>
          <div className="tags">
            <span>Strategy</span>
            <span>Research</span>
            <span>Client-Facing</span>
            <span>PM</span>
          </div>
        </div>
      </div>

      <div className="job">
        <div className="job-meta">
          <h3>JET Programme</h3>
          <div className="role" style={{ color: 'var(--yellow)' }}>
            Assistant Language Teacher
          </div>
          <div className="dates">Aug 2019 &ndash; Aug 2020</div>
        </div>
        <div className="job-body">
          <ul>
            <li>English classes of ~30 students</li>
            <li>Cross-cultural work in Japanese</li>
          </ul>
          <div className="tags">
            <span>Education</span>
            <span>Planning</span>
            <span>Japanese</span>
          </div>
        </div>
      </div>
    </>
  );
}
