import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Users, Heart } from 'lucide-react';

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <h3>Contact</h3>
          <p className="footer-logo">Books For All Logo</p>
          <div className="footer-contact-info">
            <p>Phone:</p>
            <p>Email:</p>
            <p>Website:</p>
          </div>
          <div className="footer-social-links">
            <a href="#" aria-label="Website">
              <Globe size={18} />
            </a>
            <a href="#" aria-label="Community">
              <Users size={18} />
            </a>
            <a href="#" aria-label="Support">
              <Heart size={18} />
            </a>
          </div>
        </div>

        <div className="footer-links-column">
          <h3>Links</h3>
          <ul className="footer-links-list">
            <li><Link to="/about">ABOUT US</Link></li>
            <li><Link to="/mission">GET INVOLVED</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
            <li><a href="#">TERMS & CONDITIONS</a></li>
            <li><a href="#">PRIVACY POLICY</a></li>
          </ul>
        </div>

        <div>
          <h3>SIGN UP</h3>
          <p>Stay connected and join the movement:</p>
          <input className="footer-email-input" type="email" placeholder="Your Email Address" />
          <p className="footer-note">* Personal data will be encrypted</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© Copyright 2019 Equal Opportunity Community Initiative. All Rights Reserved</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
