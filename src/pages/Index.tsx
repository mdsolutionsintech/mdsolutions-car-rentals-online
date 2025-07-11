
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CarCategories from '../components/CarCategories';
import FeaturedCars from '../components/FeaturedCars';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main>
        <HeroSection />
        <CarCategories />
        <FeaturedCars />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
