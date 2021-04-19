import React from "react";
class Book extends React.Component {
    constructor() {
        super();
        this.state = {
            buttonClicked: false
        }
    }
    render() {
        var summary=null;
        if(this.state.buttonClicked){
          summary=this.props.book.summary;
        }
        
        return (
            <div className="card" style={{ "width": 250 }}>
                  <div className="card-body">
                  <h5 className="card-title text-center">{this.props.book.title}</h5>
                    <p className="card-text">
                        <span>Author: {this.props.book.author}</span><br/>
                    </p>
                    <p><i>{summary}</i></p>
                    <button className="btn btn-primary" onClick={() => {this.setState({ buttonClicked: true });}}>Show Details</button><br/><br/>
                    <button className="btn btn-danger" onClick={() => {this.setState({ buttonClicked: false });}}>Hide Details</button>                    
                </div>
                </div>
        )
    }
}
export default Book;
