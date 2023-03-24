import { useEffect, useState } from 'react';
import './App.css';
import "./style.css"


function App() {
  const [pokemon, setPokemon] = useState([]);



  function loadApi() {
    let nomePokemon
    let url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;
    fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        setPokemon(json)
    })
    .catch (err => console.log(err))
  }
  useEffect(() => {
    loadApi();
  }, []);
  return (
    <div className="container">
      <header>
        <strong>Pokemon API</strong>
      </header>
      <div>
        <form typeof='input' placeholder='Pesquise um pokemon'></form>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div>Nome: {pokemon.name}</div>
        <div>Nº: {pokemon.id}</div>
        <div>Peso: {pokemon.weight / 10}Kg</div>
        <div>Altura: {pokemon.height / 10}m</div>
      </div>
    </div>
  );
}

export default App;
