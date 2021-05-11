import React from "react"
import axios from 'axios';
import Book from "./Book.jsx";
// You can create functions of your own.

const url = "http://localhost:4000/books";

class ViewAllBooks extends React.Component {
    constructor(){
        super();
        this.state = {
        bookData: [],
        errorMessage: ""
    };
    this.fetchAllBooks = this.fetchAllBooks.bind(this);
}
    componentDidMount = () => {
        this.fetchAllBooks();
    }

    fetchAllBooks = () => {
        axios
        .get(url)
        .then(response => {
          this.setState({
            bookData: response.data,
            errorMessage: ""
          });
          console.log(this.state.bookData);
        })
        .catch(error => {
          if (error.response) {
            this.setState({
              errorMessage: error.response.data.message,
              result: ""
            });
          } else {
            this.setState({ errorMessage: error.message, result: "" });
          }
        });
    }

    render() {
        return (
            <React.Fragment>
                <h3 className="text-primary">Catalog</h3>
                <div className="row" >
                {this.state.bookData? 
                this.state.bookData.map(book => <Book key={book.title} book={book} push />): null}
                {this.state.errorMessage ? (
                <h4 className="text-danger">{this.state.errorMessage}</h4>
                ) : null}
                </div>
            </React.Fragment>
        )
    }
}
export default ViewAllBooks;