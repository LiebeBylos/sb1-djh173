import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      features: [
        'Keyword tracking for 1 podcast',
        'Weekly rank updates',
        'Basic analytics',
        'Limited search queries'
      ],
    },
    {
      name: 'Pro',
      price: '$5/month',
      features: [
        'Keyword tracking for 3 podcasts',
        'Daily rank updates',
        'Advanced analytics',
        'Competitor analysis',
        'Unlimited search queries',
        'Priority support'
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited podcast tracking',
        'Real-time rank updates',
        'Full analytics suite',
        'Dedicated support',
        'Custom integrations',
        'API access'
      ],
    },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-indigo-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600">
          Choose Your Plan
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="card hover-lift p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check size={20} className="text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="btn-primary w-full">
                {plan.name === 'Basic' ? 'Get Started' : 'Subscribe Now'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;