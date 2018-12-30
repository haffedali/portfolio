import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = (props) => {


 
return( 
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" onClick={props.typewriter}>Haffed Ali</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li className="nav-item">
        <a class="navtext"  onClick={props.about}>About</a>
      </li>
      <li className="nav-item">
        <a class="navtext"  onClick={props.projects}>Projects</a>
      </li>
      <li className="nav-item">
        <a class="navtext"  onClick={props.contact}>Contact</a>
      </li>
    </ul>
  </div>
</nav>
)
  
};

export default Nav;