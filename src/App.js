import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import RoutinesList from "./components/routines-list.component";
import EditRoutine from "./components/edit-routine.component";
import CreateRoutine from "./components/create-routine.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br />
      <Route path="/" exact component={RoutinesList} />
      <Route path="/edit/:id" exact component={EditRoutine} />
      <Route path="/create" exact component={CreateRoutine} />
      <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
