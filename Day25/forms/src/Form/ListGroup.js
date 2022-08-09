import React, { useState } from "react";
import { Button, Form, FormGroup, Input, ListGroup } from "reactstrap";
const ListGroups = (props) => {
  return (
    <ListGroup className="mt-5 mb-2 items">
      {props.myList.map((item) => {
        return (
          <>
            <h1>{item.userValue}</h1>
            <Button color="warning" onClick={()=> props.handleDelete(item.id)}>Delete</Button>
          </>
        );
      })}
    </ListGroup>
  );
};

export default ListGroups;
