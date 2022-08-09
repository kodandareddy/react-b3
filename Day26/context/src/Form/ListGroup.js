import React, { useContext, useState } from "react";
import { Button, Form, FormGroup, Input, ListGroup } from "reactstrap";
import { TodoContext } from "../Context/Context";
const ListGroups = (props) => {
  const { myList, dispatch } = useContext(TodoContext);
  return (
    <ListGroup className="mt-5 mb-2 items">
      {myList.map((item) => {
        return (
          <>
            <h1>{item.userValue}</h1>
            <Button
              color="warning"
              onClick={() =>
                dispatch({
                  type: "delete",
                  payload: {
                    id: item.id,
                  },
                })
              }
            >
              Delete
            </Button>
          </>
        );
      })}
    </ListGroup>
  );
};

export default ListGroups;
