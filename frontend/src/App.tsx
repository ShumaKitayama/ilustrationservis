import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtistList from "./pages/ArtistList";
import ArtistDetail from "./pages/ArtistDetail";
import ArtworkDetail from "./pages/ArtworkDetail";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArtistList />} />
        <Route path="/artists/:id" element={<ArtistDetail />} />
        <Route path="/artworks" element={<ArtworkDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
