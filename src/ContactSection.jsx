import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { Row, Col, Button } from 'antd';
import './App.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: 'spring',
      stiffness: 80
    }
  })
};

const ContactSection = ({ socialLinks }) => (
  <motion.section
    className="section contact-section"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeInUp}
  >
    <div className="section-container">
      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} md={12}>
          <motion.div
            className="contact-info"
            custom={1}
            variants={fadeInUp}
          >
            <h3>Contactanos</h3>
            <div className="contact-items">
              {[
                {
                  icon: <Phone />,
                  title: "Telefono",
                  text: "+52 1 311 244 1211"
                },
                {
                  icon: <Mail />,
                  title: "Correo",
                  text: "aterrapv@outlook.com"
                },
                {
                  icon: <MapPin />,
                  title: "Ubicación",
                  text: "Miramar 805, Downtown, Puerto Vallarta, Jalisco"
                }
              ].map((item, i) => (
                <motion.div
                  className="contact-item"
                  key={item.title}
                  custom={i + 2}
                  variants={fadeInUp}
                >
                  <div className={`contact-icon ${item.title.toLowerCase()}`}>
                    {item.icon}
                  </div>
                  <div className="contact-details">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div className="contact-social" custom={5} variants={fadeInUp}>
              <h4>Siguenos</h4>
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
            </motion.div>

            <motion.div className="hours-card" custom={6} variants={fadeInUp}>
              <h4>Horas de trabajo</h4>
              <p>Lunesa viernes: 10:00 am - 6:00 pm</p>
              <p>Sabados: 11:00 am - 4:00 pm</p>
            </motion.div>
          </motion.div>
        </Col>

        <Col xs={24} md={12}>
          <motion.div
            className="contact-actions"
            custom={7}
            variants={fadeInUp}
          >
            <h3>¿Estás listo para programar una cita?</h3>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Button
                  type="primary"
                  block
                  href="https://wa.me/5213113936827"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<Phone />}
                  className="contact-button whatsapp"
                  style={{ marginBottom: 8 }}
                >
                  WhatsApp
                </Button>
              </Col>
              <Col xs={24} sm={12}>
                <Button
                  type="default"
                  block
                  href="tel:+5213113936827"
                  icon={<Phone />}
                  className="contact-button phone"
                  style={{ marginBottom: 8 }}
                >
                  LLAMAR
                </Button>
              </Col>
              <Col xs={24}>
                <Button
                  type="default"
                  block
                  href="mailto:aterrapv@outlook.com"
                  icon={<Mail />}
                  className="contact-button email"
                >
                  CORREO
                </Button>
              </Col>
            </Row>
          </motion.div>
        </Col>
      </Row>
    </div>
  </motion.section>
);

export default ContactSection;
