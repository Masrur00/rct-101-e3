import Product from "../Products/Product/Product";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Products = () => {
  const [data] = useContext(CartContext);
  return (
    <div>
      {data.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
};

export default Products;
