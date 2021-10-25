import React from "react";
import axios from "axios";
import { useState } from "react";

import "./HomePage.css";

const HomePage = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    number: "",
    species: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    type: "",
  });

  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemon({
          name: pokemonName,
          number: response.data.id,
          species: response.data.species.name,
          image: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          speed: response.data.stats[5].base_stat,
          type: response.data.types[0].type.name,
        });
        setPokemonChosen(true);
      });
  };

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokédex</h1>
        <input
          type="text"
          value={pokemonName.toLocaleLowerCase()}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <div>
          {pokemonName && (
            <button onClick={searchPokemon}>Search Pokémon</button>
          )}
        </div>
      </div>
      <div className="DisplaySection">
        {!pokemonChosen ? (
          <h1>Please choose a Pokémon</h1>
        ) : (
          <div>
            <h1>{pokemon.name.toUpperCase()}</h1>
            <img src={pokemon.image} alt={pokemon.name} />
            <h3>Number: #{pokemon.number}</h3>
            <h3>Species: {pokemon.species}</h3>
            <h3>Type: {pokemon.type}</h3>
            <h4>Hp: {pokemon.hp}</h4>
            <h4>Attack: {pokemon.attack}</h4>
            <h4>Defense: {pokemon.defense}</h4>
            <h4>Speed: {pokemon.speed}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
