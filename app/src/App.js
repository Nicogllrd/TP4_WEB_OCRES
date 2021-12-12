import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Profil1 from "./Components/Profil1";
import Profil2 from "./Components/Profil2";
import Profil3 from "./Components/Profil3";
import Nav from "./Components/Nav";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Link to="/Profil1">Jeanne</Link>
          <Link to="/Profil2">Martine</Link>
          <Link to="/Profil3">Claude</Link>
        
          <Routes>
            <Route path='/Profil1' element={<Profil1 name="Jeanne" lastname="Dubois" date="28/09/1999" img="https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/beaute/cheveux/coiffure/le-padded-headband-zoom-sur-ce-serre-tete-rembourre-que-l-on-voit-partout/91112047-3-fre-FR/Le-padded-headband-zoom-sur-ce-serre-tete-rembourre-que-l-on-voit-partout.jpg"/>} />
            <Route path='/Profil2' element={<Profil1 name="Martine" lastname="Martin" date="29/09/1999" img="https://www.santescience.fr/wp-content/uploads/2017/09/Mal-de-tete.jpg"/>} />
            <Route path='/Profil3' element={<Profil1 name="Claude" lastname="Gaillard" date="30/09/1999" img="https://www.lsa-conso.fr/mediatheque/6/4/8/000388846_5.jpg"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
  
}

export default App;
