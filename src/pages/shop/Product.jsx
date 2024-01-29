import React, { useContext } from "react";
import { styled } from "styled-components";
import { ShopContext } from "../../context/shop-context";

export const Product = ({ data }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[data.id];
  return (
    <Container>
      <img src={data.productImage} alt={data.productName} />
      <Card>
        <p>
          <b>{data.productName}</b>
        </p>
        <p>${data.price}</p>
      </Card>
      <Btn onClick={() => addToCart(data.id)}>
        Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
      </Btn>
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

const Btn = styled("button")`
  border-radius: 50px;
  padding: 8px 12px;
  background-color: white;
  font-weight: 700;
  &:hover {
    background-color: black;
    color: white;
  }
`;
