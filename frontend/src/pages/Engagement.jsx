import React from "react";

import CardEngagement from "../components/CardEngagement";
import DataE from "../Data/engagementData";
import "../CSS/engagement.css";

function Engagement() {
  return (
    <div>
      <h1>Engagement :</h1>
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
