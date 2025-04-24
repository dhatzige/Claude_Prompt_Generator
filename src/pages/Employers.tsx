
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ROICalculator from '@/components/employers/ROICalculator';

const Employers = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
                Hire Top Greek Talent, Faster
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Connect with pre-vetted candidates from top Greek universities and reduce your time-to-hire by up to 35%.
              </p>
              <button className="bg-brand-blue text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculate Your Recruitment ROI</h2>
                <p className="text-xl text-gray-600">
                  See how TalentBridge.gr can reduce your hiring costs and improve recruitment efficiency.
                </p>
              </div>
              <ROICalculator className="mt-8" />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TalentBridge.gr</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-brand-blue mb-3">
                    Pre-Vetted Candidates
                  </h3>
                  <p className="text-gray-700">
                    Connect with top students and graduates from Greece's leading universities, all pre-screened for quality.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-brand-blue mb-3">
                    Reduce Time-to-Hire
                  </h3>
                  <p className="text-gray-700">
                    Our matching algorithm helps you find the right candidates faster, reducing your recruitment timeline.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-brand-blue mb-3">
                    Save on Costs
                  </h3>
                  <p className="text-gray-700">
                    Lower your cost-per-hire by up to 25% compared to traditional recruitment agencies and job boards.
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

export default Employers;
