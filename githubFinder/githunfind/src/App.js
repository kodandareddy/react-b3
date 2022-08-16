import { useState } from "react";
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

function App() {
  const [userValue, setUserValue] = useState("");

  const [user,setUser]=useState(null)
  const fetchUsers = () => {
    axios
      .get(`https://api.github.com/users/${userValue}`)
      .then((res) => {
        setUser(res.data)
      })
      .catch(() => {});
  };
  return (
    <div className="App">
      <Container>
        <Row className="mt-3">
          <Col md="5">
            <InputGroup>
              <Input
                type="text"
                placeholder="Please provide the used name"
                value={userValue}
                onChange={(e) => setUserValue(e.target.value)}
              />
              <InputGroupText onClick={fetchUsers} >Fetch User</InputGroupText>
            </InputGroup>
             {user&& <UserCard  user={user}/>}
          </Col>
          <Col md="7">
            <h1>hello</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
