import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  flex: 1;

  ::placeholder {
    color: teal;
    font-weight: 300;
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 0.8rem;
  text-decoration: underline;
  cursor: pointer;
`;
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  };
  return (
    <Container>
      <Wrapper>
        <Title>INICIA SESIÓN</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Nombre de Usuario"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />

          <Input
            placeholder="Contraseña"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <Button>Entrar</Button>
          <Link>¿NO RECUERDAS LA CONTRASEÑA?</Link>
          <Link>CREAR UNA CUENTA</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
