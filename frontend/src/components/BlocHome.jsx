import React from "react";

import { Link } from "react-router-dom";

import { Fade } from "react-awesome-reveal";
import { Bounce } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

import "../CSS/blochome.css";

import tree from "../imghome/bloclogo.png";
import loveplanet from "../imghome/logobloc3.png";
import fond from "../imghome/fondbloc1.jpg";

function Bloc() {
  return (
    <div className="bloc">
      <Fade delay={1000}>
        <div className="bloc">
          <h2 className="blocobjectif">Notre objectif ?</h2>
        </div>
      </Fade>
      <Bounce>
        <div className="bloc2">
          <img className="fondbloc1" src={fond} />
          <div className="bloc2bis">
            <img className="bloctree" src={tree} />
            <p className="blocparagraphe">SENSIBILISER</p>
          </div>
        </div>
      </Bounce>
      <Slide triggerOnce delay={1000}>
        <div className="bloc3">
          <h3 className="bloch3">Que proposons-nous ?</h3>
          <br></br>
          <p className="blocp3">
            Et bien ça commence par vous !
            <>
              <br></br>
            </>
          </p>
          <p className="blocp3bis">Ce que nous proposons, c'est vous.</p>
          <h4 className="bloch3bis">Et on commence par quoi ?</h4>
        </div>
      </Slide>
      <Slide triggerOnce delay={2000}>
        <div className="bloc4">
          <img className="bloc3img" src={loveplanet} />
          <p className="bloc4pbis">Aime ta planète !</p>
          <Link to="/eco-quizz">
            <button className="bloc4p">
              Viens par ici, si tu souhaites agir
            </button>
          </Link>
        </div>
      </Slide>
      <div className="help-us">
        <div className="bloc5">
          <div className="box">
            <span className="spanlookh2">
              Soutenez<br></br>
              notre indépendance <br></br>financière
            </span>
            <p className="paragraphdons">
              C'est à vous que nous devons notre liberté de parole et d'action.
            </p>
            <a href="https://paypal.fr/" className="donsbtn">
              <span className="donspan">FAIRE UN DON</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bloc;
