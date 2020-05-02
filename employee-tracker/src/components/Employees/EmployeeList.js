import React from 'react';
import Employee from './Employee'

const EmployeeList = (props) => {
    return (
        <div className="container">
    <div className="row">
    <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    {props.employees.map((employees) => (
              <Employee {...employees}
              key ={employees.email} 
              id={employees.id.name}
              Fname={employees.name.first}
              Lname={employees.name.last}
              email={employees.email}
              age={employees.dob.age}/>
            ))}
    </tbody>
    </table>
    </div>
        </div>
    );
};

export default EmployeeList;