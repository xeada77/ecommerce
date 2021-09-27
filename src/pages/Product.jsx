import { Add, Remove } from "@material-ui/icons";
import { useContext, useState } from "react";
import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { StoreContext } from "../context/StoreProvider";
import { types } from "../context/storeReducer";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Desc = styled.p`
  margin: 20px 0px;
  line-height: 1rem;

  ::first-letter {
    font-size: 48px;
    letter-spacing: 2px;
  }
`;

const Price = styled.span`
  font-weight: 400;
  font-size: 40px;
  display: flex;
  justify-content: end;
  margin-right: 10px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  padding: 5px;
  margin-left: 10px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  margin: 0px 10px;
  font-size: 20px;
  border: 1px solid teal;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
`;

const Button = styled.button`
  padding: 15px;
  font-weight: 500;
  border: 2px solid teal;
  cursor: pointer;
  background-color: white;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const [amount, setAmount] = useState(1);
  const [store, dispatch] = useContext(StoreContext);

  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Vestido Denim</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>29,99 €</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color: </FilterTitle>
              <FilterColor color="red"></FilterColor>
              <FilterColor color="blue"></FilterColor>
              <FilterColor color="orange"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Talla: </FilterTitle>
              <FilterSize>
                <FilterSizeOption defaultValue disabled>
                  Talla
                </FilterSizeOption>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                style={{ cursor: "pointer" }}
                onClick={() => amount > 0 && setAmount(amount - 1)}
              />
              <Amount>{amount}</Amount>
              <Add
                style={{ cursor: "pointer" }}
                onClick={() => setAmount(amount + 1)}
              />
            </AmountContainer>
            <Button
              onClick={() => dispatch({ type: types.addCart, payload: amount })}
            >
              AÑADIR A LA CESTA
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
