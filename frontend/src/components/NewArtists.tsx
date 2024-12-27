import React from 'react';

interface Artist {
  id: number;
  name: string;
  profile: string;
  image_url: string;
  location?: string;
}

interface NewArtistsProps {
  artists: Artist[];
  onArtistClick: (id: number) => void;
}

const NewArtists: React.FC<NewArtistsProps> = ({ artists, onArtistClick }) => {
  if (!Array.isArray(artists) || artists.length === 0) {
    return <div className="text-white p-4">No artists available</div>;
  }
  
  return (
    <div className="flex flex-col">
      {artists.map((artist) => (
        <div
          key={artist.id}
          className="flex items-center gap-4 bg-[#111418] px-4 min-h-[72px] py-2 justify-between cursor-pointer hover:bg-[#1c2126] transition-colors"
          onClick={() => onArtistClick(artist.id)}
        >
          <div className="flex items-center gap-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
              style={{ backgroundImage: `url(${artist.image_url})` }}
            />
            <div className="flex flex-col justify-center">
              <p className="text-white text-base font-medium leading-normal line-clamp-1">
                {artist.name}
              </p>
              <p className="text-[#9dabb8] text-sm font-normal leading-normal line-clamp-2">
                {artist.location || artist.profile}
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <div className="text-white flex size-7 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewArtists;