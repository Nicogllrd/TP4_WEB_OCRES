import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

class Profil2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:this.props.name,
    }
  }
  render(){
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
  
}

export default Profil2;
