
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 lg:py-20 bg-brand-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 greek-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Bridge the Gap Between Education and Employment?
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Join TalentBridge.gr today and connect with opportunities that match your skills and aspirations. 
            Whether you're a student, employer, or university, we're here to help you succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="px-8 hover:bg-white" onClick={() => window.authModal.showModal()}>
              Create Free Account
            </Button>
            <Button size="lg" variant="outline" className="px-8 text-white border-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>
          
          <div className="mt-16 grid sm:grid-cols-3 gap-8 text-left">
            <div>
              <div className="bg-white/10 p-4 rounded-lg mb-4 inline-block">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Easy to Start</h3>
              <p className="text-white/80">
                Create your profile in minutes and start exploring opportunities immediately.
              </p>
            </div>
            
            <div>
              <div className="bg-white/10 p-4 rounded-lg mb-4 inline-block">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure & Compliant</h3>
              <p className="text-white/80">
                Your data is protected with the highest standards and GDPR compliance.
              </p>
            </div>
            
            <div>
              <div className="bg-white/10 p-4 rounded-lg mb-4 inline-block">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Results</h3>
              <p className="text-white/80">
                Our matching algorithm connects you with relevant opportunities quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
