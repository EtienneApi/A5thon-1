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

// {
//     "id": 42,
//     "project_id": 3,
//     "name": "Acacia mangium",
//     "life_time_CO2": 220,
//     "price": 3,
//     "stock": 0
//   },

export default Tree;
