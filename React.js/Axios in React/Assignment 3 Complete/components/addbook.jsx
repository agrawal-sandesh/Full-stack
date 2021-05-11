import React from "react";
import axios from "axios";
class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      genre: "",
      summary:"",
      formErrors: {
        title: "",
        author: "",
        genre:""
      },
      fieldValidity: {
        title: false,
        author: false,
        genre:false,
        summary:false
      },
      formValid: false,
      successMessage: ""
    };
  }
  validateTitle = e => {
    const title = e.target.value;
    var formErrors = this.state.formErrors;
    var fieldValidity = this.state.fieldValidity;
    this.setState({ title: e.target.value });
    if (title.length < 4) {
      formErrors.title = "Title must be at least 4 characters";
      fieldValidity.title = false;
    } else {
      formErrors.title = "";
      fieldValidity.title = true;
    }
    this.setState({ fieldValidity: fieldValidity });
    this.setState({ formValid: fieldValidity.title && fieldValidity.author && fieldValidity.genre && fieldValidity.summary});
  };
  validateAuthor = e => {
    const author = e.target.value;
    this.setState({ author: e.target.value });
    var formErrors = this.state.formErrors;
    var fieldValidity = this.state.fieldValidity;
    if (author.length < 5) {
      formErrors.author = "Author name must be atleast 5 characters";
      fieldValidity.author = false;
    } else {
      formErrors.author = "";
      fieldValidity.author = true;
    }
    this.setState({ formErrors: formErrors });
    this.setState({ formValid:  fieldValidity.title && fieldValidity.author && fieldValidity.genre && fieldValidity.summary });
  };
  validateGenre = e => {
    const genre = e.target.value;
    this.setState({ genre: e.target.value });
    var formErrors = this.state.formErrors;
    var fieldValidity = this.state.fieldValidity;
    if (genre.length < 1) {
      formErrors.genre = "Please enter the genre";
      fieldValidity.genre = false;
    } else {
      formErrors.genre = "";
      fieldValidity.genre = true;
    }
    this.setState({ formErrors: formErrors });
    this.setState({ formValid:  fieldValidity.title && fieldValidity.author && fieldValidity.genre && fieldValidity.summary });
  };
  validateSummary = e => {
    let summary = e.target.value;
    var fieldValidity=this.state.fieldValidity;
    this.setState({ summary: summary });
    fieldValidity.summary=true;
    this.setState({ formValid:  fieldValidity.title && fieldValidity.author && fieldValidity.genre && fieldValidity.summary });  
  };
  addBook = () => {
    var formJSON = {
      title: this.state.title,
      author: this.state.author,
      genre: this.state.genre,
      summary: this.state.summary
    };
    axios
      .post("http://localhost:4000/addBook", formJSON)
      .then(response => {
        this.setState({ successMessage: response.data.message, error: "" });
      })
      .catch(error => {
        if (error.response) {
          this.setState({ error: error.response.data.message, success: "" });
        } else {
          this.setState({ error: error.message, success: "" });
        }
      });
  };
  render() {
    return (
      <div style={{ width: 500, margin: "0px auto" }}>
        <h3 className="text-center">Add A Book</h3>
        <form>
          <div className="form-group">
            <label>Title:</label>
            <input
              className="form-control"
              onChange={this.validateTitle}
              value={this.state.title}
            />
          </div>
          <span className="text-danger">
            {this.state.formErrors.title}
          </span>
          <div className="form-group">
            <label>Author:</label>
            <input
              className="form-control"
              onChange={this.validateAuthor}
              value={this.state.author}
            />
          </div>
          <span className="text-danger">{this.state.formErrors.author}</span>
          <div className="form-group">
            <label>Genre:</label>
            <input
              className="form-control"
              onChange={this.validateGenre}
              value={this.state.genre}
            />
            </div>
            <span className="text-danger">{this.state.formErrors.genre}</span>
          <div className="form-group">
            <label>Summary:</label>
            <textarea
              onChange={this.validateSummary}
              className="form-control"
              value={this.state.summary}
            />
          </div>
          <button
            type="button"
            onClick={this.addBook}
            className="btn btn-success"
            disabled={!this.state.formValid}
          >
            Add Book
          </button>
          <br />
          <span className="text-success">{this.state.successMessage}</span>
        </form>
      </div>
    );
  }
}


export default AddBook;
