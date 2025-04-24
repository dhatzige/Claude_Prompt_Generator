
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, LineChart } from 'lucide-react';
import CareerPathways from '@/components/students/CareerPathways';

const Students = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
                Launch Your Career in Greece
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Connect with top employers, discover career paths, and access resources tailored for Greek university students and graduates.
              </p>
              <Button size="lg" className="bg-brand-blue hover:bg-blue-700">
                Get Started
              </Button>
            </div>
          </div>
        </section>

        {/* Career Pathways Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Career Pathways</h2>
                <p className="text-xl text-gray-600">
                  Discover potential career paths based on your degree and interests
                </p>
              </div>
              <CareerPathways className="mt-8" />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join TalentBridge.gr</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                    <GraduationCap className="text-brand-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-3">
                    Career Guidance
                  </h3>
                  <p className="text-gray-700">
                    Get personalized career path recommendations and skill development guidance based on your degree.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                    <BookOpen className="text-brand-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-3">
                    Learning Resources
                  </h3>
                  <p className="text-gray-700">
                    Access curated learning materials, workshops, and self-assessment tools to enhance your skills.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                    <LineChart className="text-brand-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-3">
                    Job Matching
                  </h3>
                  <p className="text-gray-700">
                    Get matched with relevant job opportunities based on your skills, experience, and preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Students;
