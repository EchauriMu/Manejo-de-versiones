import React from 'react';
import { Phone } from 'lucide-react';
import './App.css';

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/5213113936827"
    className="whatsapp-float"
    target="_blank"
    rel="noopener noreferrer"
    title="WhatsApp"
  >
    <Phone />
  </a>
);

export default WhatsAppFloat;
