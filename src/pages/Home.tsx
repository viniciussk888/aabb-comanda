import React from "react";
import aabbLogo from "../assets/logo.svg";
import styled from "styled-components";

export const Home: React.FC = () => {
  const [tableNumber, setTableNumber] = React.useState("");
  const handleClick = () => {
    if (tableNumber === "") return;
    window.location.href = `/comanda/${tableNumber}`;
  };

  return (
    <Wrapper>
      <Logo src={aabbLogo} alt="AABB logo" />
      <Title>Bem vindo</Title>
      <Subtitle>Insira o número da mesa para acessar a comanda</Subtitle>
      <ButtonWrapper>
        <Input
          onChange={(e) => setTableNumber(e.target.value)}
          placeholder="Número da mesa"
        />
        <Button
          onClick={handleClick}
          disabled={tableNumber === ""}
          style={{
            backgroundColor: tableNumber === "" ? "#ccc" : "#013195",
          }}
        >
          Acessar comanda
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
`;

const Title = styled.h1`
  text-align: center;
  color: #013195;
  font-size: 1.6rem;
`;

const Subtitle = styled.h2`
  padding: 2px;
  text-align: center;
  color: #013195;
  font-size: 1.2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  max-width: 80%;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #013195;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #013195;
  background-color: #fff;
  outline: none;
  &:focus {
    border: 1px solid #013195;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #013195;
  color: #fff;
  background-color: #013195;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 1.2rem;
  outline: none;
  &:focus {
    border: 1px solid #013195;
  }
`;
