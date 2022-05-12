import React from "react";
import Carroussel from "@components/Carroussel";
import Bloc from "../components/BlocHome";

function Home() {
  return (
    <div className="App-header">
      <header>
        <Carroussel />
      </header>
      <Bloc />
    </div>


  );
}

export default Home;
