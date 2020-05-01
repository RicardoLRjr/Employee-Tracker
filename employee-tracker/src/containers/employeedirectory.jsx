import React, { Component } from "react";
import EmployeeList from "../components/Employees/EmployeeList"
import axios from "axios"
class EmployeeDirectory extends Component {
state = {
    employees:[] 
}

componentDidMount() {
    axios
    .get("https://randomuser.me/api/?results=50")
.then(response => {
    console.log(response.data.results)
    this.setState({employees: response.data.results})
}).catch(err => {
    if(err){
        console.log(err)
    }})
}

//   getEmployees = () => {
//     axios
//       .get("https://randomuser.me/api/?results=50")
//       .then((response) => {
//         this.setState({
//           employees: response.data,
//           employeesToDisplay: response.data,
//         });
//         console.log(employees)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

    render() {
        return (
            <div className="col">
                <EmployeeList employees={this.state.employees}/>
        </div>);
    }
}

export default EmployeeDirectory;