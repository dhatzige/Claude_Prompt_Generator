
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const IntegrationDemo = () => {
  const features = [
    {
      title: "API Integration",
      description: "Seamlessly connect your existing systems with our robust API"
    },
    {
      title: "Data Security",
      description: "Enterprise-grade security with end-to-end encryption"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time insights into student engagement and outcomes"
    },
    {
      title: "Custom Reports",
      description: "Generate detailed reports on placement rates and trends"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature) => (
        <Card key={feature.title} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-xl">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default IntegrationDemo;
