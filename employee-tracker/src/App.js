import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './containers/employeedirectory'
import NavBar from "./components/all/NavBar";
import EmployeeDirectory from './containers/employeedirectory';
import landing from './containers/landing'

function App() {
  return (
    <Router>
      <NavBar/>
   <Route exact path="/" component={landing}/>
   <Route exact path="/employeeDirectory" component={EmployeeDirectory}/>
</Router>
  );
}

export default App;
