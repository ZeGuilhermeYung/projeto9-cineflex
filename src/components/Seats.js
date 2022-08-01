import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./FooterInfo";
import styled from 'styled-components';
import axios from "axios";
import loadingCountdown from "../assets/img/loading-countdown.gif";

function Seat ( {id, name, isAvailable, seatsSelected, setSeatsSelected} ) {
  const [selected, setSelected] = useState(false);

  function verifySeats () {

    setSelected(!selected);
    const checkId = seatsSelected.some(element => element.seatId === id);
    if(checkId) {
      const arrayaux = [...seatsSelected];
      for(let i = 0; i < seatsSelected.length; i++){
          if(id === seatsSelected[i].seatId){
              arrayaux.splice(i, 1);
              setSeatsSelected(arrayaux);
          }
      }
    } else {
      setSeatsSelected([...seatsSelected, {seatId: id, seatNumber: name}].sort((a, b) => a - b));
    } 
  }
  
  return (
      <SeatDiv
        id={id}
        seatAvailableColor={isAvailable}
        seatSelectedColor={selected}
        onClick={isAvailable ? 
          () => {verifySeats ()}
          : () => {alert("Esse assento não está disponível")}} >
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

export default function Seats () {
  const [seats, setSeats] = useState([]);
  const [seatsSelected, setSeatsSelected] = useState([]);
  const { idSessao } = useParams();
  const [form, setForm] = React.useState({
    name: '',
    cpf: '',
    seats: [],
  });
  const navigate = useNavigate();

  useEffect(() => {
		const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);

		promise.then(sessionSeats => {
			setSeats(sessionSeats.data);
		});
	}, []);

	function sendForm (event) {
		event.preventDefault();
    const seatsIds = seatsSelected.map(ticket => (ticket.seatId));
    const buyers = seatsSelected.map(ticket => ({ idAssento: ticket.seatNumber, nome: form.name, cpf: form.cpf }));
    const tickets = {ids: seatsIds, compradores: buyers};
    const ticketInfo = {
      seatsIds: seats.id,
      movie: seats.movie.title,
      date: seats.day.date,
      session: seats.name,
      seatsNumbers: seatsIds,
      buyers: buyers
    }

		const request = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", tickets);
    request.then(sessionSeats => {
      navigate('/sucesso', {
          replace: true,
          state: ticketInfo
      })});
  }
  function handleForm (e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    }) 
  }

  return (
    <>
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
              isAvailable={seat.isAvailable} 
              seatsSelected={seatsSelected}
              setSeatsSelected={setSeatsSelected} />)}
          </SeatsDiv>
          <form action="" onSubmit={sendForm} >
            <label htmlFor="">Nome do comprador:</label>
            <input type="text" name="name" onChange={handleForm} value={form.name} placeholder="Digite seu nome..."  required />
            <label htmlFor="">CPF do comprador:</label>
            <input type="number" name="cpf" onChange={handleForm} value={form.cpf} pattern="[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}" placeholder="Digite seu CPF..."  required />
            <button type="submit">Reservar assento(s)</button>
          </form>
        </main>
      </SeatsSection>
      {seats.length === 0 ? <></> : <Footer seats={seats} />}
    </>
  );
}

const SeatsSection = styled.section`
  width: 100%;
  margin-top: 67px;
  margin-bottom: 147px;
  
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