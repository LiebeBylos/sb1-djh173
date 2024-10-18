import React from 'react';
import { Search, BarChart2, TrendingUp, Zap, HelpCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Search className="text-indigo-500 w-12 h-12 mb-4" />,
      title: 'Search Keywords',
      description: 'Enter your podcast niche keywords to see how they rank across platforms.',
    },
    {
      icon: <BarChart2 className="text-indigo-500 w-12 h-12 mb-4" />,
      title: 'Analyze Performance',
      description: 'Get detailed insights into your podcast\'s performance and ranking.',
    },
    {
      icon: <TrendingUp className="text-indigo-500 w-12 h-12 mb-4" />,
      title: 'Track Competitors',
      description: 'Monitor your competitors and identify opportunities to outrank them.',
    },
    {
      icon: <Zap className="text-indigo-500 w-12 h-12 mb-4" />,
      title: 'Optimize Content',
      description: 'Use our recommendations to optimize your podcast content and improve rankings.',
    },
  ];

  const faqItems = [
    {
      question: "How is the overall rank calculated?",
      answer: "The overall rank is a weighted average of your podcast's ranking across different platforms (Apple Podcasts, Spotify, and YouTube). It takes into account factors such as search visibility, listener engagement, and chart positions."
    },
    {
      question: "What does the search volume indicate?",
      answer: "Search volume represents the average number of monthly searches for a particular keyword. A higher search volume indicates greater interest in that topic, which could present an opportunity for your podcast to attract more listeners."
    },
    {
      question: "How should I interpret the trend data?",
      answer: "Trend data shows whether a keyword's popularity is rising, falling, or stable. A rising trend suggests growing interest, which might be a good opportunity to create content around that keyword. A falling trend might indicate a topic that's becoming less relevant."
    },
    {
      question: "What do the platform-specific rankings mean?",
      answer: "Platform-specific rankings show how your podcast ranks for a particular keyword on each major platform (Apple Podcasts, Spotify, YouTube). This helps you understand where your podcast performs best and where there's room for improvement."
    },
    {
      question: "How can I use the competitor analysis data?",
      answer: "Competitor analysis data helps you understand how your podcast compares to others in your niche. Use this information to identify content gaps, discover successful strategies, and find opportunities to differentiate your podcast."
    },
    {
      question: "What should I do with the keyword recommendations?",
      answer: "Keyword recommendations are suggestions for topics that could help improve your podcast's visibility. Consider incorporating these keywords into your episode titles, descriptions, and content to attract more listeners interested in these topics."
    }
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-indigo-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600">
          How Pod.Keys Works
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="card hover-lift p-6 text-center">
              <div className="flex justify-center">{step.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="card hover-lift p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <HelpCircle className="mr-2 text-indigo-500" />
                  {item.question}
                </h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;