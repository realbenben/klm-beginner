import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        Accueil
      </NavLink>
      <NavLink exact to="/" activeClassName="nav-active">
        Gognies-Chaussée
      </NavLink>
      <NavLink exact to="/" activeClassName="nav-active">
        Mairie
      </NavLink>
      <NavLink exact to="/" activeClassName="nav-active">
        Vivre à Gognies
      </NavLink>
      <NavLink exact to="/" activeClassName="nav-active">
        Vie Économique et Associative
      </NavLink>
      <NavLink exact to="/" activeClassName="nav-active">
        Gazette
      </NavLink>
      <NavLink exact to="/" activeClassName="nav-active">
        À propos
      </NavLink>
    </div>
  );
};

export default Navigation;
