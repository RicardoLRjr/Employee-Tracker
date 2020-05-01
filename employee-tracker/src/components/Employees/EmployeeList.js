import React from 'react';
import Employee from './Employee'

const EmployeeList = (props) => {
    return (
        <div className="container">
        <div className="row">
        <h1>There are {props.employees.length} employees</h1>
    </div>  
    <div className="row">
    {props.employees.map((employee) => (
              <Employee {...employee} key={employee.id}/>
            ))}
    </div>
        </div>
    );
};

export default EmployeeList;