import React, { useContext, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { UserContext } from "../Context/userContext";

const SignInNew = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
 const context=useContext(UserContext)
 const handleSubmit=(e)=>{
  e.preventDefault()
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      history.push("/");
      context.setUser(userCredential.user)
          
      // ...
    })
    .catch((error) => {
      alert(error.message)
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  }
  return (
    <div>
      <Container className="text-center offset-lg-3 mt-5">
        <Row>
          <Col lg={6}>
            <Card>
              <Form onSubmit={handleSubmit}>
                <CardHeader className="">SignIN here</CardHeader>
                <CardBody>
                  <FormGroup row>
                    <Label for="email" sm={3}>
                      Email
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="provide your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="password" sm={3}>
                      Password
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="your password here"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Col>
                  </FormGroup>
                </CardBody>
                <CardFooter>
                  <Button type="submit" block color="primary">
                    Sign In
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignInNew;
