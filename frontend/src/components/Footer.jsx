import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/logo-twitter.png";
import instagram from "../assets/instagram.png";

import "../CSS/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-navigation">
        <ul className="footergrid">
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/eco-quizz">
            <li>Quiz</li>
          </NavLink>
          <NavLink to="/adoption">
            <li>Adopte un arbre</li>
          </NavLink>
          <NavLink to="/infos">
            <li>Infos</li>
          </NavLink>
          <NavLink to="/engagement">
            <li>Engagement</li>
          </NavLink>
        </ul>

        <div className="social-networks">
          <a href="https://www.instagram.com/boisantique/" target="_Blank">
            <img
              className="instagram"
              src={instagram}
              alt="Le logo instagram"
              width="40px"
            />
          </a>
          <a href="https://twitter.com/reforestaction" target="_Blank">
            <img
              className="twitter"
              src={twitter}
              alt="Le logo twitter"
              width="40px"
            />
          </a>
          <a
            href="https://fr-fr.facebook.com/mouvement.ecologique/"
            target="_Blank"
          >
            <img className="treedom" src={facebook} alt="Le logo treedom" />
          </a>
        </div>
      </div>
      <div className="description">
        <div className="">
          <img className="logofooter" src={logo} alt="Le logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
