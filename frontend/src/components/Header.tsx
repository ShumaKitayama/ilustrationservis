import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 no-underline text-white">
              <div className="w-6 h-6 bg-white rounded"></div>
              <span className="text-lg font-medium">Art Gallery</span>
            </Link>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="search"
                className="block w-64 bg-gray-800 border-0 pl-10 pr-3 py-2 rounded-lg text-sm placeholder-gray-400 focus:outline-none"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <Link to="/explore" className="text-sm text-white hover:text-gray-300 no-underline">Explore</Link>
              <Link to="/artists" className="text-sm text-white hover:text-gray-300 no-underline">Artists</Link>
              <Link to="/exhibitions" className="text-sm text-white hover:text-gray-300 no-underline">Exhibitions</Link>
              <Link to="/events" className="text-sm text-white hover:text-gray-300 no-underline">Events</Link>
              <Link to="/stories" className="text-sm text-white hover:text-gray-300 no-underline">Stories</Link>
            </nav>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium">
                Join
              </button>
              <button className="text-sm font-medium text-white">Log in</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;