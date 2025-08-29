import './carousel-arrows.css';
import React from 'react';
import { Layout, Row, Col, Typography, Card, Divider, Image } from 'antd';
import AmenidadesCarousel from './AmenidadesCarousel';
import LocalesCarousel from './LocalesCarousel';
import { motion } from 'framer-motion';
import ContactoInfo from './ContactoInfo';
import './App.css';
import LocationSection from './LocationSection';
const { Header, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const ArtWalkApp = () => {
  const catalogoData = [
    {
      id: 1,
      title: "Local Comercial A1",
      details: "Planta Baja - ArtWalk",
      image: "https://via.placeholder.com/300x200/8E44AD/FFFFFF?text=Local+A1",
      contact: "Ver Floor Plan"
    },
    {
      id: 2,
      title: "Local Comercial A2",
      details: "Planta Baja - ArtWalk",
      image: "https://via.placeholder.com/300x200/E74C3C/FFFFFF?text=Local+A2",
      contact: "Ver Floor Plan"
    },
    {
      id: 3,
      title: "Local Comercial B1",
      details: "Primer Piso - ArtWalk",
      image: "https://via.placeholder.com/300x200/2ECC71/FFFFFF?text=Local+B1",
      contact: "Ver Floor Plan"
    },
    {
      id: 4,
      title: "Local Comercial B2",
      details: "Primer Piso - ArtWalk",
      image: "https://via.placeholder.com/300x200/F39C12/FFFFFF?text=Local+B2",
      contact: "Ver Floor Plan"
    },
    {
      id: 5,
      title: "Espacio Premium C1",
      details: "Segundo Piso - ArtWalk",
      image: "https://via.placeholder.com/300x200/9B59B6/FFFFFF?text=Premium+C1",
      contact: "Ver Floor Plan"
    },
    {
      id: 6,
      title: "Espacio Premium C2",
      details: "Segundo Piso - ArtWalk",
      image: "https://via.placeholder.com/300x200/34495E/FFFFFF?text=Premium+C2",
      contact: "Ver Floor Plan"
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Hero Header */}
      <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Fondo animado con Framer Motion */}
        <motion.div
          className="hero-section hero-section-artwalk"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            backgroundImage: `url('/ArtExt.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            willChange: 'transform',
            minHeight: '100vh',
            aspectRatio: '16/9',
          }}
        />
        {/* Responsive background fix for mobile */}
        <style>{`
          @media (max-width: 900px) {
            .hero-section-artwalk {
              background-position: center top !important;
              background-size: cover !important;
              min-height: 60vh !important;
            }
          }
          @media (max-width: 600px) {
            .hero-section-artwalk {
              background-position: center top !important;
              background-size: cover !important;
              min-height: 40vh !important;
            }
          }
        `}</style>
        <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
          <div className="hero-content" style={{ textAlign: 'center', width: '100%' }}>
            {/* Título animado con línea */}
            <motion.h1
              className="hero-title triodion-font"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
              }}
              style={{ position: 'relative', display: 'inline-block', fontWeight: 700 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.1, delay: 0.2 }}
                style={{ display: 'inline-block', letterSpacing: '0.04em', color: '#fff' }}
              >
                ArtWalk
              </motion.span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 1.1, ease: 'easeOut' }}
                style={{
                  height: '4px',
                  width: '100%',
                  background: 'linear-gradient(90deg, #8E44AD 0%, #F2EEE9 100%)',
                  margin: '0.5rem auto 0',
                  borderRadius: '2px',
                  transformOrigin: 'left',
                }}
              />
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <Content style={{ padding: '40px 20px', background: 'linear-gradient(135deg, #EDE8E0, #F2EEE9)' }}>

        {/* Project Overview Section */}
        <Row gutter={[24, 24]} style={{ marginBottom: '40px' }}>
          <Col span={24}>
            <Title level={2}>Live the Art. Feel the Nature.</Title>
            <Paragraph>
              <Text strong>ArtWalk</Text> is not just a real estate development, it's a lifestyle for people passionate about art and respect for nature.
              Inspired by the four elements — earth, water, fire, and air — this project integrates the harmony of nature with the aesthetics of contemporary design.
            </Paragraph>
            <Paragraph>
              As part of the <Text underline>LEED®</Text> program, ArtWalk is committed to sustainability, community, and the environment. An underground art gallery
              will be the heart of the complex, connecting local and international artists with residents.
            </Paragraph>
          </Col>
        </Row>

        {/* Amenities Section */}
        <Row gutter={[24, 24]} style={{ marginBottom: '10px' }}>
          <Col xs={24} lg={8}>
            <Card
              title="ArtWalk Amenities"
              style={{ height: '100%' , backgroundColor: 'transparent'}}
              styles={{ body: { padding: '20px'} }}
            >
              <ul style={{ listStyle: 'disc', paddingLeft: 24, color: '#444', fontSize: '1.08rem', margin: 0 }}>
                <li>Rooftop Infinity Pool</li>
                <li>Jacuzzi</li>
                <li>Gym &amp; Yoga Deck</li>
                <li>Hammock Lounge Area</li>
                <li>Cenote-Style Cold-Water Pool</li>
                <li>Firepit</li>
                <li>24/7 Security</li>
                <li>Elegant Lobby</li>
                <li>Curated Art Gallery</li>
                <li>Underground Parking</li>
                <li>Rooftop Bar</li>
                <li>Elevator Access</li>
              </ul>
            </Card>
          </Col>
          <Col xs={24} lg={16}>
            <AmenidadesCarousel />
          </Col>
        </Row>

        {/* Commercial Spaces Section */}
        <Row gutter={[0, 24]}>
          <Col xs={24}>
            <Title level={2}>Catalog</Title>
            <Paragraph>
              Explore the available apartment options at ArtWalk. Each space is designed to maximize natural light and views, with high-quality finishes and customizable options.
            </Paragraph>
            <LocalesCarousel catalogoData={catalogoData} />
          </Col>
        </Row>

        {/* Call to Action Section */}
        <Divider style={{ margin: '10px 0 30px' }} />
        <Row justify="center" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Col span={24}>
            <Title level={3}>Invest in ArtWalk Today</Title>
            <Paragraph style={{ maxWidth: '700px', margin: '0 auto' }}>
              Construction is underway. This is the ideal time to acquire your space at pre-sale prices. As the project progresses, its value will only increase.
            </Paragraph>
          </Col>
        </Row>

        {/* Pricing Section */}
        <Row gutter={[32, 24]} justify="center" align="middle" style={{ marginBottom: '40px' }}>
          <Col xs={24} md={12} style={{ textAlign: 'center' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div
                style={{
                  width: '100%',
                  maxWidth: 480,
                }}
              >
                <Image
                  src="/aterra-view.webp"
                  alt="ArtWalk Pricing"
                  width="100%"
                  height={580}
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '1rem',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
                    aspectRatio: '2/3'
                  }}
                />
              </div>
            </div>
            <style>{`
              @media (max-width: 900px) {
                .ant-col-md-12 > div > div {
                  max-width: 320px !important;
                }
              }
            `}</style>
          </Col>
          <Col xs={24} md={12} style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 24,
            padding: '0 1rem'
          }}>
            <h2 style={{
              fontWeight: 800,
              fontSize: '2rem',
              marginBottom: 8,
              color: '#262626',
              lineHeight: 1.2
            }}>
              Discover Our Full Price List
            </h2>
            <p style={{
              color: '#444',
              fontSize: '1.12rem',
              marginBottom: 0,
              maxWidth: 420
            }}>
              Download the detailed price list in PDF format and explore all available units and investment options. For personalized advice or to check availability, contact our team directly.
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              width: '100%',
              maxWidth: 340
            }}>
              <a
                href="/Artwalk-Pricing-Jun10-2025-Lr%20(1).pdf"
                download
                style={{
                  display: 'inline-block',
                  padding: '1rem 2.5rem',
                  fontSize: '1.08rem',
                  fontWeight: 700,
                  background: 'linear-gradient(90deg, #f2f2f2 0%, #e0e0e0 100%)',
                  color: '#262626',
                  borderRadius: '0.75rem',
                  border: 'none',
                  boxShadow: '0 2px 12px rgba(180,180,180,0.10)',
                  textDecoration: 'none',
                  textAlign: 'center',
                  transition: 'background 0.2s, box-shadow 0.2s, transform 0.2s'
                }}
              >
                Download Pricing PDF
              </a>
              <a
                href="/contact"
                style={{
                  display: 'inline-block',
                  padding: '1rem 2.5rem',
                  fontSize: '1.08rem',
                  fontWeight: 700,
                  background: 'linear-gradient(90deg, #f2f2f2 0%, #e0e0e0 100%)',
                  color: '#262626',
                  borderRadius: '0.75rem',
                  border: 'none',
                  boxShadow: '0 2px 12px rgba(180,180,180,0.10)',
                  textDecoration: 'none',
                  textAlign: 'center',
                  transition: 'background 0.2s, box-shadow 0.2s, transform 0.2s'
                }}
              >
                Contact an Advisor
              </a>
            </div>
          </Col>
        </Row>

        {/* Location Section */}
        <LocationSection />

        {/* Contact Info Section */}
        <Divider style={{ margin: '40px 0 30px' }} />
        <ContactoInfo />

      </Content>
    </Layout>
  );
};

export default ArtWalkApp;
