import React from "react";

import pictures from "../data/Pictures";

function Tree({ tree, index }) {
  return (
    <div className="cardsAdoption">
      <h2>{tree.name}</h2>
      <img className="picture" src={pictures[index].image} alt={tree.name} />
      <button type="button" className="buttonAdoption">
        Je veux adopter un {tree.name} pour {tree.price}€/mois
      </button>
    </div>
  );
}

export default Tree;
