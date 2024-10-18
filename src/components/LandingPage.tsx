import React from 'react';
import { Link } from 'react-router-dom';
import { Key, TrendingUp, BarChart2, Users, Zap, Globe } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="mb-8 animate-pulse inline-block">
            <Key size={64} className="text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-indigo-900 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600">
            Unlock Your Podcast's Potential
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Pod.Keys gives you the insights and tools to outperform your competition and grow your audience across all major podcast platforms.
          </p>
          <Link to="/login" className="btn-primary text-lg px-8 py-4 hover-lift">
            Start Your Free Trial
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="card hover-lift p-6">
            <TrendingUp size={32} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Keyword Optimization</h3>
            <p className="text-gray-600">Discover high-performing keywords to boost your podcast's visibility</p>
          </div>
          <div className="card hover-lift p-6">
            <BarChart2 size={32} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Competitive Analysis</h3>
            <p className="text-gray-600">Benchmark your performance against top competitors in your niche</p>
          </div>
          <div className="card hover-lift p-6">
            <Users size={32} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Audience Insights</h3>
            <p className="text-gray-600">Understand your listeners and tailor your content to their preferences</p>
          </div>
          <div className="card hover-lift p-6">
            <Zap size={32} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
            <p className="text-gray-600">Track your podcast's performance with up-to-the-minute data</p>
          </div>
          <div className="card hover-lift p-6">
            <Globe size={32} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Multi-platform Support</h3>
            <p className="text-gray-600">Optimize for Apple Podcasts, Spotify, and YouTube simultaneously</p>
          </div>
          <div className="card hover-lift p-6">
            <Key size={32} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">SEO Recommendations</h3>
            <p className="text-gray-600">Get actionable tips to improve your podcast's search engine rankings</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-indigo-900">Ready to take your podcast to the next level?</h2>
          <Link to="/login" className="btn-primary text-lg px-8 py-4 hover-lift">
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;