import React from "react";
import CardEngagement from "../components/CardEngagement";
import engagementData from "../Data/engagementData";

function Home() {
  return (
    <header className="App-header">
      <button type="submit">click</button>
      <CardEngagement text={engagementData.text} />
    </header>
  );
}

export default Home;
