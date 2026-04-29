import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Heart, Shield } from 'lucide-react';
import kidsReading from '../assets/kidsReading.jpeg';
import OsaOyegunHeadshot from '../assets/OsaOyegunHeadshot.jpeg';
import ThelmaHeadshot from '../assets/ThelmaHeadshot.jpeg';
import UzoHeadshot from '../assets/UzoHeadshot.jpeg';

const About = () => {
  const team = [
    { name: 'Osa Oyegun', role: 'Founder', bio: 'Osa Oyegun is an experienced librarian and educator with 17 years of international experience. Osa believes that reading empowers children to learn about the world, understand different perspectives, and think critically. Literacy is a human right, and Nigerian children have the right to education, freedom, and progress. Together, we can help to ensure that their futures are assured.', photo: OsaOyegunHeadshot },
    { name: 'Thelma Murray-Bruce', role: 'Secretary / Trustee', bio: 'First-Class graduate of Gregory University, Uturu. Head of Legal and Group Secretary at Inovatech Consulting — providing legal research, drafting, compliance advisory, and stakeholder coordination.', photo: ThelmaHeadshot },
    { name: 'Eneh Uzochukwu', role: 'Trustee', bio: 'Economics graduate from Coal City University, Enugu. Project manager actively involved in multiple volunteer initiatives across Nigeria.', photo: UzoHeadshot },
  ];

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${kidsReading})` }}>
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-title">About Us</h1>
            <p className="page-subtitle" style={{ margin: '0 auto', color: '#ffffff' }}>
              We are a community of educators, parents, and volunteers dedicated to a single mission.
            </p>
            <div className="hero-actions" style={{ marginTop: '1.5rem' }}>
              <Link to="/donate" className="btn btn-accent">Donate to Our Work</Link>
              <Link to="/mission" className="btn btn-primary">Read the Mission</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container about-section-block">
        <div className="about-section-intro">
          <h2>Who We Are</h2>
          <p>
            Books For All is a team of educators, librarians, and community advocates focused on one goal:
            helping children build a reading culture through consistent access to quality books.
          </p>
        </div>
        <div className="team-grid">
          {team.map((member, idx) => (
            <div key={idx} className="team-card">
              <div className="team-photo-placeholder">
                <img src={member.photo === OsaOyegunHeadshot ? OsaOyegunHeadshot : member.photo === ThelmaHeadshot ? ThelmaHeadshot : UzoHeadshot} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container about-section-block">
        <div className="about-section-intro">
          <h2>Where We Are</h2>
          <p>
            We are currently based in Nigeria and partner with local schools, volunteers, and communities.
            Our focus is on underserved neighborhoods where children have very limited access to books.
          </p>
        </div>
        <div className="about-location-card" style={{ backgroundImage: 'url("/images/about-where-we-are-placeholder.jpg")' }}>
          <div className="about-location-overlay"></div>
          <div className="about-location-content">
            <h3>Community Distribution Hubs</h3>
            <p>Placeholder map/location visual: replace with your preferred region map or field photo.</p>
          </div>
        </div>
      </section>

      <section className="container about-section-block">
        <div className="about-section-intro">
          <h2>What We Do</h2>
          <p>
            We combine direct distribution, community events, and school partnerships to put books into the hands
            of children and support sustained literacy growth.
          </p>
        </div>
        <div className="about-work-grid">
          <div className="about-work-card">
            <h3>Book Collection & Sourcing</h3>
            <p>We gather donated and purchased books that match age and curriculum needs.</p>
          </div>
          <div className="about-work-card">
            <h3>Reading Drives</h3>
            <p>We run reading days and community drives that connect children with books directly.</p>
          </div>
          <div className="about-work-card">
            <h3>School Partnerships</h3>
            <p>We support schools with mini-libraries and targeted classroom book deliveries.</p>
          </div>
        </div>
      </section>

      <section className="container about-section-block">
        <div className="about-section-intro">
          <h2>How We Do It</h2>
          <p>
            Our model is built on trust, local collaboration, and accountability so that every contribution creates
            visible impact for children and schools.
          </p>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <Target className="value-icon" size={40} />
            <h3>Equity</h3>
            <p>We prioritize areas with the greatest need and least access to learning materials.</p>
          </div>
          <div className="value-card">
            <Heart className="value-icon" size={40} />
            <h3>Empathy</h3>
            <p>We listen first, then design programs with communities rather than for communities.</p>
          </div>
          <div className="value-card">
            <Shield className="value-icon" size={40} />
            <h3>Transparency</h3>
            <p>We track distribution and communicate clearly about how support is used.</p>
          </div>
        </div>
      </section>


      <section className="donation-cta">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${kidsReading})` }}>
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <h2 className="page-title">Help Power Our Team</h2>
            <p className="page-subtitle" style={{ margin: '0 auto' }}>
              Your support helps our volunteers and staff place meaningful books into more classrooms and homes.
            </p>
            <div className="hero-actions" style={{ marginTop: '1.5rem' }}>
              <Link to="/donate" className="btn btn-accent">Donate Now</Link>
              <Link to="/mission" className="btn btn-primary">See The Mission</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
