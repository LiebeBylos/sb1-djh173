import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import { Key, TrendingUp, BarChart2, Users } from 'lucide-react';

interface HomePageProps {
  onSearch: (keyword: string, country: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSearch }) => {
  const navigate = useNavigate();

  const handleSearch = (keyword: string, country: string) => {
    onSearch(keyword, country);
    navigate('/search-results');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center px-4 bg-gradient-to-b from-indigo-50 to-white">
      <div className="mb-8 animate-pulse">
        <Key size={64} className="text-indigo-600 mb-4" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-900 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600">
        Unlock the Secrets of Podcast Success
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
        Get the keys to your competitors' performance and skyrocket your podcast's visibility
      </p>
      <div className="w-full max-w-2xl mb-12">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="card hover-lift p-6">
          <TrendingUp size={32} className="text-indigo-500 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Keyword Insights</h3>
          <p className="text-gray-600">Uncover trending topics and optimize your content</p>
        </div>
        <div className="card hover-lift p-6">
          <BarChart2 size={32} className="text-indigo-500 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Cross-Platform Analytics</h3>
          <p className="text-gray-600">Track performance across Apple, Spotify, and YouTube</p>
        </div>
        <div className="card hover-lift p-6">
          <Users size={32} className="text-indigo-500 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold mb-2">Competitor Analysis</h3>
          <p className="text-gray-600">Stay ahead with in-depth market insights</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;