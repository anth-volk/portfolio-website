import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience — Anthony Volk',
  description: "Where I've worked and what I've built.",
};

export default function ExperiencePage() {
  return (
    <div className="selection-blue">
      <h2 className="section-title">Experience</h2>
      <p className="section-sub">Where I&apos;ve worked and what I&apos;ve built.</p>

      <div className="job">
        <div className="job-meta">
          <h3>PolicyEngine</h3>
          <div className="role" style={{ color: 'var(--blue)' }}>
            Full-Stack Developer
          </div>
          <div className="dates">April 2023 &ndash; Present</div>
        </div>
        <div className="job-body">
          <ul>
            <li>Led team in building ground-up rewrite of public-facing web application across 1,300+ commits, migrating from a legacy React/JavaScript codebase to modern React/TypeScript/Vite stack with comprehensive test coverage and Redux-based state management architecture; presented final product to 50+ stakeholders at in-person event</li>
            <li>Architecting multi-agent AI pipeline using Claude Agent SDK to autonomously generate, validate, and deploy full-stack web applications from natural-language specs</li>
            <li>Migrated simulation API from Google Cloud to Modal, designing gateway service, version registry, and automated deployment pipeline using Docker multi-stage builds, Terraform, and GitHub Actions CI/CD, saving $11,000 in server costs per month</li>
            <li>Built Claude AI-powered readable policy analysis feature, building streaming response handlers, computation tree tracing infrastructure, conditional endpoint logic, and robust error handling for real-time AI-generated impact summaries within application</li>
            <li>Designed and implemented database schemas for simulation storage and user reports using SQL with migration-safe patterns, including CRUD endpoints, API versioning, and data validation using Pydantic and Yup schemas across Python and TypeScript services</li>
            <li>Spearheaded the creation of roadmapping, quarterly planning, and sprint cycle processes, improving on-time project delivery rates</li>
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
          <div className="role" style={{ color: 'var(--blue)' }}>
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
    </div>
  );
}
