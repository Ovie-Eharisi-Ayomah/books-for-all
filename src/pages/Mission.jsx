import React from 'react';
import { Link } from 'react-router-dom';
import kidsReading from '../assets/kidsReading.jpeg';

const Mission = () => {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${kidsReading})` }}>
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-title">One for every 300 children</h1>
            <p className="page-subtitle" style={{ margin: '0 auto', color: '#ffffff' }}>
              Millions of children lack access to books. We are here to change that.
            </p>
            <div className="hero-actions" style={{ marginTop: '1.5rem' }}>
              <Link to="/donate" className="btn btn-accent">Donate Today</Link>
              <Link to="/contact" className="btn btn-primary">Partner With Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Issue Section */}
      <section className="container mission-section">
        <div className="mission-content">
          <h2>The Problem: Book Deserts</h2>
          <p>
            In low-income communities across the country, there is a severe shortage of reading materials. These areas, known as "book deserts," leave children without the crucial resources they need to develop foundational literacy skills.
          </p>
          <p>
            Studies show that growing up with books in the home significantly boosts a child's academic success and future earning potential. Yet, in some neighborhoods, there is only one book for every 300 children.
          </p>
        </div>
        <div className="mission-image-wrapper">
          {/* NOTE: Replace with an organic photo (e.g. an empty shelf or children looking for books) */}
          <div className="placeholder-box">
            <span>[Organic Photo: The Issue]</span>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="container mission-section reverse-layout">
        <div className="mission-content">
          <h2>Our Solution: Books For All</h2>
          <p>
            We believe that every child deserves the chance to read, dream, and succeed. Books For All is dedicated to ending book deserts by distributing free, high-quality, and diverse books directly to children, schools, and community centers.
          </p>
          <p>
            By partnering with local educators and volunteers, we ensure that books reach the hands of those who need them most. Together, we can empower the next generation of readers and leaders.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/donate" className="btn btn-primary">Support Our Mission</Link>
          </div>
        </div>
        <div className="mission-image-wrapper">
          {/* NOTE: Replace with an organic photo (e.g. a child receiving a book or a packed bookshelf) */}
          <div className="placeholder-box">
            <span>[Organic Photo: The Solution]</span>
          </div>
        </div>
      </section>

      <section className="container barriers-card">
        <div className="barriers-header">
          <h2>Barriers to Accessing Books</h2>
          <p>
            For many children, access is blocked by distance, household cost pressure, and limited local resources.
            These barriers stack together and leave students with fewer chances to build a reading habit.
          </p>
        </div>
        <div className="barriers-grid">
          <article className="barrier-item">
            <div className="barrier-graphic">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h3>Distance & Availability</h3>
            <p>Neighborhoods may have no nearby libraries or bookstores, creating book deserts.</p>
          </article>
          <article className="barrier-item">
            <div className="barrier-graphic">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h3>Cost of Materials</h3>
            <p>Families often prioritize essentials first, making books difficult to afford consistently.</p>
          </article>
          <article className="barrier-item">
            <div className="barrier-graphic">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h3>Limited School Resources</h3>
            <p>Under-resourced classrooms may not have enough updated or diverse reading materials.</p>
          </article>
        </div>
      </section>

      <section className="donation-cta">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${kidsReading})` }}>
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <h2 className="page-title">Support This Mission</h2>
            <p className="page-subtitle" style={{ margin: '0 auto' }}>
              Help us deliver more books to children who need them by contributing to our early programs.
            </p>
            <div className="hero-actions" style={{ marginTop: '1.5rem' }}>
              <Link to="/donate" className="btn btn-accent">Donate Now</Link>
              <Link to="/contact" className="btn btn-primary">Get Involved</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
