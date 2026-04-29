import React from 'react';
import { Link } from 'react-router-dom';
import kidsReading from '../assets/kidsReading.jpeg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${kidsReading})` }}>
          <div className="hero-overlay"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              End Book Deserts.<br />
              Empower Minds.
            </h1>
            <p className="hero-subtitle">
              Every child deserves the chance to read. Join Books For All in our mission to distribute books to communities that need them most.
            </p>
            <div className="hero-actions">
              <Link to="/donate" className="btn btn-accent">Donate Now</Link>
              <Link to="/mission" className="btn btn-primary">Our Mission</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-intro-section">
        <div className="container">
          <div className="about-intro-copy">
            <h2>What is Books For All?</h2>
            <p>
              Books For All is a new community-led NGO working to end book deserts and help children build strong reading habits.
              We collect, source, and deliver books to schools and neighborhoods where access is limited.
            </p>
          </div>
          <div className="about-intro-cards">
            <article className="about-intro-card">
              <div className="about-intro-card-image" style={{ backgroundImage: 'url("/images/home-card-mission-placeholder.jpg")' }}>
                <span>Mission image</span>
              </div>
              <h3>Our Mission</h3>
              <p>Learn why we exist and the long-term change we are working toward.</p>
              <Link to="/mission">Explore the mission</Link>
            </article>
            <article className="about-intro-card">
              <div className="about-intro-card-image" style={{ backgroundImage: 'url("/images/home-card-work-placeholder.jpg")' }}>
                <span>Our work image</span>
              </div>
              <h3>Our Work</h3>
              <p>See the team and values behind our day-to-day work in communities.</p>
              <Link to="/about">Learn about us</Link>
            </article>
            <article className="about-intro-card">
              <div className="about-intro-card-image" style={{ backgroundImage: 'url("/images/home-card-impact-placeholder.jpg")' }}>
                <span>Impact image</span>
              </div>
              <h3>The Impact</h3>
              <p>Help us scale early programs and put more books into children’s hands.</p>
              <Link to="/donate">Support with a donation</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="donation-cta">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${kidsReading})` }}>
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <h2 className="page-title">Help Us Launch Strong</h2>
            <p className="page-subtitle" style={{ margin: '0 auto', color: '#ffffff' }}>
              Books For All is still growing. Your support helps us place the first wave of books where they are needed most.
            </p>
            <div className="hero-actions" style={{ marginTop: '1.5rem' }}>
              <Link to="/donate" className="btn btn-accent">Donate Now</Link>
              <Link to="/mission" className="btn btn-primary">Read Our Mission</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-contact-section">
        <div className="container">
          <div className="home-contact-card">
            <h2>Contact Us</h2>
            <form className="home-contact-form">
              <div className="home-contact-grid">
                <div className="form-group">
                  <label htmlFor="home-first-name">First name</label>
                  <input id="home-first-name" type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="home-last-name">Last name</label>
                  <input id="home-last-name" type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="home-phone">Phone</label>
                  <input id="home-phone" type="tel" />
                </div>
                <div className="form-group">
                  <label htmlFor="home-email">Email</label>
                  <input id="home-email" type="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="home-country-1">Country</label>
                  <input id="home-country-1" type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="home-country-2">Country</label>
                  <input id="home-country-2" type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="home-address-1">Address</label>
                  <input id="home-address-1" type="text" />
                </div>
                <div className="form-group">
                  <label htmlFor="home-address-2">Address</label>
                  <input id="home-address-2" type="text" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="home-message">Tell us about how you want to make a difference</label>
                <textarea id="home-message" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-accent">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
