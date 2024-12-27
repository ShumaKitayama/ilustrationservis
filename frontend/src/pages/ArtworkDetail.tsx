import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ArtworkDetailCard from '../components/ArtworkDetailCard';

interface Artwork {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

const ArtworkDetail: React.FC = () => {
  const location = useLocation();
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const backendBaseURL = "http://localhost:8080";

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const artistId = params.get('artist_id');

    if (!artistId) {
      console.error('No artist_id provided in query params');
      setLoading(false);
      return;
    }

    fetch(`${backendBaseURL}/artworks?artist_id=${artistId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch artworks: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data: Artwork[]) => {
        setArtworks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching artworks:', error);
        setLoading(false);
      });
  }, [location.search]);

  useEffect(() => {
    if (artworks.length > 0) {
      const params = new URLSearchParams(location.search);
      const artworkId = parseInt(params.get('artwork_id') || '', 10);
      const artwork = artworks.find((item) => item.id === artworkId);
      setSelectedArtwork(artwork || null);
    }
  }, [artworks, location.search]);

  if (loading) {
    return (
      <div className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden">
        <Header />
        <div className="flex items-center justify-center flex-1">
          <div className="text-white text-lg">Loading...</div>
        </div>
      </div>
    );
  }

  if (!selectedArtwork) {
    return (
      <div className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden">
        <Header />
        <div className="flex items-center justify-center flex-1">
          <div className="text-white text-lg">Artwork not found or no data available</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden">
      {/* fixed と z-50 を追加してヘッダーを固定 */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      
      {/* pt-16 を追加してヘッダーの高さ分の余白を確保 */}
      <div className="flex-1 flex items-center justify-center py-10 px-4 pt-16 mt-16">
        <div className="relative bg-[#1c2126] p-6 rounded-2xl max-w-2xl w-full">
          <div className="relative">
            <img
              src={`${backendBaseURL}${selectedArtwork.image_url}`}
              alt={selectedArtwork.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          <div className="mt-4 flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-white">{selectedArtwork.title}</h1>
              <p className="text-gray-400 mt-2">{selectedArtwork.description}</p>
            </div>
            
            <div className="w-24 h-24 bg-white rounded-lg p-2 shadow-lg ml-4">
              <img 
                src={`${backendBaseURL}/qr/placeholder.png`}
                alt="QR Code"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;