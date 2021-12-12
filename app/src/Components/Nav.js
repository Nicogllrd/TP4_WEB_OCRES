import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Profil1 from "./Profil1";
import Profil2 from "./Profil2";
import Profil3 from "./Profil3";

class Nav extends Component {
  render(){
    return (
      <div>
        <Router>
          <Link to="/Profil1">Profil1</Link>
          <Link to="/Profil2">Profil2</Link>
          <Link to="/Profil3">Profil3</Link>
        </Router>
      </div>
    )
  }
  
}

export default Nav;
