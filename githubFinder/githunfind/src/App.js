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
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./NavBar/Navbar";
import SignInNew from "./SignInNew/SignInNew";
import SignUp from "./SignUp/SignUp";
import firebaseConfig from './fireBaseConfig'
function App() {
  const app = initializeApp(firebaseConfig);
  console.log(app)
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route exact path="/">
        <h1>I am Home</h1>
          </Route>
          <Route exact path="/signIn">
            <SignInNew />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
