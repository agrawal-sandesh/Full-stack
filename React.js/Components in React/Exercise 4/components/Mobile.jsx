import React from "react";
import './index.css';

class Mobile extends React.Component {
    constructor() {
        super();
        this.state = {
            buttonClicked: false
        }
    }
    render() {
        var details=null;
        if(this.state.buttonClicked){
            details=(
            <p>  
                <span>RAM: {this.props.mob.ram}</span><br/>
                <span>Camera: {this.props.mob.camera}</span><br/>
                <span>OS: {this.props.mob.os}</span><br/>
                <span>Processor: {this.props.mob.processor}</span><br/>
            </p>
            )
        }
        
        return (
           
            <div className="card">
                <div className="card-body">
                    <p className="card-text">
                        <span>Model: {this.props.mob.model}</span><br/>
                        <span>Price: {this.props.mob.price}</span><br/>
                        {details}
                    </p>
                    <button className="btn btn-info" onClick={() => {this.setState({ buttonClicked: true });}}>Show Details</button>&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-danger" onClick={() => {this.setState({ buttonClicked: false });}}>Hide Details</button>
                </div>
            </div>
        )
    }
}
export default Mobile;
