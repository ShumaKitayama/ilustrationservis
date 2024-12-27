import React from 'react';

const ActionButtons: React.FC = () => {
  return (
    <div className="flex gap-2">
      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]">
        <span className="truncate">Join</span>
      </button>
      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#293038] text-white text-sm font-bold leading-normal tracking-[0.015em]">
        <span className="truncate">Log in</span>
      </button>
    </div>
  );
};

export default ActionButtons;