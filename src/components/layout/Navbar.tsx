
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-brand-blue">
            TalentBridge<span className="text-brand-orange">.gr</span>
          </Link>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-brand-dark-gray hover:text-brand-blue transition-colors">
            Home
          </Link>
          <Link to="/employers" className="text-brand-dark-gray hover:text-brand-blue transition-colors">
            For Employers
          </Link>
          <Link to="/students" className="text-brand-dark-gray hover:text-brand-blue transition-colors">
            For Students
          </Link>
          <Link to="/universities" className="text-brand-dark-gray hover:text-brand-blue transition-colors">
            For Universities
          </Link>
          <Link to="/blog" className="text-brand-dark-gray hover:text-brand-blue transition-colors">
            Blog
          </Link>
        </nav>

        {/* Auth buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" onClick={() => window.authModal.showModal()}>
            Sign In
          </Button>
          <Button onClick={() => window.authModal.showModal()}>
            Sign Up
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-brand-dark-gray"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="py-2 text-brand-dark-gray hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/employers" 
              className="py-2 text-brand-dark-gray hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Employers
            </Link>
            <Link 
              to="/students" 
              className="py-2 text-brand-dark-gray hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Students
            </Link>
            <Link 
              to="/universities" 
              className="py-2 text-brand-dark-gray hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Universities
            </Link>
            <Link 
              to="/blog" 
              className="py-2 text-brand-dark-gray hover:text-brand-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="flex flex-col space-y-3 pt-4 border-t">
              <Button variant="outline" onClick={() => {
                window.authModal.showModal();
                setMobileMenuOpen(false);
              }}>
                Sign In
              </Button>
              <Button onClick={() => {
                window.authModal.showModal();
                setMobileMenuOpen(false);
              }}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
