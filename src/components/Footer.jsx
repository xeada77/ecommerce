import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Payment = styled.img`
  width: 50%;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #${(props) => props.color};
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>XDA.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          sunt, facere voluptates officia, incidunt ipsam mollitia, harum eos
          odio consequuntur unde repellendus minus quas molestiae inventore!
          Enim animi rem similique!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links Interesantes</Title>
        <List>
          <ListItem>Inicio</ListItem>
          <ListItem>Cesta</ListItem>
          <ListItem>Moda Hombre</ListItem>
          <ListItem>Moda Mujer</ListItem>
          <ListItem>Accesorios</ListItem>
          <ListItem>Mi Cuenta</ListItem>
          <ListItem>Seguimiento de Pedidos</ListItem>
          <ListItem>Lista de Deseos</ListItem>
          <ListItem>Terminos</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacto</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Ciudad de Mondoñedo, O Vicedo
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +34 123456789
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@xda.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
