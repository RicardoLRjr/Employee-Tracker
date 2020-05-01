import React, { Component } from "react";
import EmployeeList from "../components/Employees/EmployeeList"
import axios from "axios"
class EmployeeDirectory extends Component {
state = {
    employees:[{name: "test"},
    {age: "test age"},
{email: "test email"}] 
}

// componentDidMount() {
//     this.getEmployees();
//   }


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
            <div class="col">
                <p>
                    Check your employees below!
                </p>
                <EmployeeList employees={this.state.employees}/>

{/* // <table class="table">
// <thead>
//   <tr>
//     <th scope="col">Id#</th>
//     <th scope="col">Name</th>
//     <th scope="col">Email</th>
//     <th scope="col">Age</th>
//     <th scope="col">Picture</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <th scope="row">1</th>
//     <td>Mark</td>
//     <td>Otto</td>
//     <td>@mdo</td>
//   </tr>
// </tbody>
// </table>                                */}

        </div>);
    }
}

export default EmployeeDirectory;