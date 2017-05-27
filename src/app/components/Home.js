import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component{
    constructor(props){
        super();
        this.state ={
            age:props.age
        };
    }

    increaseAge(){
        this.setState({
            age:this.state.age+1
        });
        console.log(this.state.age);
    }

    decreaseAge(){
        this.setState({
            age:this.state.age- 1
        });
        console.log(this.state.age);
    }

  render(){
      console.log(this.props);
      return(
        <div className="container">
            <h2>User Info</h2>
            <p>Name:{this.props.name}</p>
            <p>Age:{this.state.age}</p>
            <h3>Extra Info</h3>
            <p>Id:{this.props.extra.id}</p>
            <p>Hobbies:</p>
            <ul>
                {this.props.extra.hobbies.map((hobby,i)=> <li key={i}>{hobby}</li>)}
            </ul>
            {this.props.children}

            <hr/>
            <div className="row">
                <col-md-6><button className="btn btn-primary" onClick={()=>this.increaseAge()}>Increase age by 1</button></col-md-6>
                <col-md-6> <button className="btn btn-danger" onClick={()=>this.decreaseAge()}>Decrease age by 1</button></col-md-6>
            </div>



        </div>
    );
  }
}



