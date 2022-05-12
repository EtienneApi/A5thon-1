import React from 'react';
import "../CSS/carroussel.css";
import slide1 from "../img-slides/slide1.jpg"
import slide2 from "../img-slides/slide2.jpeg"
import slide3 from "../img-slides/slide3.jpeg"
import slide4 from "../img-slides/slide4.jpg"
import slide5 from "../img-slides/slide5.png"

function Carroussel() {
  return (
    <div className="carousel" data-flickity='{ "fullscreen": false, "lazyLoad": 1, "autoPlay": true }'>
      <div className="carousel-cell">
      <h2 className="hello">Sauvez-moi !</h2>
      <button className="hellobtn">J'agis !</button>
        <img className="carousel-cell-image1"
          data-flickity-lazyload={slide5} />
      </div>
      <div className="carousel-cell">
      <p className="paragraphe2">KEEP THE TREE</p>
        <img className="carousel-cell-image"
          data-flickity-lazyload={slide2} />
      </div>
      <div className="carousel-cell">
      <h2 className="hello">Adopte !</h2>
      <p className="paragraphe3">Aujourd'hui, il est possible d'adopté un arbre, qu'attends-tu ?</p>
      <button className="hellobtn">Je plante un arbre !</button>
        <img className="carousel-cell-image"
          data-flickity-lazyload={slide3} />
      </div>
      <div className="carousel-cell">
        <img className="carousel-cell-image"
          data-flickity-lazyload={slide1} />
      </div>
      <div className="carousel-cell">
        <img className="carousel-cell-image"
          data-flickity-lazyload={slide4} />
      </div>
    </div>


  )
}

export default Carroussel;
