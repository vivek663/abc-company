import React from 'react';
import './HomePage.css';

const timelineSteps = [
  {
    title: 'Multi-source data',
    desc: 'Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.'
  },
  {
    title: 'Stakeholder alignment',
    desc: 'No black boxes. Stakeholders understand the "how", "so what" and "now what", leading to clear decision-making trade offs.'
  },
  {
    title: 'Continuous engagement',
    desc: 'We engage in the long-term to enhance, course-correct, and adapt new models to continuously refine your work.'
  }
];

export default function HomePage({ heading }) {
  return (
    <div className="page-wrapper">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{heading}</h1>
          <p className="hero-desc">
            Powerful AI solutions that go beyond mere data sorting and exploration. Use our array of AI enabled solutions that understand your business and recommend the optimal way forward.
          </p>
          <button className="get-started-btn">Get started</button>
        </div>
      </section>
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Ready to Go Algos</h3>
            <p className="feature-desc">We have ready accelerators embedded with learnings from hundreds of past projects, generating actionable results.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏗️</div>
            <h3 className="feature-title">Internal capability building</h3>
            <p className="feature-desc">We productionize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them.</p>
          </div>
        </div>
        <div className="timeline">
          <div className="timeline-dot" />
          <div className="timeline-line" />
          <div className="timeline-dot" />
          <div className="timeline-line" />
          <div className="timeline-dot" />
          <div className="timeline-line" />
          <div className="timeline-dot" />
          <div className="timeline-line" />
          <div className="timeline-dot" />
        </div>
        <div className="features-grid" style={{marginTop: 0}}>
          {timelineSteps.map((step, idx) => (
            <div className="feature-card" key={idx}>
              <div className="feature-icon">{idx === 0 ? '🗂️' : idx === 1 ? '🤝' : '🔄'}</div>
              <h3 className="feature-title">{step.title}</h3>
              <p className="feature-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 