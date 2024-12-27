import React from 'react';
import { Link } from 'react-router-dom';

interface Tab {
  name: string;
  path: string;
  active: boolean;
}

interface TabNavigationProps {
  tabs: Tab[];
}

const TabNavigation: React.FC<TabNavigationProps> = ({ tabs }) => {
  return (
    <div className="pb-3">
      <div className="flex border-b border-[#d0dbe7] px-4 gap-8">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            to={tab.path}
            className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 ${
              tab.active
                ? 'border-b-[#1980e6] text-[#0e141b]'
                : 'border-b-transparent text-[#4e7397]'
            }`}
          >
            <p className={`text-sm font-bold leading-normal tracking-[0.015em]`}>
              {tab.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;