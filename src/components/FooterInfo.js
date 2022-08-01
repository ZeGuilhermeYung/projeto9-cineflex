import React from "react";
import styled from 'styled-components';

export default function FooterInfo ( {sessions = "", seats = ""} ) {
  return (
    <Footer>
      <img src={sessions ? sessions.posterURL : seats.movie.posterURL} alt="" />
      <div>
        <h2>{sessions ? sessions.title : seats.movie.title}</h2>
        <h2>{sessions ? <></> : `${seats.day.weekday} - ${seats.name}`}</h2>
      </div>
    </Footer>
  );
}

const Footer = styled.footer`
  width: 100%;
  height: 117px;
  background-color: #DFE6ED;
  padding: 14px 10px;
  border: 1px solid #9EADBA;
  position: fixed;
  left: 0px;
  bottom: 0px;
  z-index: 5;
  display: flex;
  
  div {
    margin-left: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;