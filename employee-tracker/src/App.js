import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './components/employeedirectory'
import NavBar from "./components/all/NavBar";
import EmployeeDirectory from './components/employeedirectory';
import landing from './containers/landing'

function App() {
  return (
    <Router>
      <NavBar/>
   <Route exact path="/" component={landing} />
</Router>
  );
}

export default App;
