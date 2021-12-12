import React, { Component } from 'react';
import "./Profil.css";
import Select from 'react-select';

class Profil1 extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:this.props.name,
    }
  }

  render(){
    let colors = ["green", "red", "grey", "orange", "blue", "white", "yellow"];
   
    return (
      <div className='wall'>
        <div className='profil' style={{backgroundColor: colors[1]}}>
          <img src={this.props.img} alt="Photo de profil"></img>
          <p>{this.props.name} {this.props.lastname}</p>
          <p>{this.props.date}</p>
        </div>
        <div className='publi'>
          <h1>Mon dernier post</h1>
        </div>
      </div>
      
    )
  }
  
}

export default Profil1;
