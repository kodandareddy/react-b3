import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  Container,
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import { v4 } from "uuid";
import {addTodo} from '../action/todo'
//redux


const TodoForm = () => {
  const [title, setTitle] = useState("");
   const dispatch=useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return alert("Please add a todo");
    }

    const todo = {
      title,
      id: v4(),
    };

    dispatch(addTodo(todo));

    setTitle("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="primary" type="submit">
              ADD
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};



export default TodoForm;
