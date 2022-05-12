import React, {useState, useEffect} from 'react';
import Tree from '../components/Tree'
import pictures from '../data/Pictures.js'

const AdopteUnArbre = () => {
  const [trees, setTrees] = useState([]);
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("https://tree-nation.com/api/projects/3")
      .then(resultat => resultat.json())
      .then(data => setProject(data))
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    fetch(" https://tree-nation.com/api/projects/3/species")
      .then(resultat => resultat.json())
      .then(data => setTrees(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1> participez au projet {project.name} en Colombie</h1>
      <img src={project.image} alt={project.name}/>  
      <p>Voici les essences disponibles sur ce projet :</p>
      <div>
        {trees
        .map((tree, index) => {  
        if (index < 10) return <Tree tree={tree} key={tree.id} />
        })}
      </div>
    </div>
  )
};

// {
//   "id": 3,
//   "name": "La Pedregoza",
//   "description": "This afforestation and reforestation project is located in the Orinoco River basin of Colombia. The plantation is designed to provide long-term economic sustainability for the adjacent natural reserve, dedicated to the conservation of local flora & fauna. We use natural farming techniques to do so.",
//   "image": "https://treenation-uploads.s3-accelerate.amazonaws.com/project-570543715a901.jpg",
//   "slug": "la-pedregoza",
//   "location": "Colombia",
//   "lat": 6.08824,
//   "long": -67.723885,
//   "status": "active",
//   "url": "https://tree-nation.com/projects/la-pedregoza",
//   "species_price_from": 2
// }

export default AdopteUnArbre;
