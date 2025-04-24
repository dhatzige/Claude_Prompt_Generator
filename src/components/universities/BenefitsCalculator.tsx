import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface CalculatorInputs {
  studentPopulation: string;
  currentEmploymentRate: string;
  timeToEmployment: string;
  careerStaffCount: string;
  employerRelationships: string;
  annualEvents: string;
}

const BenefitsCalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    studentPopulation: '',
    currentEmploymentRate: '',
    timeToEmployment: '',
    careerStaffCount: '',
    employerRelationships: '',
    annualEvents: '',
  });
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: keyof CalculatorInputs, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateProjections = () => {
    // Convert string inputs to numbers, defaulting to 0 if empty or invalid
    const studentPopulation = parseFloat(inputs.studentPopulation) || 0;
    const currentEmploymentRate = parseFloat(inputs.currentEmploymentRate) || 0;
    const timeToEmployment = parseFloat(inputs.timeToEmployment) || 0;
    const careerStaffCount = parseFloat(inputs.careerStaffCount) || 0;
    const employerRelationships = parseFloat(inputs.employerRelationships) || 0;
    const annualEvents = parseFloat(inputs.annualEvents) || 0;

    // Employment Metrics
    const employmentRateIncrease = Math.min(15, Math.max(5, currentEmploymentRate * 0.1));
    const timeToEmploymentReduction = Math.min(3, Math.max(1, timeToEmployment * 0.2));
    const relevantFieldPlacementIncrease = Math.min(20, Math.max(10, currentEmploymentRate * 0.15));

    // Administrative Efficiency
    const hoursSavedPerStudent = 2; // Estimated hours saved per student
    const totalHoursSaved = studentPopulation * hoursSavedPerStudent;
    const staffTimeValue = totalHoursSaved * 50; // Assuming €50 per hour

    // Expanded Opportunities
    const newEmployerRelationships = Math.round(employerRelationships * 0.3);
    const additionalJobListings = newEmployerRelationships * 10; // Assuming 10 listings per employer
    const eventParticipationIncrease = Math.round(annualEvents * 0.25);

    return {
      employmentRateIncrease,
      timeToEmploymentReduction,
      relevantFieldPlacementIncrease,
      totalHoursSaved,
      staffTimeValue,
      newEmployerRelationships,
      additionalJobListings,
      eventParticipationIncrease
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const projections = calculateProjections();

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>University Partnership Benefits Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="studentPopulation">Student Population Size</Label>
                <Input
                  id="studentPopulation"
                  type="number"
                  value={inputs.studentPopulation}
                  onChange={(e) => handleInputChange('studentPopulation', e.target.value)}
                  placeholder="Enter student population"
                />
              </div>
              <div>
                <Label htmlFor="currentEmploymentRate">Current Graduate Employment Rate (%)</Label>
                <Input
                  id="currentEmploymentRate"
                  type="number"
                  value={inputs.currentEmploymentRate}
                  onChange={(e) => handleInputChange('currentEmploymentRate', e.target.value)}
                  placeholder="Enter employment rate"
                />
              </div>
              <div>
                <Label htmlFor="timeToEmployment">Average Time to Employment (months)</Label>
                <Input
                  id="timeToEmployment"
                  type="number"
                  value={inputs.timeToEmployment}
                  onChange={(e) => handleInputChange('timeToEmployment', e.target.value)}
                  placeholder="Enter time to employment"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="careerStaffCount">Number of Career Services Staff</Label>
                <Input
                  id="careerStaffCount"
                  type="number"
                  value={inputs.careerStaffCount}
                  onChange={(e) => handleInputChange('careerStaffCount', e.target.value)}
                  placeholder="Enter staff count"
                />
              </div>
              <div>
                <Label htmlFor="employerRelationships">Current Employer Relationships</Label>
                <Input
                  id="employerRelationships"
                  type="number"
                  value={inputs.employerRelationships}
                  onChange={(e) => handleInputChange('employerRelationships', e.target.value)}
                  placeholder="Enter employer relationships"
                />
              </div>
              <div>
                <Label htmlFor="annualEvents">Annual Career Events</Label>
                <Input
                  id="annualEvents"
                  type="number"
                  value={inputs.annualEvents}
                  onChange={(e) => handleInputChange('annualEvents', e.target.value)}
                  placeholder="Enter annual events"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button 
              onClick={handleCalculate}
              className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-2"
            >
              Calculate Project Benefits
            </Button>
          </div>

          {showResults && (
            <div className="mt-8 space-y-6">
              <h3 className="text-xl font-semibold">Projected Benefits</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Employment Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>Employment Rate Increase: +{projections.employmentRateIncrease.toFixed(1)}%</li>
                      <li>Time to Employment Reduction: -{projections.timeToEmploymentReduction.toFixed(1)} months</li>
                      <li>Relevant Field Placement Increase: +{projections.relevantFieldPlacementIncrease.toFixed(1)}%</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Administrative Efficiency</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>Total Hours Saved: {projections.totalHoursSaved}</li>
                      <li>Staff Time Value: €{projections.staffTimeValue.toLocaleString()}</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Expanded Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>New Employer Relationships: +{projections.newEmployerRelationships}</li>
                      <li>Additional Job Listings: +{projections.additionalJobListings}</li>
                      <li>Event Participation Increase: +{projections.eventParticipationIncrease}</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BenefitsCalculator;
