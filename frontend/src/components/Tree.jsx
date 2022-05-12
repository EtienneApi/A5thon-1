import React, {useState} from 'react';


import pictures from '../data/Pictures.js'

const Tree = ({tree, index}) => {  
  return (
    <div>
      <h1>{tree.name}</h1>
      <img src={pictures[index].image} alt={tree.name} />
      <button>
      je veux adopter un {tree.name} pour {tree.price}€/mois
      </button> 
    </div>
  )
};

export default Tree;
