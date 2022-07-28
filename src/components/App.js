import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Header from "./Header";
import Movies from "./Movies";

export default function App () {
  return (
    <BrowserRouter >
    <Header />
      <Routes >
        <Route path="/" element={<Movies />} />
      </Routes>
    </BrowserRouter>

  );
}