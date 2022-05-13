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



  const [text, setText] = useState("");



  return (
    <div>
      <h2 className="titleh1">Participez au projet {project.name} en Colombie</h2>
      <p className="pedregoza">Les efforts de boisement et de reforestation de la plantation de La Pedregoza sont un élément important dans la lutte globale contre le changement climatique et la désertification de la planète. </p>
      <div className="divinput">
        <label className="labelinput">Choisissez une plante :</label>
        <input className="searchinput" placeholder="Je recherche ma plante" type="text" onChange={(e) => setText(e.target.value)} />

      </div>
      <p className="papi">Voici les essences disponibles sur ce projet :</p>
      <div>

        {
          trees && trees
            .filter(tree => tree.name.includes(text))
            .map((tree, index) => {
              if (index < 10)
                return <Tree index={index} tree={tree} key={tree.id} />;
            })
        }
      </div>
    </div>
  );
}

export default AdopteUnArbre;
