import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useState } from 'react';
import GlobalStyle from "./GlobalStyles";
import Header from "./Header";
import Movies from "./Movies";
///import Seats from "./Seats";
//import Success from "./Success";
//import Sessions from "./Sessions";

export default function App () {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter >
      <Header />
        <Routes >
          <Route path="/" element={<Movies />} />
          {/* <Route path="/sessoes/:idFilme" element={<Sessions />} />
          <Route path="/sessoes/:idFilme/assentos/:idSessao" element={<Seats />} />
          <Route path="/sucesso" element={<Success />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}



