import React, { useContext, useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { TodoContext } from "../Context/Context";
import { v4 as uuidv4 } from "uuid";

const InputComponent = () => {
  const [userValue, setUserValue] = useState("");
  const { dispatch } = useContext(TodoContext);

  return (
    <div>
      <Form>
        <FormGroup>
          <div className="d-flex">
            <Input
              onChange={(e) => setUserValue(e.target.value)}
              value={userValue}
            />
            <Button
              color="warning"
              onClick={() => {
                dispatch({
                  type: "add",
                  payload: {
                    userValue,
                    id: uuidv4(),
                  },
                });
                // props.handleSubmit(userValue)
                setUserValue("");
              }}
            >
              Add
            </Button>
          </div>
        </FormGroup>
      </Form>
    </div>
  );
};

export default InputComponent;
