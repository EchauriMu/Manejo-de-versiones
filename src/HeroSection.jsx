import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="section-container">
        <div className="hero-content" style={{ textAlign: 'center' }}>
          
          {/* Título animado */}
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            Aterra
            <motion.span
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            >
              Real Estate
            </motion.span>
          </motion.h1>

          {/* Botón con imagen responsiva y animación moderna */}
          <motion.button
            onClick={() => navigate('/artwalk')}
            aria-label="Ver información de Artwalk"
            className="button-primary"
            style={{
              padding: 0,
              border: 'none',
              background: 'none',
              boxShadow: 'none',
              marginTop: '3rem',
              cursor: 'pointer',
              width: '100%',
              maxWidth: 'clamp(320px, 80vw, 600px)'
            }}
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.6,
              type: 'spring',
              stiffness: 110,
              damping: 14
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src="/buttonHero.jpeg"
              alt="Ver información de Artwalk"
              className="hero-button-img"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '1.5rem',
                boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease-in-out'
              }}
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
