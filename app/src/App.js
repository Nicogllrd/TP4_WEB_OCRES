import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Profil1 from "./Components/Profil1";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <div className='nav'>
            <Link style={{textDecoration: 'none', borderStyle: 'double', padding: '1%', margin: '1%'}} to="/Profil1">Jeanne </Link>
            <Link style={{textDecoration: 'none', borderStyle: 'double', padding: '1%', margin: '1%'}} to="/Profil2">Martine </Link>
            <Link style={{textDecoration: 'none', borderStyle: 'double', padding: '1%', margin: '1%'}} to="/Profil3">Claude</Link>
          </div>
        
          <Routes>
            <Route path='/Profil1' element={<Profil1 name="Jeanne" lastname="Dubois" date="28/09/1999" img="https://upload.wikimedia.org/wikipedia/commons/2/28/Jeanne_Bournaud_2_%28cropped%29.jpg"/>} />
            <Route path='/Profil2' element={<Profil1 name="Martine" lastname="Martin" date="29/09/1999" img="https://www.ginestie.com/site/wp-content/uploads/2018/12/Martine.jpg"/>} />
            <Route path='/Profil3' element={<Profil1 name="Claude" lastname="KohLanta" date="30/09/1999" img="https://media.melty.fr/article-4733962-ajust_768/media.jpg"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
  
}

export default App;
