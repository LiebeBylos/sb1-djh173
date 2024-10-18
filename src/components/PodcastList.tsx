import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Podcast } from '../types';

interface PodcastListProps {
  podcasts: Podcast[];
}

const PodcastList: React.FC<PodcastListProps> = ({ podcasts }) => {
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

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Podcast</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Downloads</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {podcasts.map((podcast) => (
            <tr key={podcast.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{podcast.rank}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{podcast.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{podcast.downloads.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {getTrendIcon(podcast.trend)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PodcastList;