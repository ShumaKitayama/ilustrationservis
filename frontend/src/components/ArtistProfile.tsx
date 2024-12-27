import React from 'react';

interface ArtistProfileProps {
  name: string;
  profile: string;
  image_url: string;
}

const ArtistProfile: React.FC<ArtistProfileProps> = ({ name, profile, image_url }) => {
  return (
    <div className="flex p-4 @container">
      <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
        <div className="flex gap-4">
          <img
            src={image_url} // URLをそのまま使用
            alt={name}
            className="min-h-32 w-32 object-cover rounded-full"
          />
          <div className="flex flex-col justify-center">
            <p className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em]">{name}</p>
            <p className="text-[#4e7397] text-base font-normal leading-normal">{profile}</p>
          </div>
        </div>
        <div className="flex w-full max-w-[480px] gap-3 @[480px]:w-auto">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em] flex-1 @[480px]:flex-auto">
            <span className="truncate">Follow</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] flex-1 @[480px]:flex-auto">
            <span className="truncate">Message</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;