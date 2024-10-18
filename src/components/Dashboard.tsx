import React, { useState } from 'react';
import { KeywordRanking } from '../types';
import { Search, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  keywords: KeywordRanking[];
}

const Dashboard: React.FC<DashboardProps> = ({ keywords }) => {
  const [podcastSearch, setPodcastSearch] = useState('');
  const [selectedPodcast, setSelectedPodcast] = useState<string | null>(null);

  // Mock data for podcast search (replace with actual API call in production)
  const mockPodcasts = [
    { id: '1', name: 'Crime Junkie', category: 'True Crime' },
    { id: '2', name: 'The Daily', category: 'News' },
    { id: '3', name: 'Stuff You Should Know', category: 'Education' },
    { id: '4', name: 'My Favorite Murder', category: 'True Crime' },
    { id: '5', name: 'TED Radio Hour', category: 'Technology' },
  ];

  // Mock data for keyword rankings (replace with actual API call in production)
  const mockKeywordRankings = [
    { keyword: 'true crime', yourRank: 3, competitorRank: 1 },
    { keyword: 'news podcast', yourRank: 7, competitorRank: 2 },
    { keyword: 'educational podcast', yourRank: 5, competitorRank: 4 },
    { keyword: 'tech news', yourRank: 10, competitorRank: 6 },
    { keyword: 'comedy show', yourRank: 15, competitorRank: 8 },
  ];

  const filteredPodcasts = mockPodcasts.filter(podcast =>
    podcast.name.toLowerCase().includes(podcastSearch.toLowerCase())
  );

  const handlePodcastSelect = (podcastId: string) => {
    setSelectedPodcast(podcastId);
    // In a real application, you would fetch the podcast's keyword data here
  };

  const getTrendIcon = (yourRank: number, competitorRank: number) => {
    if (yourRank < competitorRank) return <TrendingUp className="text-green-500" />;
    if (yourRank > competitorRank) return <TrendingDown className="text-red-500" />;
    return <Minus className="text-gray-500" />;
  };

  return (
    <div className="space-y-8 fade-in">
      <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600">
        Podcast Performance Dashboard
      </h2>

      {/* Podcast Search Section */}
      <div className="card shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Search Your Podcast</h3>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={podcastSearch}
            onChange={(e) => setPodcastSearch(e.target.value)}
            placeholder="Enter your podcast name"
            className="input-primary flex-grow"
          />
          <button className="btn-primary">
            <Search size={20} />
          </button>
        </div>
        {podcastSearch && (
          <ul className="mt-4 space-y-2">
            {filteredPodcasts.map(podcast => (
              <li
                key={podcast.id}
                className="p-2 hover:bg-indigo-100 cursor-pointer rounded"
                onClick={() => handlePodcastSelect(podcast.id)}
              >
                {podcast.name} - {podcast.category}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Keyword Comparison Section */}
      {selectedPodcast && (
        <div className="card shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Keyword Performance Comparison</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-indigo-100">
                  <th className="px-4 py-2 text-left">Keyword</th>
                  <th className="px-4 py-2 text-left">Your Rank</th>
                  <th className="px-4 py-2 text-left">Competitor Rank</th>
                  <th className="px-4 py-2 text-left">Trend</th>
                </tr>
              </thead>
              <tbody>
                {mockKeywordRankings.map((ranking, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-2">{ranking.keyword}</td>
                    <td className="px-4 py-2">{ranking.yourRank}</td>
                    <td className="px-4 py-2">{ranking.competitorRank}</td>
                    <td className="px-4 py-2">
                      {getTrendIcon(ranking.yourRank, ranking.competitorRank)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Keyword Ranking Visualization */}
      {selectedPodcast && (
        <div className="card shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Keyword Ranking Visualization</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockKeywordRankings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="keyword" />
              <YAxis domain={[0, 20]} reversed />
              <Tooltip />
              <Legend />
              <Bar dataKey="yourRank" name="Your Rank" fill="#4F46E5" />
              <Bar dataKey="competitorRank" name="Competitor Rank" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Recent Keyword Searches Section */}
      <div className="card shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Keyword Searches</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keywords.map((keyword) => (
            <div key={keyword.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
              <h4 className="font-semibold">{keyword.keyword}</h4>
              <p className="text-sm text-gray-600">Rank: {keyword.rank}</p>
              <p className="text-sm text-gray-600">Volume: {keyword.searchVolume}</p>
              <p className="text-sm text-gray-600">Trend: {keyword.trend}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;