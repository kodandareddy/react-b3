import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "reactstrap";
const Cart = ({ cartItems,Pay,removeFromCart }) => {
  let amount = 0;

  cartItems.forEach((cart) => {
    amount = parseFloat(cart.price) + amount;
  });
  return (
    <Container>
      <h1 className="text-success">Your Cart</h1>
      <ListGroup>
        {cartItems.map((item) => {
          return (
            <ListGroupItem key={item.id}>
              <Row>
                <Col>
                  <img height={80} src={item.smallImage} />
                </Col>
                <Col className="text-center">
                  <div>My Product:{item.productName}</div>
                  <div>
                    Price:<p>{item.price}</p>
                  </div>
                  <Button color="danger" onClick={()=>removeFromCart(item.id)}>Remove</Button>
                </Col>
              </Row>
            </ListGroupItem>
          );
        })}
      </ListGroup>
      {
       cartItems.length>0 ? <Card className="text-center mt-3">
          <CardHeader>Grand Total:</CardHeader>
          <CardBody>
            Your amount for {cartItems.length} product is {amount} Rs
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={Pay}>
              Pay Hear
            </Button>
          </CardFooter>
        </Card>:<h1>Your Cart is Empty</h1>}
      
    </Container>
  );
};

export default Cart;
