import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
import { useSelector } from "react-redux";



const Todo = ({markComplete}) => {

 const todos=useSelector(state=> state.todos)
  return (
    <ListGroup className="mt-5 mb-2">
      {todos?.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.title}
          <span className="float-right" onClick={() => markComplete(todo.id)}>
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};



export default Todo;
