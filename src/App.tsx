import aabbLogo from "./assets/logo.svg";
import styled from "styled-components";

function App() {
  // get table number from url param
  const tableNumber = window.location.pathname.split("/")[1];
  if (!tableNumber) {
    alert("Número da mesa não informado");
    return (
      <Wrapper>
        <Logo src={aabbLogo} alt="AABB logo" />
        <Title>Número da mesa não informado</Title>
      </Wrapper>
    );
  }
  const getActualDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${day}/${month}/${year} | ${hours}:${minutes}`;
  };
  return (
    <Wrapper>
      <Logo src={aabbLogo} alt="AABB logo" />
      <Title>Bem vindo</Title>
      <Subtitle>
        Confira abaixo os pedidos de sua comanda e o valor total
      </Subtitle>
      <Subtitle>
        MESA {tableNumber} - {getActualDate()}
      </Subtitle>
      <Divider />
      <Row>
        <Label
          style={{
            width: "40%",
            maxWidth: "40%",
          }}
        >
          Nome
        </Label>
        <Label
          style={{
            width: "20%",
            maxWidth: "20%",
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
      <Row>
        <ItemLabel
          style={{
            width: "40%",
            maxWidth: "40%",
          }}
        >
          Coca cola zero
        </ItemLabel>
        <ItemLabel
          style={{
            width: "20%",
            maxWidth: "20%",
          }}
        >
          1
        </ItemLabel>
        <ItemLabel
          style={{
            width: "20%",
            maxWidth: "20%",
          }}
        >
          R$ 5,00
        </ItemLabel>
        <ItemLabel
          style={{
            width: "20%",
            maxWidth: "20%",
          }}
        >
          R$ 5,00
        </ItemLabel>
      </Row>
      <Row>
        <ItemLabel
          style={{
            width: "40%",
            maxWidth: "40%",
          }}
        >
          Cerveja Original
        </ItemLabel>
        <ItemLabel
          style={{
            width: "20%",
            maxWidth: "20%",
          }}
        >
          8
        </ItemLabel>
        <ItemLabel
          style={{
            width: "20%",
            maxWidth: "20%",
          }}
        >
          R$ 10,00
        </ItemLabel>
        <ItemLabel
          style={{
            width: "20%",
            maxWidth: "20%",
          }}
        >
          R$ 80,00
        </ItemLabel>
      </Row>
      <Divider />
      <Row>
        <Label
          style={{
            width: "30%",
            maxWidth: "30%",
          }}
        >
          Comissão:
        </Label>
        <Label
          style={{
            width: "30%",
            maxWidth: "30%",
          }}
        >
          Total:
        </Label>
        <Label
          style={{
            width: "30%",
            maxWidth: "30%",
            color: "#f00",
          }}
        >
          Total Geral:
        </Label>
      </Row>
      <Row>
        <Label
          style={{
            width: "30%",
            maxWidth: "30%",
          }}
        >
          R$ 12,00
        </Label>
        <Label
          style={{
            width: "30%",
            maxWidth: "30%",
          }}
        >
          R$ 85,00
        </Label>
        <Label
          style={{
            width: "30%",
            maxWidth: "30%",
            color: "#f00",
          }}
        >
          R$ 97,00
        </Label>
      </Row>
    </Wrapper>
  );
}

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
  font-size: 0%.8rem;
`;

export default App;