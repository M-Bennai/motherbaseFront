import React from "react";
import logo from "../../assets/logo-wolf.svg";
import discord from "../../assets/bi_discord.svg";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="section-navbar">
      <nav className="navbar">
        <div>
          <Link to="/">
            <figcaption>
              <img src={logo} alt="logo" />
            </figcaption>
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <NavLink to="/news">NEWS</NavLink>
            </li>
            <li>
              <NavLink to="/tests">TESTS</NavLink>
            </li>
            <li>
              <NavLink to="/stream">STREAM</NavLink>
            </li>
          </ul>
        </div>
        <div className="social-connexion">
          <img src={discord} alt="discord" />
          <NavLink to="/connexion">Connexion</NavLink>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
