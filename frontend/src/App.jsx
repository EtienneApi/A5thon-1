import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Import des composants
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EcoQuizz from "./pages/EcoQuizz";
import AdopteUnArbre from "./pages/AdopteUnArbre";
import Infos from "./pages/Infos";
import Engagement from "./pages/Engagement";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eco-quizz" element={<EcoQuizz />} />
        <Route path="/adoption" element={<AdopteUnArbre />} />
        <Route path="/infos" element={<Infos />} />
        <Route path="/engagement" element={<Engagement />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
