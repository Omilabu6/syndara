// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import ActiveBusiness from '../components/ActiveBusiness';
import InDevelopment from '../components/InDevelopment';
import RealEstate from '../components/RealEstate';
import Clarity from '../components/Clarity';
import ClientSay from '../components/ClientSay';
import Traction from '../components/Traction';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <HeroSection isVisible={isVisible} />
      <ActiveBusiness />
      <InDevelopment />
      <RealEstate />
      <Clarity />
      <Traction />
      <ClientSay />
      
    </div>
  );
};

export default Home;