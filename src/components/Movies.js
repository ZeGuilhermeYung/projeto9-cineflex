import React from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
import loadingReel from "../assets/img/loading-reel.gif";

function Movie ( {idFilme, title, posterURL} ) {
  return (
    <Link id={idFilme} to={`/sessoes/${idFilme}`}>
      <Poster id={idFilme} >
        <img src={posterURL} alt={title} />
      </Poster>
    </Link> 
  );
}

export default function Movies () {
  const [movies, setMovies] = useState([]);
	useEffect(() => {
		const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

		promise.then(response => {
			setMovies(response.data);
		});
	}, []);

  return (
    <MoviesSection>
      <header>
        <h3>Selecione o filme</h3>
      </header>
      <main>
        {(movies.length === 0) ? <img src={loadingReel} />
        : movies.map((movie, index) =>
        <Movie
          key={index}
          idFilme={movie.id}
          title={movie.title}
          posterURL={movie.posterURL}
          overview={movie.overview}
          releaseDate={movie.releaseDate} />)}
      </main>
    </MoviesSection>
  );
}

const MoviesSection = styled.section`
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
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 15px 25px 15px;
  }
  main img {
    width: 100%;
    height: 100%;
  }
`;

const Poster = styled.div`
  width: 145px;
  height: 209px;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin: 5px 15px;
  
  img {
    width: 129px;
    height: 193px;
  }
`;