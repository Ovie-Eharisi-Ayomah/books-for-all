import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Globe, Users, Briefcase } from 'lucide-react';
import kidsReading from '../assets/kidsReading.jpeg';

const Donate = () => {
  const [amount, setAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');

  const handleDonate = (e) => {
    e.preventDefault();
    const finalAmount = amount === 'custom' ? customAmount : amount;
    alert(`Thank you for your generous donation of $${finalAmount}! (This is a mockup)`);
  };

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${kidsReading})` }}>
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-title">Make an Impact</h1>
            <p className="page-subtitle" style={{ margin: '0 auto', color: '#ffffff' }}>
              Your contribution puts books directly into the hands of children who need them most.
            </p>
            <div className="hero-actions" style={{ marginTop: '1.5rem' }}>
              <Link to="/donate" className="btn btn-accent">Give Today</Link>
              <Link to="/mission" className="btn btn-primary">Why It Matters</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="container">
        <div className="donate-container">
          <div className="donate-info">
            <h2>Every Dollar Counts</h2>
            <p>Books For All is a registered 501(c)(3) non-profit organization. Your gift is tax-deductible.</p>
            <ul className="impact-list">
              <li><strong>$10</strong> provides 5 new books to a local classroom.</li>
              <li><strong>$25</strong> funds a community reading event.</li>
              <li><strong>$50</strong> stocks an entire mini-library.</li>
              <li><strong>$100</strong> sponsors a school for a year.</li>
            </ul>
          </div>

          <div className="donate-form-card">
            <form onSubmit={handleDonate}>
              <h3 style={{ marginBottom: '1rem' }}>Select an Amount</h3>
              <div className="amount-grid">
                {['10', '25', '50', '100'].map((val) => (
                  <button
                    key={val}
                    type="button"
                    className={`amount-btn ${amount === val ? 'selected' : ''}`}
                    onClick={() => { setAmount(val); setCustomAmount(''); }}
                  >
                    ${val}
                  </button>
                ))}
                <button
                  type="button"
                  className={`amount-btn ${amount === 'custom' ? 'selected' : ''}`}
                  onClick={() => setAmount('custom')}
                >
                  Custom
                </button>
              </div>

              {amount === 'custom' && (
                <div className="custom-input-wrapper">
                  <span className="currency-symbol">$</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Other Amount"
                    className="custom-amount-input"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    required
                  />
                </div>
              )}

              <button type="submit" className="btn btn-accent donate-submit-btn">
                <Heart size={20} style={{ marginRight: '8px' }} />
                Donate Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="ways-to-give bg-light">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Other Ways to Give</h2>
          <div className="ways-grid">
            <div className="way-card">
              <Globe size={32} className="way-icon" />
              <h3>Monthly Giving</h3>
              <p>Become a sustaining member by setting up a recurring monthly donation.</p>
            </div>
            <div className="way-card">
              <Users size={32} className="way-icon" />
              <h3>Volunteer</h3>
              <p>Join us at our local book sorting events and reading drives.</p>
            </div>
            <div className="way-card">
              <Briefcase size={32} className="way-icon" />
              <h3>Corporate Matching</h3>
              <p>Double your impact by checking if your employer matches charitable donations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency FAQ */}
      <section className="container faq-section">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Transparency & FAQs</h2>
        <div className="faq-list">
          <details className="faq-item">
            <summary>How exactly are my donations spent?</summary>
            <p>85% of all donations go directly to purchasing and distributing books. The remaining 15% covers essential operational costs like warehouse storage and logistics.</p>
          </details>
          <details className="faq-item">
            <summary>Can my company sponsor Books For All?</summary>
            <p>Yes! We offer corporate sponsorship tiers that include team-building volunteer days and branding opportunities at our book drives. Please reach out via our Contact page.</p>
          </details>
          <details className="faq-item">
            <summary>Do you accept used book donations?</summary>
            <p>We do accept gently used children's books at our designated drop-off locations, but financial contributions allow us to buy specifically requested, diverse, and bilingual books in bulk at a discount.</p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default Donate;
