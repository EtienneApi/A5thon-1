import React, { useState } from "react";


import logo from "../assets/logo.png";
import Nav from "./Nav";

import "../CSS/Header.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`header ${showMenu ? "show-nav" : "hide-nav"}`}>
      <img
        className="logo"
        src={logo}
        alt="Le logo"
      />
      <button
        type="button"
        className="navbar-burger"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <span className="bar" />
      </button>
      
      <div className="menuWrapper">
        <Nav handleShowMenu={handleShowMenu} />
      </div>
    </div>
  );
}
export default Header;
