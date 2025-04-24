
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Presentation, Database, ChartBar } from 'lucide-react';
import BenefitsCalculator from '@/components/universities/BenefitsCalculator';
import IntegrationDemo from '@/components/universities/IntegrationDemo';

const Universities = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
                Empower Your Institution's Career Services
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Partner with TalentBridge.gr to enhance your career services, improve graduate outcomes, and strengthen industry connections.
              </p>
              <Button size="lg" className="bg-brand-blue hover:bg-blue-700">
                Request Partnership
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Calculator Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculate Partnership Benefits</h2>
                <p className="text-xl text-gray-600">
                  See how TalentBridge.gr can impact your institution's success metrics
                </p>
              </div>
              <BenefitsCalculator />
            </div>
          </div>
        </section>

        {/* Integration Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Integration & Features</h2>
              </div>
              <IntegrationDemo />
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                    <Presentation className="text-brand-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-3">
                    Enhanced Career Services
                  </h3>
                  <p className="text-gray-700">
                    Streamline career guidance and placement services with our comprehensive platform.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                    <Database className="text-brand-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-3">
                    Data-Driven Insights
                  </h3>
                  <p className="text-gray-700">
                    Access detailed analytics on graduate employment outcomes and industry trends.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                    <ChartBar className="text-brand-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-3">
                    Industry Connections
                  </h3>
                  <p className="text-gray-700">
                    Build stronger relationships with employers and industry partners.
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

export default Universities;
