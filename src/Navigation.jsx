import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { useNavigate } from 'react-router-dom';
import { Breadcrumb, Drawer } from 'antd';
import { Home, Mail } from 'lucide-react';
import { motion } from 'framer-motion'; // <-- Agrega esto
import './App.css';

const Navigation = ({ navOpen, setNavOpen, socialLinks }) => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation${scrolled ? ' nav-solid' : ' nav-transparent'}`}> 
      <div className="nav-container">
        <div className="logo-section">
          <img src="/logo.jpeg" alt="Aterra Logo" className="logo-img" />
        </div>
        {/* Botón hamburguesa solo visible en móvil */}
        <button
          className="nav-hamburger"
          onClick={() => setNavOpen(true)}
          aria-label="Open menu"
        >
          <span className="nav-hamburger-bar"></span>
          <span className="nav-hamburger-bar"></span>
          <span className="nav-hamburger-bar"></span>
        </button>
        {/* Menú escritorio */}
        <div className="nav-menu desktop" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <motion.button
            className="nav-button nav-button-underline"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.08, y: -2, boxShadow: "0 6px 24px rgba(38,38,38,0.18)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 18 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'none',
              border: 'none',
              color: '#262626',
              fontSize: '1.08rem',
              fontWeight: 600,
              cursor: 'pointer',
              padding: '0.5rem 1.2rem',
              borderRadius: '0.5rem',
              transition: 'background 0.2s'
            }}
          >
            <Home size={18} style={{ marginRight: 4 }} /> Home
          </motion.button>
          <motion.button
            className="nav-button nav-button-underline"
            onClick={() => navigate('/contact')}
            whileHover={{ scale: 1.04, boxShadow: "0 4px 18px rgba(38,38,38,0.13)", backgroundColor: "#262626", color: "#fff" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: 'none',
              border: 'none',
              color: '#262626',
              fontSize: '1.08rem',
              fontWeight: 600,
              cursor: 'pointer',
              padding: '0.5rem 1.2rem',
              borderRadius: '0.5rem',
              transition: 'background 0.2s'
            }}
          >
            <Mail size={18} style={{ marginRight: 4 }} /> Contact
          </motion.button>
        </div>
        <div className="social-links">
          {socialLinks.map((social) => (
            <SocialIcon
              key={social.name}
              url={social.url}
              network={social.network}
              style={{ height: 32, width: 32 }}
              bgColor="#262626"
              fgColor="#fff"
              title={social.name}
              target="_blank"
              rel="noopener noreferrer"
            />
          ))}
        </div>
        {/* Drawer para móvil */}
        <Drawer
          title={
            <img src="/logo.jpeg" alt="Aterra Logo" style={{ height: 40 }} />
          }
          placement="left"
          onClose={() => setNavOpen(false)}
          open={navOpen}
          bodyStyle={{ padding: 0 }}
          width={260}
        >
          <div style={{ padding: '2rem 1rem' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <li
                style={{ cursor: 'pointer', fontSize: '1.1rem', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}
                onClick={() => { navigate('/'); setNavOpen(false); }}
              >
                <Home size={18} style={{ marginRight: 4 }} /> Home
              </li>
              <li
                style={{ cursor: 'pointer', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: 8 }}
                onClick={() => { navigate('/contact'); setNavOpen(false); }}
              >
                <Mail size={18} style={{ marginRight: 4 }} /> Contact
              </li>
            </ul>
            <div style={{ marginTop: 32, display: 'flex', gap: 16 }}>
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.name}
                  url={social.url}
                  network={social.network}
                  style={{ height: 32, width: 32 }}
                  bgColor="#262626"
                  fgColor="#fff"
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ))}
            </div>
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navigation;
