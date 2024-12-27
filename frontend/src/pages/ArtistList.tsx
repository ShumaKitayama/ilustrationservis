import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

interface Artist {
  id: number;
  name: string;
  profile: string;
  image_url: string;
}

const ArtistList: React.FC = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const navigate = useNavigate();
  const backendBaseURL = "http://localhost:8080";

  useEffect(() => {
    fetch(`${backendBaseURL}/artists`)
      .then((response) => response.json())
      .then((data) => setArtists(data))
      .catch((error) => console.error('Error fetching artists:', error));
  }, []);

  // データが読み込まれていない場合のローディング表示
  if (artists.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded"></div>
                <span className="text-lg font-medium">Art Gallery</span>
              </div>
              
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
                <a href="#" className="text-sm hover:text-gray-300">Explore</a>
                <a href="#" className="text-sm hover:text-gray-300">Artists</a>
                <a href="#" className="text-sm hover:text-gray-300">Exhibitions</a>
                <a href="#" className="text-sm hover:text-gray-300">Events</a>
                <a href="#" className="text-sm hover:text-gray-300">Stories</a>
              </nav>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium">
                  Join
                </button>
                <button className="text-sm font-medium">Log in</button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
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

        {/* Featured Artists */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-8">Featured Artists</h2>
          <div className="grid grid-cols-5 gap-6 mb-16">
            {artists.map((artist) => (
              <div
                key={artist.id}
                onClick={() => navigate(`/artists/${artist.id}`)}
                className="cursor-pointer aspect-square"
              >
                <img
                  src={`${backendBaseURL}${artist.image_url}`}
                  alt={artist.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-8">New & Noteworthy</h2>
          <div className="space-y-6">
            {artists.map((artist) => (
              <div key={artist.id} onClick={() => navigate(`/artists/${artist.id}`)}className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={`${backendBaseURL}${artist.image_url}`}
                    alt={artist.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{artist.name}</h3>
                    <p className="text-sm text-gray-400">{artist.profile}</p>
                  </div>
                </div>
                <button className="w-8 h-8 flex items-center justify-center text-2xl">
                  +
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArtistList;