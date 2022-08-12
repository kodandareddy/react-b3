import React from "react";
import {
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardTitle,
    Col,
    Container,
    Row,
  } from "reactstrap";
const Product = ({product,addInCart}) => {
  return (
    <Col sm={12} md={6} lg={4} key={product.id}>
      <Card className="mt-2 mb-1 text-center">
        <img alt="Sample" src={product.smallImage} />
        <CardBody>
          <CardTitle tag="h5">Product:{product.productName}</CardTitle>

          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Price:{product.price}
          </CardSubtitle>
          <Button color="primary" onClick={()=>addInCart(product)} >Buy now</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Product;
