import { useContext, useEffect, useState } from "react";
import {
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";
import axios from "axios";
import Repos from "../Repos/Repos";
import UserCard from "../UserCard/UserCard";
import { UserContext } from "../Context/userContext";
import { Redirect, useHistory } from "react-router-dom";

const Home = () => {
  const [userValue, setUserValue] = useState("");
  const context = useContext(UserContext);
  const history = useHistory();
  const [user, setUser] = useState({});
  const fetchUsers = () => {
    axios
      .get(`https://api.github.com/users/${userValue}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {});
  };

  if (!context.user) {
    history.push('/signIn')
  }
  return (
    <div>
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
              <InputGroupText onClick={fetchUsers}>Fetch User</InputGroupText>
            </InputGroup>
            {user && <UserCard user={user} />}
          </Col>
          <Col md="7">
            {Object.keys(user).length > 0 && <Repos repUrl={user?.repos_url} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
