
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import UserTypes from '@/components/home/UserTypes';
import Pricing from '@/components/home/Pricing';
import CallToAction from '@/components/home/CallToAction';
import AuthModal from '@/components/auth/AuthModal';

const Index = () => {
  useEffect(() => {
    // Create a reference to the auth modal on window object
    const dialog = document.querySelector("dialog");
    if (dialog) {
      window.authModal = dialog;
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <UserTypes />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
      <AuthModal />
    </div>
  );
};

export default Index;
