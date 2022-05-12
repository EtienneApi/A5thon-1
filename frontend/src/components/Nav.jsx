import React from "react";
import { NavLink } from "react-router-dom";

function Nav({handleShowMenu}) {
  return (
    <ul>
      <NavLink to="/" onClick={() => handleShowMenu()}>
        <li>Accueil</li>
      </NavLink>
      <NavLink to="/eco-quizz" onClick={() => handleShowMenu()}>
        <li>Eco-quiz</li>
      </NavLink>
      <NavLink to="/adoption" onClick={() => handleShowMenu()}>
        <li>Adopte un arbre</li>
      </NavLink>
      <NavLink to="/infos" onClick={() => handleShowMenu()}>
        <li>Infos</li>
      </NavLink>
      <NavLink to="/engagement" onClick={() => handleShowMenu()}>
        <li>Engagement</li>
      </NavLink>

      <div className="img1-responsive-menu " />
    </ul>
  );
}

export default Nav;
