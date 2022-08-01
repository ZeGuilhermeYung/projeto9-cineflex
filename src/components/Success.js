import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';

export default function Success () {
  const location = useLocation();

  return (
    <SuccessSection>
      <header>
        <h3>Pedido feito com sucesso!</h3>
      </header>
      <main>
        <TicketInfoDiv>
          <h3>Filme e sessão</h3>
          <h4>{location.state.movie}</h4>
          <h4>{location.state.date} - {location.state.session}</h4>
        </TicketInfoDiv>
        <TicketInfoDiv>
          <h3>Ingressos</h3>
          {location.state.buyers.map((seat, index) => (
            <h4 key={index}>Assento {seat.idAssento}</h4>
          ))}
        </TicketInfoDiv>
        <TicketInfoDiv>
          <h3>Compradores</h3>
          <h4>Nome: {location.state.buyers[0].nome}</h4>
          <h4>CPF: {location.state.buyers[0].cpf}</h4>
        </TicketInfoDiv>
        <Link to="/">
          <button>Voltar pra Home</button>
        </Link>
      </main>
    </SuccessSection>
);
}

const SuccessSection = styled.section`
  width: 100%;
  margin-top: 67px;
  h3 {
    font-weight: 700;
  }
  header {
    width: 100%;
    height: 97px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  header h3 {
    color: #247A6B;
  }
  main {
    margin: 0 30px 30px 30px;
  }
`;

const TicketInfoDiv = styled.div`
  width: 100%;
  margin-bottom: 50px;
  
  h3 {
    margin-bottom: 15px;
    text-align: start;
  }
`;