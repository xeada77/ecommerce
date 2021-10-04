import { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleChangeSelect = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <NavBar />
      <Annoucement />
      <Title>Vestidos</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar Productos:</FilterText>
          <Select
            name="color"
            defaultValue="color"
            onChange={handleChangeSelect}
          >
            <Option value="color" disabled>
              Color
            </Option>
            <Option value="white">Blanco</Option>
            <Option value="black">Negro</Option>
            <Option value="red">Rojo</Option>
            <Option value="blue">Azul</Option>
            <Option value="yellow">Amarillo</Option>
            <Option value="green">Verde</Option>
          </Select>
          <Select
            name="sizes"
            defaultValue="talla"
            onChange={handleChangeSelect}
          >
            <Option disabled value="talla">
              Talla
            </Option>
            <Option value="XS">XS</Option>
            <Option value="S">S</Option>
            <Option value="M">M</Option>
            <Option value="L">L</Option>
            <Option value="XL">XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Ordenar Productos:</FilterText>
          <Select
            name="sort"
            defaultValue="new"
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <Option value="newest">Nuevos</Option>
            <Option value="priceAsc">Precio (asc)</Option>
            <Option value="priceDesc">Precio (desc)</Option>
          </Select>
        </Filter>
        <Filter></Filter>
      </FilterContainer>
      <Products category={category} filters={filters} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
