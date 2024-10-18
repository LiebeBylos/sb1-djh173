import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import KeywordList from './components/KeywordList';
import MyAccount from './components/MyAccount';
import Login from './components/Login';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import AuthRedirect from './components/AuthRedirect';
import { KeywordRanking } from './types';
import { searchYouTubePodcasts } from './services/youtubeApi';

function App() {
  const [searchResult, setSearchResult] = useState<KeywordRanking | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedResult = localStorage.getItem('lastSearchResult');
    if (storedResult) {
      setSearchResult(JSON.parse(storedResult));
    }
  }, []);

  const handleSearch = async (keyword: string, country: string) => {
    setIsLoading(true);
    // TODO: Implement actual API call to backend
    const mockResult: KeywordRanking = {
      id: '1',
      keyword: keyword,
      country: country,
      rank: Math.floor(Math.random() * 10) + 1,
      searchVolume: Math.floor(Math.random() * 20000) + 5000,
      trend: ['rising', 'falling', 'stable'][Math.floor(Math.random() * 3)] as 'rising' | 'falling' | 'stable',
      topPodcast: 'Sample Podcast',
      platforms: {
        apple: Math.floor(Math.random() * 10) + 1,
        spotify: Math.floor(Math.random() * 10) + 1,
        youtube: Math.floor(Math.random() * 10) + 1
      },
      topPodcasts: [
        { title: 'Top Podcast 1', rank: Math.floor(Math.random() * 5) + 1 },
        { title: 'Top Podcast 2', rank: Math.floor(Math.random() * 5) + 6 },
        { title: 'Top Podcast 3', rank: Math.floor(Math.random() * 5) + 11 }
      ]
    };

    try {
      const youtubeResults = await searchYouTubePodcasts(keyword);
      console.log('YouTube results:', youtubeResults);
      // In a real implementation, we would use the YouTube results to update the mockResult
    } catch (error) {
      console.error('Error fetching YouTube data:', error);
    }

    setTimeout(() => {
      setSearchResult(mockResult);
      localStorage.setItem('lastSearchResult', JSON.stringify(mockResult));
      setIsLoading(false);
    }, 1000); // Simulating API delay
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header isLoggedIn={isLoggedIn} hasSearchResults={!!searchResult} />
        <main className="container mx-auto px-4 py-8">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route
                path="/home"
                element={isLoggedIn ? <HomePage onSearch={handleSearch} /> : <Navigate to="/login" />}
              />
              <Route
                path="/my-account"
                element={isLoggedIn ? <MyAccount keywords={searchResult ? [searchResult] : []} /> : <Navigate to="/login" />}
              />
              <Route
                path="/search-results"
                element={isLoggedIn && searchResult ? <KeywordList keywords={[searchResult]} /> : <Navigate to="/login" />}
              />
              <Route path="/auth/callback" element={<AuthRedirect />} />
            </Routes>
          )}
        </main>
      </div>
    </Router>
  );
}

export default App;