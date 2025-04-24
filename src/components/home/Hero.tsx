
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import CounterStats from './CounterStats';

const Hero = () => {
  // In a real application, these would come from an API
  const [stats, setStats] = useState({
    jobs: 0,
    students: 0,
    placements: 0
  });

  // Simulate loading data from an API
  useEffect(() => {
    // This simulates an API call - in production, this would be a real API call
    const loadStats = setTimeout(() => {
      setStats({
        jobs: 2500,
        students: 15000,
        placements: 5000
      });
    }, 500);

    return () => clearTimeout(loadStats);
  }, []);

  return (
    <section className="hero-gradient py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 greek-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Bridging Education with <span className="text-brand-blue">Career Opportunities</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              TalentBridge.gr connects Greek university students and graduates with employers, 
              helping you launch your career or find the perfect talent.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="px-8" onClick={() => window.authModal.showModal()}>
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6">Discover Opportunities</h2>
            <div className="mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Job title, skill, or company"
                  className="pl-10 w-full h-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job type
                </label>
                <select className="w-full border border-gray-300 rounded-lg h-12 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue">
                  <option>Any job type</option>
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Internship</option>
                  <option>Remote</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <select className="w-full border border-gray-300 rounded-lg h-12 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue">
                  <option>All Greece</option>
                  <option>Athens</option>
                  <option>Thessaloniki</option>
                  <option>Patras</option>
                  <option>Heraklion</option>
                  <option>Remote</option>
                </select>
              </div>
            </div>
            
            <Button className="w-full">Search Opportunities</Button>
            
            <div className="mt-4 text-sm text-center">
              <span className="text-gray-500">Popular searches: </span>
              <a href="#" className="text-brand-blue hover:underline">Software Engineer</a>,{" "}
              <a href="#" className="text-brand-blue hover:underline">Marketing</a>,{" "}
              <a href="#" className="text-brand-blue hover:underline">Internship</a>,{" "}
              <a href="#" className="text-brand-blue hover:underline">Remotely</a>
            </div>
          </div>
        </div>
        
        <CounterStats 
          jobs={stats.jobs} 
          students={stats.students} 
          placements={stats.placements} 
        />
      </div>
    </section>
  );
};

export default Hero;
