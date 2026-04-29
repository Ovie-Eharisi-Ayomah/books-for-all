import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Globe, Heart, Users } from 'lucide-react';
import kidsReading from '../assets/kidsReading.jpeg';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly. (This is a mockup)');
  };

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${kidsReading})` }}>
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-title">Get in Touch</h1>
            <p className="page-subtitle" style={{ margin: '0 auto', color: '#ffffff' }}>
              Have a question about donating, volunteering, or partnering with us? We would love to hear from you.
            </p>
            <div className="hero-actions" style={{ marginTop: '1.5rem' }}>
              <Link to="/donate" className="btn btn-accent">Donate Now</Link>
              <Link to="/mission" className="btn btn-primary">See Our Impact</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container contact-help-section">
        <h2>Ways You Can Help</h2>
        <div className="contact-help-grid">
          <article className="contact-help-card">
            <h3>How People Can Help</h3>
            <p>Individuals can donate funds, gift books, sponsor reading packs, and advocate for literacy in their communities.</p>
          </article>
          <article className="contact-help-card">
            <h3>How Companies Can Help</h3>
            <p>Companies can fund book drives, support logistics, provide matching grants, and sponsor school-level literacy programs.</p>
          </article>
          <article className="contact-help-card">
            <h3>What Is Done With Donations</h3>
            <p>Donations are used to source quality books, support distribution, run reading events, and strengthen local program delivery.</p>
          </article>
          <article className="contact-help-card">
            <h3>Volunteering</h3>
            <p>Volunteers help with sorting, local outreach, event coordination, and reading support sessions for children.</p>
          </article>
          <article className="contact-help-card">
            <h3>Innovative Forms of Donation</h3>
            <p>Support through recurring micro-giving, in-kind logistics services, technology sponsorships, and corporate resource sharing.</p>
          </article>
        </div>
      </section>

      <section className="container contact-container">
        {/* Contact Form */}
        <div className="contact-form-card">
          <h2 style={{ marginBottom: '1.5rem' }}>Contact Us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="home-contact-grid">
              <div className="form-group">
                <label htmlFor="contact-first-name">First name</label>
                <input id="contact-first-name" type="text" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-last-name">Last name</label>
                <input id="contact-last-name" type="text" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-phone">Phone</label>
                <input id="contact-phone" type="tel" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" type="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-country-1">Country</label>
                <input id="contact-country-1" type="text" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-country-2">Country</label>
                <input id="contact-country-2" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="contact-address-1">Address</label>
                <input id="contact-address-1" type="text" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-address-2">Address</label>
                <input id="contact-address-2" type="text" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Tell us about how you want to make a difference</label>
              <textarea id="contact-message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-accent" style={{ width: '100%' }}>Submit</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.125rem' }}>
            Our team is available Monday through Friday, 9am to 5pm EST. We strive to respond to all inquiries within 24 hours.
          </p>

          <div className="info-item">
            <Mail className="info-icon" size={28} />
            <div>
              <h3>Email Us</h3>
              <p>hello@booksforall.org</p>
            </div>
          </div>

          <div className="info-item">
            <Phone className="info-icon" size={28} />
            <div>
              <h3>Call Us</h3>
              <p>(555) 123-4567</p>
            </div>
          </div>

          <div className="info-item">
            <MapPin className="info-icon" size={28} />
            <div>
              <h3>Visit Us (Headquarters)</h3>
              <p>123 Reading Way, Suite 100<br/>Literacy City, ST 12345</p>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Visit our website">
              <Globe size={28} />
            </a>
            <a href="#" className="social-icon" aria-label="Support our mission">
              <Heart size={28} />
            </a>
            <a href="#" className="social-icon" aria-label="Join our community">
              <Users size={28} />
            </a>
          </div>
        </div>
      </section>



      <section className="donation-cta">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${kidsReading})` }}>
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <h2 className="page-title">Your Gift Starts A Story</h2>
            <p className="page-subtitle" style={{ margin: '0 auto' }}>
              If you are ready to support children with books today, your donation helps us act immediately.
            </p>
            <div className="hero-actions" style={{ marginTop: '1.5rem' }}>
              <Link to="/donate" className="btn btn-accent">Donate Now</Link>
              <Link to="/mission" className="btn btn-primary">Read Our Mission</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
