import React, { useState } from "react";
import axios from "axios";

import logo from "../assets/logo.png";
import "./PokemonAbout.css";

const PokemonAbout = (props) => {
  const [pokemon, setFavPokemon] = useState("");

  const myFavPoké = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/charmander`)
      .then((response) => {
        setFavPokemon(response.data.name + " 🔥");
      });
  };

  return (
    <div>
      <div className="about">
        <div className="about-container">
          <h2>{props.attack}</h2>
          <h1>What is Pokemon?</h1>
          <p>
            Pokémon was invented by a Japanese man named Satoshi Tajiri and his
            friend Ken Sugimori, who is an illustrator. Back in 1982 Satoshi
            started a gaming magazine together with his friends called Game
            Freak, but after a while he decided to start making his own video
            games, instead of writing about them.
          </p>
          <img className="about-logo" src={logo} alt="pokemon logo" />
        </div>
        <h2>
          Favourite Pokemon:{" "}
          {`${pokemon.charAt(0).toUpperCase()}${pokemon.slice(1)}`}
        </h2>
        <button className="about-button" onClick={myFavPoké}>
          Check My Favourite Pokemon
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default PokemonAbout;
