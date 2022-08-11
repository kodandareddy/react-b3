import React, { useEffect, useState } from "react";
import axios from "axios";
import { data } from "./MyJson";
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
import { faker } from "@faker-js/faker";

const BuyPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchPhotos().then((res) => {
      const { photos } = res;
      console.log(photos);
      const data = photos.map((photo) => {
        return {
          id: photo.id,
          smallImage: photo.src.small,
          productName: faker.word.noun(5),
          price: faker.commerce.price(),
        };
      });
      console.log(data);
      setProducts(data);
    });
  }, []);

  const fetchPhotos = () => {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  };
  return (
    <Container>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} lg={4}>
              <Card className="mt-2 mb-1">
                <img alt="Sample" src={product.smallImage} />
                <CardBody>
                  <CardTitle tag="h5">Product:{product.productName}</CardTitle>

                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Price:{product.price}
                  </CardSubtitle>
                  <Button color="primary">Button</Button>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BuyPage;
