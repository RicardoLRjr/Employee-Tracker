import React from 'react';
import Employee from './Employee'

const EmployeeList = () => {
    return (
        <div className="container">
        <div className="row">
        <h1>There are {props.results.length} employees</h1>
    </div>  
    <div className="row">
    {props.results.map((employee) => (
              <Employee {...employee} key={employee.id}/>
            ))}
    </div>
        </div>
    );
};

export default EmployeeList;