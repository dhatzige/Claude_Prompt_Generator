
import React from 'react';
import {
  Briefcase,
  Search,
  Briefcase as Graduate, 
  Search as University
} from "lucide-react";

const Features = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Bridge to Your Future
          </h2>
          <p className="text-lg text-gray-600">
            TalentBridge.gr provides specialized tools for students, employers, and universities
            to create meaningful connections in the Greek job market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-brand-light-blue rounded-full flex items-center justify-center mb-6">
              <Graduate className="h-6 w-6 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Skills Assessment</h3>
            <p className="text-gray-600 mb-4">
              Identify and showcase your strengths with our comprehensive skills assessment tool, 
              designed to highlight your capabilities to potential employers.
            </p>
            <a href="#" className="text-brand-blue font-medium hover:underline inline-flex items-center">
              Learn more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          {/* Feature 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-brand-light-blue rounded-full flex items-center justify-center mb-6">
              <Briefcase className="h-6 w-6 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">CV Builder</h3>
            <p className="text-gray-600 mb-4">
              Create professional, multilingual resumes that stand out to employers with our 
              easy-to-use CV builder, optimized for the Greek and international job markets.
            </p>
            <a href="#" className="text-brand-blue font-medium hover:underline inline-flex items-center">
              Learn more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          {/* Feature 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-brand-light-blue rounded-full flex items-center justify-center mb-6">
              <Search className="h-6 w-6 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Job Matching</h3>
            <p className="text-gray-600 mb-4">
              Our intelligent matching system connects you with job opportunities aligned with your 
              skills, academic background, and career goals across Greece.
            </p>
            <a href="#" className="text-brand-blue font-medium hover:underline inline-flex items-center">
              Learn more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          {/* Feature 4 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-brand-light-blue rounded-full flex items-center justify-center mb-6">
              <University className="h-6 w-6 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Application Tracking</h3>
            <p className="text-gray-600 mb-4">
              Monitor all your job applications in one place with real-time status updates, keeping 
              you informed throughout your job search journey.
            </p>
            <a href="#" className="text-brand-blue font-medium hover:underline inline-flex items-center">
              Learn more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          {/* Feature 5 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-brand-light-blue rounded-full flex items-center justify-center mb-6">
              <Graduate className="h-6 w-6 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Learning Resources</h3>
            <p className="text-gray-600 mb-4">
              Access curated educational content to develop in-demand skills and prepare for 
              interviews, enhancing your employability in the competitive job market.
            </p>
            <a href="#" className="text-brand-blue font-medium hover:underline inline-flex items-center">
              Learn more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          {/* Feature 6 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-brand-light-blue rounded-full flex items-center justify-center mb-6">
              <Briefcase className="h-6 w-6 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Career Events</h3>
            <p className="text-gray-600 mb-4">
              Discover and register for career fairs, workshops, and networking events designed to 
              connect Greek students and employers across various industries.
            </p>
            <a href="#" className="text-brand-blue font-medium hover:underline inline-flex items-center">
              Learn more
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
