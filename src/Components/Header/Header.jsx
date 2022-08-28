import React, { useContext } from "react";
import modeContext from "../../Context/Mode";
import "./Header.scss";
import Light from "../../assets/images/light.svg";
import Dark from "../../assets/images/dark.svg";
import { Link } from "react-router-dom";
function Header({ dark, setDark }) {
  return (
    <>
      <header className={`header ${dark ? "header-active" : "bg-white"}`}>
        <div className="container d-flex justify-content-between w-100 align-items-center">
          <Link
            to="/"
            className={`header__logo ${dark ? "header__logo-dark" : ""}`}
          >
            Where in the world ?
          </Link>
          <span
            className={`d-flex align-items-center ${
              dark ? "header-dark" : "header__light"
            }`}
            onClick={() => setDark(!dark)}
          >
            <img src={dark ? Dark : Light} alt="a moon" className="moon" />
            Dark Mode
          </span>
        </div>
      </header>
    </>
  );
}

export default Header;
