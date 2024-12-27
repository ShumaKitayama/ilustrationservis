import React from 'react';
import { Search } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-300">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-transparent"></div>
        <div className="relative h-[480px] flex flex-col justify-center items-center text-center">
          <h1 className="text-6xl font-bold mb-4">Art by female artists</h1>
          <p className="text-xl mb-8">Featuring 2,000+ works by trailblazing women</p>
          <div className="flex items-center w-[420px] bg-black/20 backdrop-blur rounded-lg p-1">
            <div className="flex-1 flex items-center gap-3 px-3">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="search"
                className="w-full bg-transparent border-0 focus:outline-none text-sm"
                placeholder="Search artists, styles, or eras"
              />
            </div>
            <button className="px-6 py-2 bg-blue-600 rounded-lg text-sm font-medium">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;