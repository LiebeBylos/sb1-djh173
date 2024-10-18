import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (keyword: string, country: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword && country) {
      onSearch(keyword, country);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full fade-in">
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search for podcast keywords..."
          className="input-primary flex-grow w-full md:w-auto bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm"
        />
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="input-primary w-full md:w-auto bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm"
        >
          <option value="">Select a country</option>
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="CA">Canada</option>
          <option value="AU">Australia</option>
          <option value="DE">Germany</option>
        </select>
        <button type="submit" className="btn-primary w-full md:w-auto hover-lift" disabled={!keyword || !country}>
          <Search size={20} className="inline-block mr-1" />
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;