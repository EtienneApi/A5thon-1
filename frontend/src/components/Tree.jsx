import React, {useState} from 'react';


import pictures from '../data/Pictures.js'

const Tree = ({tree, index}) => {  
  return (
    <div className="cards">
      <h1>{tree.name}</h1>
      <img className="picture" src={pictures[index].image} alt={tree.name} />
      <button className="button">
      je veux adopter un {tree.name} pour {tree.price}€/mois
      </button> 
    </div>
  )
};

export default Tree;
