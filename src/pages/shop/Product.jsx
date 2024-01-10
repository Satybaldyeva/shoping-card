import React from "react";
import { styled } from "styled-components";

export const Product = ({ data }) => {
  return (
    <Container>
      <img src={data.productImage} alt={data.productName} />
      <Card>
        <p>
          <b>{data.productName}</b>
        </p>
        <p>${data.price}</p>
      </Card>
    </Container>
  );
};

const Container = styled("div")`
  width: 30%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > img {
    width: 300px;
    height: 200px;
    border-radius: 50px;
    align-self: center;
  }
`;

const Card = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
