import React, { useState } from 'react';
import { KeywordRanking } from '../types';
import { Search, User, Settings, Clock, Star } from 'lucide-react';

interface MyAccountProps {
  keywords: KeywordRanking[];
}

const MyAccount: React.FC<MyAccountProps> = ({ keywords }) => {
  const [activeTab, setActiveTab] = useState('search-history');

  // Mock user data (replace with actual user data in a real application)
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    plan: 'Pro',
    joinDate: '2023-01-15',
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'search-history':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Recent Searches</h3>
            {keywords.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {keywords.map((keyword) => (
                  <div key={keyword.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                    <h4 className="font-semibold">{keyword.keyword}</h4>
                    <p className="text-sm text-gray-600">Rank: {keyword.rank}</p>
                    <p className="text-sm text-gray-600">Volume: {keyword.searchVolume}</p>
                    <p className="text-sm text-gray-600">Trend: {keyword.trend}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No recent searches found.</p>
            )}
          </div>
        );
      case 'account-info':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Account Information</h3>
            <div className="bg-white p-6 rounded-lg shadow">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Plan:</strong> {user.plan}</p>
              <p><strong>Join Date:</strong> {user.joinDate}</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
            <div className="bg-white p-6 rounded-lg shadow">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" defaultValue={user.name} className="input-primary w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" defaultValue={user.email} className="input-primary w-full" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password</label>
                  <input type="password" id="password" name="password" className="input-primary w-full" />
                </div>
                <button type="submit" className="btn-primary">Save Changes</button>
              </form>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 fade-in">
      <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-600">
        My Account
      </h2>

      <div className="flex space-x-4 border-b border-gray-200">
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'search-history' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-indigo-500'}`}
          onClick={() => setActiveTab('search-history')}
        >
          <Clock size={20} className="inline-block mr-2" />
          Search History
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'account-info' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-indigo-500'}`}
          onClick={() => setActiveTab('account-info')}
        >
          <User size={20} className="inline-block mr-2" />
          Account Info
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'settings' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-indigo-500'}`}
          onClick={() => setActiveTab('settings')}
        >
          <Settings size={20} className="inline-block mr-2" />
          Settings
        </button>
      </div>

      <div className="mt-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default MyAccount;