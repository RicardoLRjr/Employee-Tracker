import React, { Component } from "react";
import EmployeeList from "../components/Employees/EmployeeList"
import axios from "axios"
class EmployeeDirectory extends Component {
state = {
    employees:[],
    employeesToShow: [],
    searchTerm: "" 
}

componentDidMount() {
    axios
    .get("https://randomuser.me/api/?results=30")
.then(response => {
    this.setState({employees: response.data.results,
    employeesToShow: response.data.results})
}).catch(err => {
    if(err){
        console.log(err)
    }})
}
clearFilter = () => {
    this.setState({
        employeesToShow: this.state.employees,
        searchTerm: ""
    });
};

handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
        [name]: value,
    });
};

// TO-DO
// fix issues that break site when using sort function

// handleSort = (event) => {
// event.preventDefault();
// const employees = [this.state.employees]
// const sortedEmployees = employees
// console.log(sortedEmployees)  
// this.setState({
//     employeesToShow: sortedEmployees
// })
// }

handleSubmit = (event) => {
    event.preventDefault();
    const employees = [...this.state.employees];
    const filteredEmployees = employees.filter((employee) => {
    const regex = RegExp(this.state.searchTerm, "gi");
    return employee.name.first.match(regex);
    });
    this.setState({
        employeesToShow: filteredEmployees
    })
}
    render() {
        return (  <div>
       
            <div className="container">
         <h1 className="header" id="welcome">Welcome to the Employee Tracker!</h1>
            <div className="row">
                <div className="col">
                <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-sm-8">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search our Employees"
                        name="searchTerm"
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button> 
                  </div>
                  <div className="col-sm-2">
                      <button className="btn btn-danger"
                onClick={this.handleSort}>
                    Sort Names
                </button>
                </div>
                </div>
              </form>
              {this.state.employees.length !==
                this.state.employeesToShow.length && (
                <button
                  className="btn btn-secondary"
                  onClick={this.clearFilter}
                >
                  Clear Filter
                </button>
              )}  <div>
               
                </div>
                <EmployeeList employees={this.state.employeesToShow}/>
                </div>
            </div>
                </div>
            </div>
        );
    }
}

export default EmployeeDirectory;