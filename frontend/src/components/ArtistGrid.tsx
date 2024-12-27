import React from 'react';

interface Artist {
  id: number;
  name: string;
  profile: string;
  image_url: string;
  location?: string;
}

interface ArtistGridProps {
  artists: Artist[];
  onArtistClick: (id: number) => void;
}

const ArtistGrid: React.FC<ArtistGridProps> = ({ artists, onArtistClick }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-8">Featured Artists</h2>
      <div className="grid grid-cols-5 gap-6 mb-16">
        {artists.map((artist) => (
          <div
            key={artist.id}
            onClick={() => onArtistClick(artist.id)}
            className="cursor-pointer"
          >
            <img
              src={artist.image_url}
              alt={artist.name}
              className="aspect-square rounded-full object-cover w-full"
            />
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-8">New & Noteworthy</h2>
      <div className="space-y-6">
        {artists.map((artist) => (
          <div key={artist.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={artist.image_url}
                alt={artist.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium">{artist.name}</h3>
                <p className="text-sm text-gray-400">{artist.location || artist.profile}</p>
              </div>
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-2xl">
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistGrid;