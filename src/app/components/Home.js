import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component{
  render(){
      console.log(this.props);
      return(
        <div className="container">
            <h2>User Info</h2>
            <p>Name:{this.props.name}</p>
            <p>Age:{this.props.age}</p>
            <h3>Extra Info</h3>
            <p>Id:{this.props.extra.id}</p>
            <p>Hobbies:</p>
            <ul>
                {this.props.extra.hobbies.map((hobby,i)=> <li key={i}>{hobby}</li>)}
            </ul>
            {this.props.children}
        </div>
    );
  }
}



