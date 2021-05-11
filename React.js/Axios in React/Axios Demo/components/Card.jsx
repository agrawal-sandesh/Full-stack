import React from "react";
import Employee from "./Employee.jsx";
import axios from "axios";
class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
      errorMessage: ""
    };
    this.fetchEmployees = this.fetchEmployees.bind(this);
  }
  componentDidMount() {
    this.fetchEmployees();
  }
  fetchEmployees() {
    axios
      .get("http://localhost:2000/retreiveEmployeelist")
      .then(response => {
        this.setState({
          result: response.data,
          errorMessage: ""
        });
        console.log(this.state.result);
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
      <div>
        <h3 className="text-center text-primary">Employee Details</h3>
        {this.state.result? this.state.result.map(emp => <Employee key={emp.empId} emp={emp} />): null}
        {this.state.errorMessage ? (
          <h4 className="text-danger">{this.state.errorMessage}</h4>
        ) : null}
      </div>
    );
  }
}

export default Card