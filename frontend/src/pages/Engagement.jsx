import React from "react";

import CardEngagement from "../components/CardEngagement";
import DataE from "../Data/engagementData";
import "../CSS/engagement.css";

function Engagement() {
  return (
    <div>
      <h1>Engagement :</h1>
      <p>
        La notion d’engagement écologique renvoie à des formes de mobilisation
        motivées par la prise de conscience d’un péril pour la planète et par la
        conviction qu’il faut modifier radicalement les choix de vie et de
        consommation pour sauver les générations futures.
      </p>
      {/* <CardEngagement /> */}
      <div className="cardContainer">
        {DataE.map((list) => (
          <CardEngagement key={list.id} list={list} />
        ))}
      </div>
    </div>
  );
}

export default Engagement;
