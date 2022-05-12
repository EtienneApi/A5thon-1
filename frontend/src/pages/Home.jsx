import React from "react";
import Carroussel from "@components/Carroussel";
import Bloc from "../components/BlocHome";

function Home() {
  return (
    <div className="App-header">
      <h1>Ça commence avec vous</h1>
      <header>
        <Carroussel />
      </header>
      <Bloc />
    </div>


  );
}

export default Home;
