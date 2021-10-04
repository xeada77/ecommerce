import styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, filters }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5001/api/v1/products/?category=${category}`
            : "http://localhost:5001/api/v1/products/"
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    console.log(filters);
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, filters, category]);

  return (
    <Container>
      {products.length > 0
        ? category
          ? filteredProducts.map((product) => (
              <Product product={product} key={product._id} id={product._id} />
            ))
          : products.map((product) => (
              <Product product={product} key={product._id} id={product._id} />
            ))
        : "Cargando..."}
    </Container>
  );
};

export default Products;
