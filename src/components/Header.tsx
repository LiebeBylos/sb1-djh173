import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BarChart2, LogIn, LogOut, DollarSign, HelpCircle, Search, User } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  hasSearchResults: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, hasSearchResults }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // TODO: Implement actual logout logic
    navigate('/');
  };

  const handleBackToSearch = () => {
    navigate('/search-results');
  };

  const showBackToSearch = isLoggedIn && hasSearchResults && location.pathname !== '/search-results' && location.pathname !== '/home';

  return (
    <header className="header-gradient shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center logo-animation">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 8C6 5.79086 7.79086 4 10 4H14C16.2091 4 18 5.79086 18 8V16C18 18.2091 16.2091 20 14 20H10C7.79086 20 6 18.2091 6 16V8Z" stroke="#4F46E5" strokeWidth="2"/>
                <path d="M10 8H14" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 12H14" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 16H14" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">Pod.Keys</h1>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              {showBackToSearch && (
                <li>
                  <button onClick={handleBackToSearch} className="flex items-center space-x-1 text-white hover:text-indigo-200 transition duration-300">
                    <Search size={20} />
                    <span className="hidden md:inline">Back to Search</span>
                  </button>
                </li>
              )}
              <li>
                <Link to="/pricing" className="flex items-center space-x-1 text-white hover:text-indigo-200 transition duration-300">
                  <DollarSign size={20} />
                  <span className="hidden md:inline">Pricing</span>
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="flex items-center space-x-1 text-white hover:text-indigo-200 transition duration-300">
                  <HelpCircle size={20} />
                  <span className="hidden md:inline">How It Works</span>
                </Link>
              </li>
              {isLoggedIn && (
                <>
                  <li>
                    <Link to="/my-account" className="flex items-center space-x-1 text-white hover:text-indigo-200 transition duration-300">
                      <User size={20} />
                      <span className="hidden md:inline">My Account</span>
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="flex items-center space-x-1 text-white hover:text-indigo-200 transition duration-300">
                      <LogOut size={20} />
                      <span className="hidden md:inline">Logout</span>
                    </button>
                  </li>
                </>
              )}
              {!isLoggedIn && (
                <li>
                  <Link to="/login" className="flex items-center space-x-1 text-white hover:text-indigo-200 transition duration-300">
                    <LogIn size={20} />
                    <span className="hidden md:inline">Login</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;