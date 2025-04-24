
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, FileDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ROICalculatorProps {
  className?: string;
}

interface CalculationInputs {
  companySize: number;
  hiresPerYear: number;
  averageRecruiterSalary: number;
  averageHiringCostPerRole: number;
  averageTimeToHireInDays: number;
  currentProcessEfficiency: number;
}

interface CalculationResults {
  annualSavings: number;
  timeToHireReduction: number;
  costPerHireReduction: number;
  recruiterEfficiencyGain: number;
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ className }) => {
  const [inputs, setInputs] = useState<CalculationInputs>({
    companySize: 50,
    hiresPerYear: 15,
    averageRecruiterSalary: 30000,
    averageHiringCostPerRole: 4500,
    averageTimeToHireInDays: 45,
    currentProcessEfficiency: 60,
  });
  
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const calculateROI = () => {
    // Time saved calculation
    const timeToHireReduction = inputs.averageTimeToHireInDays * 0.35; // Assume 35% reduction
    
    // Cost per hire reduction
    const costPerHireReduction = inputs.averageHiringCostPerRole * 0.25; // Assume 25% reduction
    
    // Efficiency gain
    const recruiterEfficiencyGain = 100 - inputs.currentProcessEfficiency;
    
    // Annual savings
    const annualSavings = (
      inputs.hiresPerYear * costPerHireReduction + // Money saved per hire
      (inputs.averageRecruiterSalary / 230 / 8) * // Daily salary rate
      (inputs.averageTimeToHireInDays * 0.35) * // Time saved per hire
      inputs.hiresPerYear // Number of hires
    );
    
    setResults({
      annualSavings,
      timeToHireReduction,
      costPerHireReduction,
      recruiterEfficiencyGain,
    });
    
    setShowResults(true);
  };

  const exportResults = () => {
    if (!results) return;
    
    const csvContent = `
ROI Calculator Results for TalentBridge.gr

Company Information:
Company Size: ${inputs.companySize} employees
Annual Hires: ${inputs.hiresPerYear}
Average Recruiter Salary: €${inputs.averageRecruiterSalary.toLocaleString()}
Average Cost Per Hire: €${inputs.averageHiringCostPerRole.toLocaleString()}
Average Time to Hire: ${inputs.averageTimeToHireInDays} days
Current Process Efficiency: ${inputs.currentProcessEfficiency}%

Estimated Savings:
Annual Cost Savings: €${Math.round(results.annualSavings).toLocaleString()}
Time-to-Hire Reduction: ${Math.round(results.timeToHireReduction)} days
Cost Per Hire Reduction: €${Math.round(results.costPerHireReduction).toLocaleString()}
Recruiter Efficiency Gain: ${Math.round(results.recruiterEfficiencyGain)}%

Generated on ${new Date().toLocaleDateString()}
TalentBridge.gr - Connecting Greek Talent
    `;
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'TalentBridge_ROI_Calculator_Results.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className={`shadow-lg ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator size={20} />
          ROI Calculator
        </CardTitle>
        <CardDescription>
          Calculate your potential recruitment cost savings with TalentBridge.gr
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="companySize">Company Size (employees)</Label>
            <Input 
              id="companySize" 
              name="companySize" 
              type="number" 
              min="1"
              value={inputs.companySize} 
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="hiresPerYear">Annual Hires</Label>
            <Input 
              id="hiresPerYear" 
              name="hiresPerYear" 
              type="number" 
              min="1"
              value={inputs.hiresPerYear} 
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="averageRecruiterSalary">Average Recruiter Salary (€)</Label>
            <Input 
              id="averageRecruiterSalary" 
              name="averageRecruiterSalary" 
              type="number" 
              min="0"
              value={inputs.averageRecruiterSalary} 
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="averageHiringCostPerRole">Average Cost Per Hire (€)</Label>
            <Input 
              id="averageHiringCostPerRole" 
              name="averageHiringCostPerRole" 
              type="number" 
              min="0"
              value={inputs.averageHiringCostPerRole} 
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="averageTimeToHireInDays">Average Time to Hire (days)</Label>
            <Input 
              id="averageTimeToHireInDays" 
              name="averageTimeToHireInDays" 
              type="number" 
              min="1"
              value={inputs.averageTimeToHireInDays} 
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="currentProcessEfficiency">
              Current Process Efficiency (%)
              <Popover>
                <PopoverTrigger className="ml-1 text-xs text-muted-foreground opacity-70">ℹ️</PopoverTrigger>
                <PopoverContent className="text-sm">
                  Estimate how efficient your current hiring process is, where 100% means perfect efficiency with no wasted time or resources.
                </PopoverContent>
              </Popover>
            </Label>
            <Input 
              id="currentProcessEfficiency" 
              name="currentProcessEfficiency" 
              type="number" 
              min="1"
              max="100"
              value={inputs.currentProcessEfficiency} 
              onChange={handleInputChange}
            />
          </div>
        </div>

        <Button 
          className="w-full" 
          onClick={calculateROI}
        >
          Calculate Potential Savings
        </Button>
        
        {showResults && results && (
          <Alert className="mt-6 bg-green-50 border-green-200">
            <AlertTitle className="text-green-800">Your Potential Savings</AlertTitle>
            <AlertDescription className="text-green-700">
              <div className="mt-2 space-y-2">
                <div className="text-2xl font-bold">€{Math.round(results.annualSavings).toLocaleString()} / year</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Time-to-Hire Reduction</div>
                    <div className="text-lg font-semibold">{Math.round(results.timeToHireReduction)} days</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Cost Per Hire Reduction</div>
                    <div className="text-lg font-semibold">€{Math.round(results.costPerHireReduction).toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Efficiency Gain</div>
                    <div className="text-lg font-semibold">{Math.round(results.recruiterEfficiencyGain)}%</div>
                  </div>
                </div>
              </div>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      {showResults && results && (
        <CardFooter className="flex justify-end">
          <Button variant="outline" onClick={exportResults}>
            <FileDown className="mr-2" size={16} />
            Export Results
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ROICalculator;
