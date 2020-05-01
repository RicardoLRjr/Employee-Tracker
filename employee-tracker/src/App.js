import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './components/employeedirectory'
import NavBar from "./components/all/NavBar";
import EmployeeDirectory from './components/employeedirectory';

function App() {
  return (
    <Router>
      <NavBar/>
   <Route exact path="/" component={EmployeeDirectory} />
</Router>
  );
}

export default App;
