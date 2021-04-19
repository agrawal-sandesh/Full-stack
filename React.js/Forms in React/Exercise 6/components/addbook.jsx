import React, { Component } from 'react';

class AddBook extends Component {

  state = {
    form: {
        title: "",
        author: "",
        genre: ""
    },
    formErrorMessage: {
        title: "",
        author: "",
        genre: ""
    },
    formValidity: {
        title: false,
        author: false,
        genre: false,
        buttonActive: false
      },
    }
    validateTitle=(event)=>{
        const title=event.target.value;
        const formErrorMessage=this.state.formErrorMessage;
        const formValidity=this.state.formValidity;
        this.setState({title:event.target.value});
        if(title.length<4){
            formErrorMessage.title="Title must contain at least 4 characters";
            formValidity.title=false;
        }
        else{
            formErrorMessage.title="";
            formValidity.title=true;
        }
        this.setState({ formValidity: formValidity })
        this.setState({ buttonActive: formValidity.title && formValidity.author && formValidity.genre })
    }

    validateAuthor=(event)=>{
        const author=event.target.value;
        const formErrorMessage=this.state.formErrorMessage;
        const formValidity=this.state.formValidity;
        this.setState({author:event.target.value});
        if(author.length<3){    
            formErrorMessage.author="Author must contain at least 3 characters";
            formValidity.author=false;
        }
        else{
            formErrorMessage.author="";
            formValidity.author=true;
        }
        this.setState({ formValidity: formValidity })
        this.setState({ buttonActive: formValidity.title && formValidity.author && formValidity.genre })
    }

    validateGenre=(event)=>{
        const genre=event.target.value;
        const formErrorMessage=this.state.formErrorMessage;
        const formValidity=this.state.formValidity;
        this.setState({genre:event.target.value});
        if(genre==="Mystery thriller" | genre==="Fiction"| genre==="Non-fiction"){
            formErrorMessage.genre="";
            formValidity.genre=true;   
        }
        else{
            formErrorMessage.genre="Please select a genre";
            formValidity.genre=false;
        }
        this.setState({ formValidity: formValidity })
        this.setState({ buttonActive: formValidity.title && formValidity.author && formValidity.genre })
    }

    handleChange = event => {
       // event.preventDefault();
        if (this.state.formValidity) {
            this.setState({ successMessage: "Book Added Successfully!!" });
    };

    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                <div className="col-md-5 offset-4">        
                <form style={{ border: "1px solid ", padding: "15px", borderRadius: "8px", borderColor: 'gray' }}>
                    <h2 className="text-center">Add A Book</h2>
                        <div className="form-group">
                            <label>Title:</label>
                            <input className="form-control" onChange={this.validateTitle} value={this.state.title} />
                        </div>
                        <span className="text-danger">{this.state.formErrorMessage.title}</span>
                        <div className="form-group">
                            <label>Author:</label>
                            <input className="form-control" onChange={this.validateAuthor} value={this.state.author} />
                        </div>
                        <span className="text-danger">{this.state.formErrorMessage.author}</span>
                        <div className="form-group">
                            <label>Genre:</label>
                            <select onChange={this.validateGenre} className="form-control" value={this.state.genre}>
                                <option value="select">--Select--</option>
                                <option value="Mystery thriller">Mystery thriller</option>
                                <option value="Fiction">Fiction</option>
                                <option value="Non-fiction">Non-fiction</option>
                            </select>
                        </div>
                        <span className="text-danger">{this.state.formErrorMessage.genre}</span><br/>
                        <button type="button" onClick={this.handleChange} className="btn btn-success" disabled={!this.state.buttonActive}>Add Book</button><br />
                        <span className="text-success">{this.state.successMessage}</span>
                </form>
                </div>
                </div>
            </React.Fragment>
        );
    }
}
export default AddBook;
