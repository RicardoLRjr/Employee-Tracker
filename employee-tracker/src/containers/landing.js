import React from 'react';
import EmployeeDirectory from './employeedirectory'

const landing = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="header">Welcome to the Employee Tracker!</h1>
                <div className="row">
                    <div className="col"> 
        <EmployeeDirectory/>
        </div>
        </div>
                </div>
            </div>
        </div>
    );
};

export default landing;