import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import GlobalStyle from "./GlobalStyles";
import Header from "./Header";
import Movies from "./Movies";
import Sessions from "./Sessions";
import Seats from "./Seats";
//import Success from "./Success";


export default function App () {
  const [movies, setMovies] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [seats, setSeats] = useState([]);
  const [seatsSelected, setSeatsSelected] = useState([]);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter >
      <Header />
        <Routes >
          <Route path="/" element={<Movies movies={movies} setMovies={setMovies} />} />
          <Route path="/sessoes/:idFilme" element={<Sessions sessions={sessions} setSessions={setSessions} />} />
          <Route path="/sessoes/:idFilme/assentos/:idSessao" element={<Seats seats={seats} setSeats={setSeats} seatsSelected={seatsSelected} setSeatsSelected={setSeatsSelected} />} />
          {/* <Route path="/sucesso" element={<Success />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}



