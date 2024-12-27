import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <div className="flex items-center gap-9">
      <Link to="/explore" className="text-white text-sm font-medium leading-normal">
        Explore
      </Link>
      <Link to="/artists" className="text-white text-sm font-medium leading-normal">
        Artists
      </Link>
      <Link to="/exhibitions" className="text-white text-sm font-medium leading-normal">
        Exhibitions
      </Link>
      <Link to="/events" className="text-white text-sm font-medium leading-normal">
        Events
      </Link>
      <Link to="/stories" className="text-white text-sm font-medium leading-normal">
        Stories
      </Link>
    </div>
  );
};

export default Navigation;