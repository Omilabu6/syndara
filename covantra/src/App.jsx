// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import LoadingReveal from './components/LoadingReveal';
import Borrowers from './pages/Borrowers';
import Investors from './pages/Investors';
import CaseStudies from './pages/CaseStudies';
import HowItWorks from './pages/HowItWorks';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import { Footer } from './components/Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <div className="relative">
        <CustomCursor />
        {/* Navbar OUTSIDE SmoothScroll - stays fixed */}
        {!isLoading && (
          <div
            style={{
              animation: 'slideDownFade 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards'
            }}
          >
            <Navbar />
          </div>
        )}
        
        {/* SmoothScroll only wraps content, not navbar */}
        <SmoothScroll>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/borrowers" element={<Borrowers />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </SmoothScroll>
        
        {isLoading && <LoadingReveal onComplete={() => setIsLoading(false)} />}
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes slideDownFade {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Router>
  );
};

export default App;