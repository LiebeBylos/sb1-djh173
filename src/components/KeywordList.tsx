import React from 'react';
import { TrendingUp, TrendingDown, Minus, Headphones, Zap, Target, FileText, BarChart2, AlertTriangle } from 'lucide-react';
import { KeywordRanking } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Cell } from 'recharts';

interface KeywordListProps {
  keywords: KeywordRanking[];
}

const KeywordList: React.FC<KeywordListProps> = ({ keywords }) => {
  const keyword = keywords[0]; // We'll focus on the first (and only) keyword

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'rising':
        return <TrendingUp className="text-green-500" />;
      case 'falling':
        return <TrendingDown className="text-red-500" />;
      default:
        return <Minus className="text-gray-500" />;
    }
  };

  const getRankCategory = (rank: number) => {
    if (rank <= 3) return { category: 'Excellent', color: 'text-green-500' };
    if (rank <= 7) return { category: 'Good', color: 'text-indigo-500' };
    return { category: 'Fair', color: 'text-yellow-500' };
  };

  // Prepare data for the chart
  const chartData = [
    { name: 'Apple', value: keyword.platforms.apple, color: '#FF5A5F' },
    { name: 'Spotify', value: keyword.platforms.spotify, color: '#1DB954' },
    { name: 'YouTube', value: keyword.platforms.youtube, color: '#FF0000' },
  ];

  // Mock data for historical trend (you would replace this with actual data from your API)
  const trendData = [
    { date: '2023-01', rank: 10 },
    { date: '2023-02', rank: 8 },
    { date: '2023-03', rank: 6 },
    { date: '2023-04', rank: 5 },
    { date: '2023-05', rank: 3 },
    { date: 'Current', rank: keyword.rank },
  ];

  // Mock data for keyword recommendations
  const keywordRecommendations = [
    { keyword: 'podcast marketing', volume: 5000, difficulty: 'Medium' },
    { keyword: 'podcast SEO tips', volume: 3000, difficulty: 'Low' },
    { keyword: 'grow podcast audience', volume: 4000, difficulty: 'Medium' },
    { keyword: 'podcast monetization', volume: 6000, difficulty: 'High' },
  ];

  return (
    <div className="space-y-8 fade-in">
      <div className="card shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600">
          Keyword Details: "{keyword.keyword}" in {keyword.country}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <Target className="text-indigo-500" />
            <div>
              <p className="text-sm text-gray-500">Overall Rank</p>
              <p className="text-xl font-semibold">{keyword.rank} 
                <span className={`ml-2 text-sm ${getRankCategory(keyword.rank).color}`}>
                  ({getRankCategory(keyword.rank).category})
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="text-indigo-500" />
            <div>
              <p className="text-sm text-gray-500">Search Volume</p>
              <p className="text-xl font-semibold">{keyword.searchVolume.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {getTrendIcon(keyword.trend)}
            <div>
              <p className="text-sm text-gray-500">Trend</p>
              <p className="text-xl font-semibold capitalize">{keyword.trend}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Headphones className="text-indigo-500" />
            <div>
              <p className="text-sm text-gray-500">Top Podcast</p>
              <p className="text-xl font-semibold">{keyword.topPodcast}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600">
          Platform Rankings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(keyword.platforms).map(([platform, rank]) => (
            <div key={platform} className="flex items-center space-x-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${platform === 'apple' ? 'bg-red-100' : platform === 'spotify' ? 'bg-green-100' : 'bg-red-100'}`}>
                {platform === 'apple' && <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13v6.429L15.429 15 16 14.429 12 11V7h-1z"/></svg>}
                {platform === 'spotify' && <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.35-1.434-5.305-1.76-8.786-.963-.335.077-.67-.133-.746-.47-.077-.334.132-.67.47-.745 3.808-.87 7.076-.496 9.712 1.115.293.18.386.563.207.856zM17.81 13.7c-.226.367-.706.482-1.072.257-2.687-1.652-6.785-2.131-9.965-1.166-.413.127-.848-.108-.973-.522-.125-.413.108-.848.522-.973 3.632-1.102 8.147-.568 11.234 1.328.366.226.48.707.254 1.076zm.105-2.835c-3.223-1.914-8.54-2.09-11.618-1.156-.494.154-1.018-.118-1.173-.612-.154-.494.118-1.018.612-1.172 3.533-1.073 9.405-.866 13.115 1.338.445.264.59.838.327 1.282-.264.443-.838.59-1.282.325l.02-.005z"/></svg>}
                {platform === 'youtube' && <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5.436 12.195l-7.5 4.33c-.65.376-1.48-.079-1.48-.836V6.311c0-.757.83-1.212 1.48-.836l7.5 4.33c.65.376.65 1.314 0 1.69z"/></svg>}
              </div>
              <div>
                <p className="text-sm text-gray-500 capitalize">{platform}</p>
                <p className="text-xl font-semibold">#{rank}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600">
          Top 3 Podcasts for "{keyword.keyword}"
        </h2>
        <div className="space-y-4">
          {keyword.topPodcasts.map((podcast, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-indigo-500">{index + 1}</span>
              <div>
                <p className="font-semibold">{podcast.title}</p>
                <p className="text-sm text-gray-500">Rank: {podcast.rank}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600">
          Competitor Keyword Gaps
        </h2>
        <p className="text-gray-700 mb-2">
          Your competitors are ranking for these keywords that you're not currently targeting:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>podcast production tips</li>
          <li>interview techniques for podcasters</li>
          <li>podcast equipment reviews</li>
        </ul>
      </div>

      <div className="card shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600">
          Keyword Performance Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="chart-container">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <BarChart2 className="mr-2 text-indigo-500" />
              Platform Rankings
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 10]} />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" name="Rank">
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-container">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <TrendingUp className="mr-2 text-indigo-500" />
              Ranking Trend
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 10]} reversed />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="rank" stroke="#4F46E5" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Key Insights</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Your keyword "{keyword.keyword}" ranks highest on {chartData.sort((a, b) => a.value - b.value)[0].name} (Rank {chartData.sort((a, b) => a.value - b.value)[0].value})</li>
            <li>Overall ranking has improved from {trendData[0].rank} to {keyword.rank} in the last 6 months</li>
            <li>Search volume of {keyword.searchVolume.toLocaleString()} indicates {keyword.searchVolume > 10000 ? 'high' : 'moderate'} interest in this topic</li>
          </ul>
        </div>
      </div>

      {/* Keyword Recommendations */}
      <div className="card shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600">
          Keyword Recommendations
        </h2>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <TrendingUp className="mr-2 text-indigo-500" />
            Trending Keywords in Your Niche
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {keywordRecommendations.map((rec, index) => (
              <div key={index} className="bg-indigo-100 rounded-lg p-3 text-center">
                <p className="font-semibold text-indigo-800">{rec.keyword}</p>
                <p className="text-sm text-gray-600">Volume: {rec.volume}</p>
                <p className="text-sm text-gray-600">Difficulty: {rec.difficulty}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <FileText className="mr-2 text-indigo-500" />
            Content Optimization Tips
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Include the keyword "{keyword.keyword}" in your episode titles and descriptions</li>
            <li>Create content around the trending keywords in your niche</li>
            <li>Use long-tail variations of your main keyword to capture more specific searches</li>
            <li>Optimize your podcast show notes with relevant keywords and timestamps</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KeywordList;