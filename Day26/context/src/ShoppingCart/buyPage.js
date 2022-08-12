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
import Product from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BuyPage = ({addInCart}) => {
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
        {products.map((product) => (
          <Product key={product.id} product={product} addInCart={addInCart} />
        ))}
      </Row>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
};

export default BuyPage;
