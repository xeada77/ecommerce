import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "@material-ui/icons/Search";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import Badge from "@material-ui/core/Badge";
import { StoreContext } from "../context/StoreProvider";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  padding: 0px 5px;

  ::placeholder {
    color: teal;
    font-weight: 600;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  color: teal;
`;

const Navbar = () => {
  const [store] = useContext(StoreContext);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Buscar" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>XDA.</Logo>
        </Center>
        <Right>
          <MenuItem to="/register">REGISTRO</MenuItem>
          <MenuItem to="/login">ENTRAR</MenuItem>
          <MenuItem to="/cart">
            <Badge badgeContent={store.cart.totalItems} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
