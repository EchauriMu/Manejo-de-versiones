import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArtwalkPage from './ArtwalkPage';
import WhatsAppFloat from './WhatsAppFloat';
import Navigation from './Navigation';
import ContactSection from './ContactSection';
import HeroSection from './HeroSection';
import Footer from './Foteer';
import './App.css';

const properties = [
	{
		id: 1,
		type: 'Studio',
		area: '35 m²',
		price: 'From $2,500,000 MXN',
		features: ['1 Bathroom', 'Equipped kitchen', 'Balcony', 'Ocean view'],
	},
	{
		id: 2,
		type: '1 Bedroom',
		area: '50 m²',
		price: 'From $3,200,000 MXN',
		features: ['1 Bedroom', '1 Bathroom', 'Living-dining room', 'Private balcony'],
	},
	{
		id: 3,
		type: '2 Bedrooms',
		area: '75 m²',
		price: 'From $4,800,000 MXN',
		features: ['2 Bedrooms', '2 Bathrooms', 'Terrace', 'Panoramic view'],
	},
];

const images = {
	front: '/aterra-front-view.jpeg',
	view: '/aterra-view.jpeg',
	roof1: '/roof-garden-1.jpeg',
	roof2: '/roof-garden.jpeg',
	social: '/social-area.jpeg',
	logo: '/logo.jpeg',
	pricingPdf: '/Artwalk-Pricing-Jun10-2025-Lr (1).pdf',
};

const socialLinks = [
	{ name: 'TikTok', url: 'https://www.tiktok.com/@aterra.realstate?_t=ZS-8xTe37Qki9P&_r=1', network: 'tiktok' },
	{ name: 'Instagram', url: 'https://www.instagram.com/aterrarealstate?igsh=djZvMHpyeTlwdjNz&utm_source=qr', network: 'instagram' },
	{ name: 'YouTube', url: 'https://youtube.com/@aterra.realstate?si=WJkoC2tIIAJs_Oy-', network: 'youtube' },
	{ name: 'Facebook', url: 'https://www.facebook.com/share/1CG1uTMP6m/?mibextid=wwXIfr', network: 'facebook' },
];

const App = () => {
	const [activeSection, setActiveSection] = useState('home');
	const [navOpen, setNavOpen] = useState(false);

	return (
		<Router>
			<div className="website-container">
				<Navigation activeSection={activeSection} setActiveSection={setActiveSection} navOpen={navOpen} setNavOpen={setNavOpen} socialLinks={socialLinks} />
				<Routes>
					<Route path="/" element={<HeroSection />} />
					<Route path="/artwalk" element={<ArtwalkPage properties={properties} images={images} />} />
					<Route path="/contact" element={<ContactSection socialLinks={socialLinks} />} />
				</Routes>
				<WhatsAppFloat />
				<Footer />
			</div>
		</Router>
	);
};

export default App;