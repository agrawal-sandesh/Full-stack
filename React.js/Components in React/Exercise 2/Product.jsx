import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Product extends Component {
     book1 ={
        title : "Angels and Demons",
        publisher : "Penguin Random House",
        author : "Dan Brown",
        price : 409,
        prodId : 2012,
    }
     book2 ={
        title : "Norse Mythology",
        publisher : "Bloomsbury Publishing",
        author : "Neil Gaiman",
        price : 300,
        prodId : 2019,
    }

     createCard = (book) => {
        var note = null;
        if (book.price === 300) {
          note = <span className="text-success"> - Bestseller!</span>
        }
        return (
          <div key={book.prodId} className="card">
              <h5 className="card-title text-center">{book.title}</h5>
              <p className="card-text">
                <span>Author: <strong> {book.author}</strong></span><br/>
                <span>Publisher: <strong>{book.publisher}</strong></span><br/>
                <span>Price: <strong>{book.price}</strong></span>{note}<br/><br/>
                <span>Product ID: {book.prodId}</span><br/><br/>
              </p>
            </div>
        )}

    getBookDetails = () => {
        const bookArr = [this.book1, this.book2];
        const element = (
          <div className="conntainer-fluid">
            <div>
                <h3 className="text-center text-primary">Featured Titles</h3>
                    <div className="row"  >
                      {
                      bookArr.map(book => { return this.createCard(book) })
                      }
                    </div>
                </div>        
          </div>
        )
        return element;
      }

    render() {
        return (
            <React.Fragment>
              {this.getBookDetails()}
            </React.Fragment>
        );}}

export default Product;
