import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
const InputComponent = (props) => {
  const [userValue, setUserValue] = useState("");
  
  return (
    <div>
        <Form>
        <FormGroup>
          <div className="d-flex">
            <Input
              onChange={(e) => setUserValue(e.target.value)}
              value={userValue}
            />
            <Button color="warning" onClick={()=>{
              props.handleSubmit(userValue)
              setUserValue("")
            }
              }>
              Add
            </Button>
          </div>
        </FormGroup>
      </Form>
    </div>
  )
}

export default InputComponent