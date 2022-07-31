import React from "react";
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";
import loadingCountdown from "../assets/img/loading-countdown.gif";

function Seat ( {id, name, isAvailable} ) {
  const [available, setAvailable] = useState(isAvailable);
  const [selected, setSelected] = useState(false);

  return (
      <SeatDiv
        id={id}
        seatAvailableColor={available}
        seatSelectedColor={selected}
        onClick={available ? () => {setSelected(!selected)} : () => {setSelected(selected)}} >
        <p>{name}</p>
      </SeatDiv>
  ); 
}

const SeatDiv = styled.div`
  width: 26px;
  height: 26px;
  background-color: ${
    props => 
      (props.seatAvailableColor && !props.seatSelectedColor) ? "#C3CFD9"
      : (props.seatAvailableColor && props.seatSelectedColor) ? "#45BDB0"
      : "#F7C52B"
  };
  border: 1px solid #808F9D;
  border-radius: 50%;
  margin: 0 3px 18px 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default function Seats ( {seats, setSeats} ) {
  const { idSessao } = useParams();

  useEffect(() => {
		const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

		promise.then(response => {
			setSeats(response.data);
		});
	}, []);

  return (
    <SeatsSection>
      <header>
        <h3>Selecione o(s) assento(s)</h3>
      </header>
      <main>
        <SeatsDiv>
          {(seats.length === 0) ? <img src={loadingCountdown} />
          : seats.seats.map((seat, index) =>
          <Seat
            key={index}
            id={seat.id}
            name={Number(seat.name) < 10 ? `0${Number(seat.name)}` : seat.name}
            isAvailable={seat.isAvailable} />)}
        </SeatsDiv>
      </main>
    </SeatsSection>
  );
}

const SeatsSection = styled.section`
  width: 100%;
  margin-top: 67px;
  
  header {
    width: 100%;
    height: 97px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  main {
    margin: 0 24px 30px 24px;
  }
`;

const SeatsDiv = styled.div`
  width: 100%;
  height: 203px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  p {
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;
  }
`;