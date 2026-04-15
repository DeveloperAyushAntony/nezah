import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import CollectionsPage from './pages/CollectionsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Router>
      <div className={`min-h-screen flex flex-col transition-colors duration-500 overflow-x-hidden ${isDark ? 'bg-background-dark text-white' : 'bg-background-light text-primary'}`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home isDark={isDark} />} />
            <Route path="/about" element={<About isDark={isDark} />} />
            <Route path="/collections" element={<CollectionsPage isDark={isDark} />} />
            <Route path="/gallery" element={<GalleryPage isDark={isDark} />} />
            <Route path="/contact" element={<ContactPage isDark={isDark} />} />
          </Routes>
        </main>
        <Footer isDark={isDark} />
      </div>
    </Router>
  );
}

export default App;
