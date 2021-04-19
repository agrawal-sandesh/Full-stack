import React, { Component } from 'react';
class Person extends Component {
    constructor(){
      super();
      this.state={
        counter:0,
        message:""
      };
    }

    incrementCounter=()=>{
      this.setState({counter:this.state.counter+1,message:"time Button Clicked"});
      this.setState((prevState)=>{
        return({counter:prevState.counter+1})
      });
      this.setState((prevState)=>{
        return({counter:prevState.counter+1})
      })
    };


    render() {
        return (
          <div>
            <h4 className="text-center">
                <span className="text-primary">{this.props.name}'s</span> favourite fruit is
                <span className="text-success"> {this.props.fruit}</span></h4><br/>
                <button className="btn btn-primary" onClick={this.incrementCounter}>Click Me</button>
                <h1>{this.state.counter}  {this.state.message}</h1>
            </div>
        );
    }
}
export default Person;
