import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  flex: 1;

  ::placeholder {
    color: teal;
    font-weight: 300;
    font-size: 0.9rem;
  }
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Register = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>CREA UNA CUENTA</Title>
          <Form>
            <Input placeholder="Nombre" />
            <Input placeholder="Apellidos" />
            <Input placeholder="Nombre de Usuario" />
            <Input placeholder="Email" />
            <Input placeholder="Contraseña" />
            <Input placeholder="Repetir Contraseña" />
            <Agreement>
              Al crear una cuenta, consiento a que mi información personal sea
              tratada de acuerdo a la <b>POLIZA DE PRIVACIDAD</b>
            </Agreement>
            <Button>Enviar</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
