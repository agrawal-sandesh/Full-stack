import React from "react";

class Book extends React.Component {
  constructor() {
    super();
    this.state = {
      summary: null
    };
  }

  render() {
    return (
      <div className="card" style={{ width: 200 }}>
        <div className="card-body">
          <h5 className="card-title text-center">{this.props.book.title}</h5>
          <p className="card-text">
            <span>Author: {this.props.book.author}</span>
            <br />
            <span>Genre: {this.props.book.genre}</span>
            <br />
          </p>
          <p>
            <i>{this.state.summary}</i>
          </p>
          <button
            className="btn btn-success"
            onClick={() => {this.setState({ summary: this.props.book.summary });}}
          >
            Summary
          </button>
        </div>
      </div>
    );
  }
}
export default Book;
