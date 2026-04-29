import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Heart, BookOpen } from 'lucide-react';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Mission from './pages/Mission';
import About from './pages/About';
import Contact from './pages/Contact';
import SiteFooter from './components/SiteFooter';

// --- Navigation Component ---
const Navigation = () => {
  const location = useLocation();

  // On GitHub Pages, location.pathname will include the repo name
  // This check works whether you are on localhost or GitHub
  const isActive = (path) => {
    const currentPath = location.pathname;
    if (path === '/') {
      // Matches both "/" (local) and "/books-for-all/" (GitHub)
      return currentPath === '/' || currentPath === '/books-for-all' || currentPath === '/books-for-all/';
    }
    return currentPath.endsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <BookOpen style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
          BFA
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/mission" className={`nav-link ${isActive('/mission') ? 'active' : ''}`}>Mission</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
          <Link to="/donate" className="btn btn-accent">
            <Heart size={18} style={{ marginRight: '8px' }} />
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

// --- Main App ---
function App() {
  return (
    /* 
      CRITICAL: The basename prop tells React Router that the app 
      is hosted at /books-for-all/ and not at the root domain.
    */
    <Router basename="/books-for-all">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      <SiteFooter />
    </Router>
  );
}

export default App;
