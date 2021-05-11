import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect  } from 'react-router-dom';
import ViewAllBooks from './components/viewAllBooks.jsx';
import Contact from './components/contact.jsx'; 
import AddBook from './components/addbook.jsx';

class App extends React.Component {
    render() {
        return (
          <Router>
            <React.Fragment>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark ">
                <div className="navbar-header">
                  <Link className="navbar-brand" to="/">Learning Portal</Link>
                </div>
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <Link className="nav-link" to="/card">View All Books</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/addBook">Add a Book</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </nav>
              
              <Switch>
                <Route exact path="/" render={() => (<Redirect to="/card" />)}/>
                <Route path="/card" component={ViewAllBooks} />
                <Route path="/addBook" component={AddBook} />    
                <Route path="/contact" component={Contact} />
              </Switch>
            </React.Fragment>
          </Router>   
        );
    }
}
export default App;
