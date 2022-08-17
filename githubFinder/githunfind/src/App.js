import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";
import UserCard from "./UserCard/UserCard";
import axios from "axios";
import SignIn from "./SignIn/signIn";
import fireBaseConfig from "./fireBaseConfig";
import { initializeApp } from "firebase/app";
import Repos from "./Repos/Repos";
import { Route, Switch,  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./Home/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/home/home1">
            <Home />
          </Route>
          <Route  path="/home">
              <h1>I am initail Route</h1>
          </Route>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
