import React from 'react';

interface ArtworkDetailCardProps {
  title: string;
  description: string;
  image_url: string;
}

const ArtworkDetailCard: React.FC<ArtworkDetailCardProps> = ({ title, description, image_url }) => {
  return (
    <div className="max-w-3xl bg-[#1c2126] p-8 rounded-xl shadow-lg">
      <img
        src={image_url} // URLをそのまま使用
        alt={title}
        className="w-full aspect-square object-cover rounded-lg mb-6"
      />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ArtworkDetailCard;