import React, { Component } from "react";
import "./App.css";
import { Route, Redirect,Switch, Link } from "react-router-dom";
import AddEmployee from "./components/AddEmployee.jsx";
import Card from "./components/Card.jsx";
import UpdateEmployee from "./components/UpdateEmployee.jsx"
//import Card from "./components/Card.jsx";
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand">HR Portal</span>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/addEmployee">
                Add Employee
              </Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/card">
                View Employees
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/updateEmployee">
                Update Employees
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/addEmployee" />} />
          <Route path="/card" component={Card} />
          <Route path="/addEmployee" component={AddEmployee} />
          <Route path="/updateEmployee:empId" component={UpdateEmployee} />
        </Switch>
      </div>
    );
  }
}
export default App;
