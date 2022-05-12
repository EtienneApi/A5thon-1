import React, { useState, useEffect } from "react";
import Tree from "../components/Tree";
import "../CSS/adoption.css";

function AdopteUnArbre() {
  const [trees, setTrees] = useState([]);
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("https://tree-nation.com/api/projects/3")
      .then((resultat) => resultat.json())
      .then((data) => setProject(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(" https://tree-nation.com/api/projects/3/species")
      .then((resultat) => resultat.json())
      .then((data) => setTrees(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Participez au projet {project.name} en Colombie</h1>
      <img className="imgAd" src={project.image} alt={project.name} />
      <p>Voici les essences disponibles sur ce projet :</p>
      <div>
        {trees.map((tree, index) => {
          if (index < 10)
            return <Tree index={index} tree={tree} key={tree.id} />;
        })}
      </div>
    </div>
  );
}

export default AdopteUnArbre;
