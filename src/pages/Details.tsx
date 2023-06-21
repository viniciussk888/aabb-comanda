/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import aabbLogo from "../assets/logo.svg";
import LoadingAnimation from "../assets/loading.gif";
import ErrorAnimation from "../assets/error.gif";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

type Comanda = {
  cemp: string;
  nroNota: string;
  codProduto: string;
  quantidade: number;
  vlUnitario: number;
  vlTotal: number;
  descricao: string;
  totNota: number;
};
const BASE_URL = import.meta.env.VITE_API_URL;

export const Details: React.FC = () => {
  const [command, setCommand] = useState<Comanda[]>([]);
  const [error, setError] = useState(false); // TODO: handle error
  const [loading, setLoading] = useState(true);
  const tableNumber = useParams<{ mesa: string }>().mesa;
  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleGetCommand = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/RetornarItensComandaBar?cemp=01&mesa=${tableNumber}`
      );
      setCommand(data);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetCommand();
  }, [tableNumber, handleGetCommand]);

  const getActualDate = () => {
    const date = new Date();
    const day = date.getDate();
    const formmatedDay = day < 10 ? `0${day}` : day;
    const month = date.getMonth() + 1;
    const formmatdMonth = month < 10 ? `0${month}` : month;
    const year = date.getFullYear();

    const hours = date.getHours();
    const formmatdHours = hours < 10 ? `0${hours}` : hours;
    const minutes = date.getMinutes();
    const formmatedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formmatedDay}/${formmatdMonth}/${year} | ${formmatdHours}:${formmatedMinutes}`;
  };

  if (loading)
    return (
      <Wrapper
        style={{
          justifyContent: "center",
        }}
      >
        <Logo
          style={{
            width: 100,
            height: 100,
          }}
          src={LoadingAnimation}
          alt="Carregando..."
        />
      </Wrapper>
    );

  if (error)
    return (
      <Wrapper
        style={{
          justifyContent: "center",
        }}
      >
        <Logo
          style={{
            width: 100,
            height: 100,
          }}
          src={ErrorAnimation}
          alt="Error..."
        />
        <Title>
          Ocorreu um erro ao carregar a comanda, por favor tente novamente
        </Title>
      </Wrapper>
    );
  return (
    <Wrapper>
      <Logo src={aabbLogo} alt="AABB logo" />
      <Title>Bem vindo</Title>
      <Subtitle>
        Confira abaixo os itens de sua comanda e o valor total.
      </Subtitle>
      <Subtitle>
        MESA {tableNumber} - {getActualDate()}
      </Subtitle>
      <Divider />
      <Row>
        <Label
          style={{
            width: "50%",
            maxWidth: "50%",
          }}
        >
          Código Produtos
        </Label>
        <Label
          style={{
            width: "10%",
            maxWidth: "10%",
          }}
        >
          Qtd.
        </Label>
        <Label
          style={{
            width: "20%",
            maxWidth: "20%",
          }}
        >
          Preço
        </Label>
        <Label
          style={{
            width: "20%",
            maxWidth: "20%",
          }}
        >
          Valor
        </Label>
      </Row>
      <Divider />
      {command.map((item) => (
        <Row>
          <ItemLabel
            style={{
              width: "50%",
              maxWidth: "50%",
              fontSize: 12,
            }}
          >
            {item.codProduto?.slice(-3)}-{item.descricao}
          </ItemLabel>
          <ItemLabel
            style={{
              width: "10%",
              maxWidth: "10%",
              marginLeft: 5,
            }}
          >
            {item.quantidade}
          </ItemLabel>
          <ItemLabel
            style={{
              width: "20%",
              maxWidth: "20%",
            }}
          >
            {formatCurrency(item.vlUnitario)}
          </ItemLabel>
          <ItemLabel
            style={{
              width: "20%",
              maxWidth: "20%",
            }}
          >
            {formatCurrency(item.vlTotal)}
          </ItemLabel>
        </Row>
      ))}

      <Divider />
      <Column>
        <Label>
          Consumo..
          {formatCurrency(
            command.reduce((acc, item) => {
              return acc + item.vlTotal;
            }, 0)
          )}
        </Label>
        <Label>
          Serviço.....
          {formatCurrency(
            command.reduce((acc, item) => {
              return acc + item.vlTotal;
            }, 0) * 0.1
          )}
        </Label>
        <Label
          style={{
            color: "#f00",
          }}
        >
          Valor Total.
          {formatCurrency(
            command.reduce((acc, item) => {
              return acc + item.vlTotal;
            }, 0) * 1.1
          )}
        </Label>
      </Column>
      <Title
        style={{
          marginTop: 100,
          padding: 20,
          fontSize: 14,
          textAlign: "center",
        }}
      >
        Desenvolvido Por Nsc Sistemas Ltda - www.nscsistemas.com.br - 99
        3221-8282
      </Title>
    </Wrapper>
  );
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20px);
  margin-top: 10px;
`;

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
  width: 300px;
  height: 100px;
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

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 20px);
`;

const Label = styled.label`
  color: #222;
  font-size: 1rem;
  font-weight: bold;
`;

const ItemLabel = styled.label`
  color: #222;
  font-size: 12px;
`;
