import React from 'react';

import Hero from './homepage/Hero';
import HowItWorks from './homepage/HowItWorks';
import Popular from './homepage/Popular';
import Plans from './homepage/Plans';
import Tracking from './homepage/Tracking';
import Hygiene from './homepage/Hygiene';
import Provider from './homepage/Provider';
import WhyUs from './homepage/WhyUs';
import Contact from './homepage/Contact';
import Footer from './homepage/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      <Hero />
      <HowItWorks />
      <Popular />
      <Plans />
      <Tracking />
      <Hygiene />
      <Provider />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
