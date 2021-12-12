import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

class Profil1 extends Component{
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
        {this.props.lastname}
        {this.props.date}
        <img src={this.props.img}></img>
      </div>
    )
  }
  
}

export default Profil1;
