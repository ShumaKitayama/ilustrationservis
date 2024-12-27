import React from 'react';

interface Artwork {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

interface ArtworkGridProps {
  artworks: Artwork[];
  onArtworkClick: (id: number) => void;
}

const ArtworkGrid: React.FC<ArtworkGridProps> = ({ artworks, onArtworkClick }) => {
  if (!Array.isArray(artworks) || artworks.length === 0) {
    return <div className="text-white p-4">No artworks available</div>;
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      {artworks.map((artwork) => (
        <div key={artwork.id} onClick={() => onArtworkClick(artwork.id)}>
          <div className="cursor-pointer">
            <img
              src={artwork.image_url} // URLをそのまま使用
              alt={artwork.title}
              className="w-full bg-center bg-no-repeat aspect-square object-cover rounded-xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtworkGrid;