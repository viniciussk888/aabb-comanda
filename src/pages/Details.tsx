import React from "react";
import aabbLogo from "../assets/logo.svg";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const comandaMock = [
  {
    cemp: "01",
    nroNota: "00000192",
    codProduto: "000113",
    quantidade: 1,
    vlUnitario: 65,
    vlTotal: 65,
    descricao: "REFEICAO PEIXE FRITO",
    totNota: 143,
  },
  {
    cemp: "01",
    nroNota: "00000192",
    codProduto: "000001",
    quantidade: 5,
    vlUnitario: 8,
    vlTotal: 40,
    descricao: "CERVEJA BRAHMA 600 ML",
    totNota: 143,
  },
  {
    cemp: "01",
    nroNota: "00000192",
    codProduto: "000013",
    quantidade: 3,
    vlUnitario: 8,
    vlTotal: 24,
    descricao: "CERVEJA DEVASSA 600 ML",
    totNota: 143,
  },
  {
    cemp: "01",
    nroNota: "00000192",
    codProduto: "000138",
    quantidade: 1,
    vlUnitario: 8,
    vlTotal: 8,
    descricao: "PORCAO DE FEIJAO",
    totNota: 143,
  },
  {
    cemp: "01",
    nroNota: "00000192",
    codProduto: "000153",
    quantidade: 1,
    vlUnitario: 6,
    vlTotal: 6,
    descricao: "PORCAO DE MACARRAO",
    totNota: 143,
  },
];

export const Details: React.FC = () => {
  // get table number from url param
  const tableNumber = useParams<{ mesa: string }>().mesa;
  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

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
          Nome
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
          Valor
        </Label>
        <Label
          style={{
            width: "20%",
            maxWidth: "20%",
          }}
        >
          Sub total
        </Label>
      </Row>
      <Divider />
      {comandaMock.map((item) => (
        <Row>
          <ItemLabel
            style={{
              width: "50%",
              maxWidth: "50%",
              fontSize: 13,
            }}
          >
            {item.codProduto} {item.descricao}
          </ItemLabel>
          <ItemLabel
            style={{
              width: "10%",
              maxWidth: "10%",
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
        <Label>Taxa 10%:</Label>
        <Label
          style={{
            marginBottom: 10,
          }}
        >
          {formatCurrency(
            comandaMock.reduce((acc, item) => {
              return acc + item.vlTotal;
            }, 0) * 0.1
          )}
        </Label>
        <Label>Total:</Label>
        <Label
          style={{
            marginBottom: 10,
          }}
        >
          {formatCurrency(
            comandaMock.reduce((acc, item) => {
              return acc + item.vlTotal;
            }, 0)
          )}
        </Label>
        <Label
          style={{
            color: "#f00",
          }}
        >
          Total Geral:
        </Label>
        <Label
          style={{
            color: "#f00",
          }}
        >
          {formatCurrency(
            comandaMock.reduce((acc, item) => {
              return acc + item.vlTotal;
            }, 0) * 1.1
          )}
        </Label>
      </Column>
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
  font-size: 0.9rem;
`;
