import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
} from "reactstrap";
const Cart = ({ cartItems }) => {
  return (
    <Container>
      <h1 className="text-success">Your Cart</h1>
      <ListGroup>
        {cartItems.map((item) => {
          return (
            <ListGroupItem key={item.id}>
              <Row>
                <Col>
                  <img
                    height={80}
                    src={item.smallImage}
                  />
                </Col>
                <Col className="text-center">
                  <div>My Product:<h1>{item.productName}</h1></div>
                  <div>Price:<p>{item.price}</p></div>
                  <Button color="danger">Remove</Button>
                </Col>
              </Row>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Container>
  );
};

export default Cart;
