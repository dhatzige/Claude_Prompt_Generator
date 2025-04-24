
import React, { useState, useEffect } from 'react';

interface CounterStatsProps {
  jobs: number;
  students: number;
  placements: number;
  animationDuration?: number;
}

const CounterStats: React.FC<CounterStatsProps> = ({
  jobs,
  students,
  placements,
  animationDuration = 2000
}) => {
  const [visibleJobs, setVisibleJobs] = useState(0);
  const [visibleStudents, setVisibleStudents] = useState(0);
  const [visiblePlacements, setVisiblePlacements] = useState(0);

  useEffect(() => {
    const jobsInterval = animateCounter(visibleJobs, jobs, setVisibleJobs, animationDuration);
    const studentsInterval = animateCounter(visibleStudents, students, setVisibleStudents, animationDuration);
    const placementsInterval = animateCounter(visiblePlacements, placements, setVisiblePlacements, animationDuration);

    return () => {
      clearInterval(jobsInterval);
      clearInterval(studentsInterval);
      clearInterval(placementsInterval);
    };
  }, [jobs, students, placements, animationDuration]);

  const animateCounter = (
    start: number,
    end: number,
    setter: React.Dispatch<React.SetStateAction<number>>,
    duration: number
  ) => {
    const totalSteps = 25; // Number of steps in the animation
    const stepValue = Math.ceil((end - start) / totalSteps);
    const stepDuration = duration / totalSteps;

    const interval = setInterval(() => {
      setter(prev => {
        const next = prev + stepValue;
        if (next >= end) {
          clearInterval(interval);
          return end;
        }
        return next;
      });
    }, stepDuration);
    
    return interval;
  };

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat().format(Math.floor(num));
  };

  return (
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div className="text-4xl font-bold text-brand-blue">{formatNumber(visibleJobs)}+</div>
        <div className="text-gray-600 mt-2">Active Jobs</div>
      </div>
      <div>
        <div className="text-4xl font-bold text-brand-blue">{formatNumber(visibleStudents)}+</div>
        <div className="text-gray-600 mt-2">Active Students</div>
      </div>
      <div>
        <div className="text-4xl font-bold text-brand-blue">{formatNumber(visiblePlacements)}+</div>
        <div className="text-gray-600 mt-2">Job Placements</div>
      </div>
      <div>
        <div className="text-4xl font-bold text-brand-blue">25+</div>
        <div className="text-gray-600 mt-2">Universities</div>
      </div>
    </div>
  );
};

export default CounterStats;
