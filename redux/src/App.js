import React from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//importing components

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Container fluid>
        <Todo />
        <TodoForm />
      </Container>
    </Provider>
  );
}

export default App;
