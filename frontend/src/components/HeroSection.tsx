import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative mt-14">
      <div className="relative h-[400px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/hero-bg.jpg")',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-6xl font-bold text-white">
            Art by female artists
          </h1>
          <p className="mb-8 text-xl text-white">
            Featuring 2,000+ works by trailblazing women
          </p>
          <div className="flex w-full max-w-[600px] items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search artists, styles, or eras"
                className="h-11 w-full rounded-md bg-[#1c2126]/90 pl-4 pr-3 text-sm text-white placeholder-gray-400 outline-none"
              />
            </div>
            <button className="h-11 rounded-md bg-[#1980e6] px-6 text-sm font-medium text-white">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;