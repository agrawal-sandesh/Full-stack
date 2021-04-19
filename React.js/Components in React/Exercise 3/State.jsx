import React, { Component } from 'react';

class State extends Component {
  state = {
    message:""
  }
    render() {
        return (
            <React.Fragment>
                <button className="btn btn-success btn-lg" onClick={()=>{this.setState({message:"Hello React!"})}}> Show text </button>
                <h1 className="text-info font-italic">{this.state.message}</h1>
                <button className="btn btn-danger btn-lg" onClick={()=>{this.setState({message:""})}}> Hide text </button>
            </React.Fragment>
        );
    }
}

export default State;
