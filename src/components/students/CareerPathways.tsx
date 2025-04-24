
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CareerPathwaysProps {
  className?: string;
}

const CareerPathways = ({ className }: CareerPathwaysProps) => {
  const paths = [
    {
      field: "Computer Science",
      roles: ["Software Engineer", "Data Scientist", "Product Manager"],
      avgSalary: "€25,000 - €45,000"
    },
    {
      field: "Business Administration",
      roles: ["Business Analyst", "Marketing Manager", "Consultant"],
      avgSalary: "€22,000 - €40,000"
    },
    {
      field: "Engineering",
      roles: ["Mechanical Engineer", "Civil Engineer", "Project Manager"],
      avgSalary: "€24,000 - €42,000"
    }
  ];

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6", className)}>
      {paths.map((path) => (
        <Card key={path.field} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">{path.field}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700">Common Roles:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {path.roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Average Starting Salary:</h4>
                <p className="text-gray-600">{path.avgSalary}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CareerPathways;
