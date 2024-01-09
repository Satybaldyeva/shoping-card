import { ShoppingCart } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Navbar = () => {
  return (
    <Container>
      <Links>
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </Links>
    </Container>
  );
};

const Container = styled("div")`
  width: 100%;
  height: 80px;
  background-color: rgb(19, 19, 19);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Links = styled("div")`
  margin-right: 50px;
  display: flex;
  align-items: center;
  & > a {
    text-decoration: none;
    color: white;
    margin-left: 20px;
    font-size: 25px;
  }
`;
