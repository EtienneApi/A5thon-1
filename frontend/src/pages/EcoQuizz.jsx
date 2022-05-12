import React from "react";
import Quizz from "../components/Quizz";

import "../CSS/quizz.css";

function EcoQuizz() {
  return (
    <div className="headerQuizz">
      <h1 className="title">A vous de jouer 😀</h1>
      <p className="pQuizz">
        Pour jouer rien de plus simple il te suffit de cliquer sur la poubelle
        qui correspond au dechet, le but etant de faire de la prevention et de
        prendre les bonnes habitude en s&apos;amusant 🌎.
      </p>
      <Quizz />
    </div>
  );
}

export default EcoQuizz;
