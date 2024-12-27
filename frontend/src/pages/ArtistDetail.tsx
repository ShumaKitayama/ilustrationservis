import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ArtistProfile from '../components/ArtistProfile';
import TabNavigation from '../components/TabNavigation';
import ArtworkGrid from '../components/ArtworkGrid';

interface Artwork {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

interface Artist {
  id: number;
  name: string;
  profile: string;
  image_url: string;
}

const ArtistDetail: React.FC = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState<Artist | null>(null);
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const backendBaseURL = "http://localhost:8080";
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${backendBaseURL}/artists/${id}`)
      .then((response) => response.json())
      .then((data) => setArtist(data))
      .catch((error) => console.error('Error fetching artist:', error));

    fetch(`${backendBaseURL}/artworks?artist_id=${id}`)
      .then((response) => response.json())
      .then((data) => setArtworks(data))
      .catch((error) => console.error('Error fetching artworks:', error));
  }, [id]);

  if (!artist) return <div className="text-white">Loading...</div>;

  const tabs = [
    { name: 'Artwork', path: '#', active: true },
    { name: 'Shop', path: '#', active: false },
    { name: 'About', path: '#', active: false },
  ];

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden">
      <Header />
      <div className="px-40 flex flex-1 justify-center py-5 pt-20">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <ArtistProfile
            name={artist.name}
            profile={artist.profile}
            image_url={`${backendBaseURL}${artist.image_url}`}
          />
          <TabNavigation tabs={tabs} />
          <ArtworkGrid
            artworks={artworks}
            onArtworkClick={(artworkId) => navigate(`/artworks?artist_id=${id}&artwork_id=${artworkId}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;