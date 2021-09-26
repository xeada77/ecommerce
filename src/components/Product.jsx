import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@material-ui/icons";

import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const ShopInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  flex: 4;
`;

const SizeInfo = styled.div`
  width: 100%;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  flex: 1;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #f5fbfd;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  background-color: white;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.2);
  }
`;

const Size = styled.div`
  width: 30px;
  height: 30px;
  background-color: #f5fbfd;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  cursor: pointer;
  transition: all 0.5s ease;
`;

const Product = ({ product }) => {
  return (
    <Container>
      <Circle />
      <Image src={product.img} />
      <Info>
        <ShopInfo>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </ShopInfo>
        <SizeInfo>
          {product.sizes.map((size) => (
            <Size>{size}</Size>
          ))}
        </SizeInfo>
      </Info>
    </Container>
  );
};

export default Product;
