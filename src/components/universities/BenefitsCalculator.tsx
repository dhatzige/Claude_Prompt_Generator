
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const BenefitsCalculator = () => {
  const [studentCount, setStudentCount] = useState('');
  const [placementRate, setPlacementRate] = useState('');

  const calculateBenefits = () => {
    const students = parseInt(studentCount) || 0;
    const rate = parseInt(placementRate) || 0;
    
    // This is a simple calculation for demonstration
    const potentialImprovement = Math.min(rate + 15, 100);
    const additionalPlacements = Math.floor((students * (potentialImprovement - rate)) / 100);
    
    return {
      improvedRate: potentialImprovement,
      additionalPlacements,
    };
  };

  const results = calculateBenefits();

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Partnership Benefits Calculator</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="studentCount">Total Graduate Students per Year</Label>
            <Input
              id="studentCount"
              type="number"
              placeholder="Enter number of students"
              value={studentCount}
              onChange={(e) => setStudentCount(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="placementRate">Current Placement Rate (%)</Label>
            <Input
              id="placementRate"
              type="number"
              placeholder="Enter current placement rate"
              value={placementRate}
              onChange={(e) => setPlacementRate(e.target.value)}
            />
          </div>
          
          {studentCount && placementRate && (
            <div className="mt-4 space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Potential Improvements</h4>
                <ul className="space-y-2">
                  <li>Improved Placement Rate: {results.improvedRate}%</li>
                  <li>Additional Placements: ~{results.additionalPlacements} students</li>
                </ul>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BenefitsCalculator;
