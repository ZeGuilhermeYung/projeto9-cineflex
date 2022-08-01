import React from "react";
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Footer from "./FooterInfo";
import styled from 'styled-components';
import axios from "axios";
import loadingCountdown from "../assets/img/loading-countdown.gif";

function Session ( {idSessao, name, idFilme} ) {
  return (
    <Link id={idSessao} to={`/sessoes/${idFilme}/assentos/${idSessao}`} >
      <SessionSpan>
        <h6>{name}</h6>
      </SessionSpan>
    </Link> 
  );
}

const SessionSpan = styled.span`
  width: 83px;
  height: 43px;
  background-color: #E8833A;
  border-radius: 3px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SessionDay ( {showtimes, weekday, date, idFilme} ) {
  return (
    <SessionDayDiv>
      <h5>{weekday} - {date}</h5>
      <div>
      {showtimes.map((showtime, index) =>
        <Session
          key={index}
          idSessao={showtime.id}
          name={showtime.name} 
          idFilme={idFilme} />)}
      </div>
    </SessionDayDiv>
  );
}

const SessionDayDiv = styled.div`
  width: 100%;
  min-height: 100px;
  height: auto;
  margin: 5px 23px 23px 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  div {
    width: 100%;
    min-height: 43px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
  }
`;

export default function Sessions () {
  const [sessions, setSessions] = useState([]);
  const { idFilme } = useParams();

  useEffect(() => {
		const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`);

		promise.then(response => {
			setSessions(response.data);
		});
	}, []);

  return (
    <>
      <SessionsSection>
        <header>
          <h3>Selecione o horário</h3>
        </header>
        <main>
          {(sessions.length === 0) ? <img src={loadingCountdown} />
          : sessions.days.map((day, index) =>
          <SessionDay
            key={index}
            id={day.id}
            weekday={day.weekday}
            date={day.date}
            showtimes={day.showtimes}
            idFilme={idFilme} />)}
        </main>
      </SessionsSection>
      <Footer sessions={sessions} />
    </>
  );
}

const SessionsSection = styled.section`
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
`;