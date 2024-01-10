import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";
import { styled } from "styled-components";
export const Shop = () => {
  return (
    <div>
      <div>
        <h1>PedroTech Shop</h1>
      </div>
      <ProductItem>
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </ProductItem>
    </div>
  );
};

const ProductItem = styled("div")`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
