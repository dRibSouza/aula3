import { useEffect, useState , React} from 'react';
import './App.css';
import "./style.css"




function App() {
  const [pokemon, setPokemon] = useState([]);
  const [nomePokemon, setNome] = useState('')


  function nome(e) {
    e.preventDefault();
    setNome(nomePokemon)
  }


  function loadApi() {
    let nomePokemon
    
  }
  useEffect(() => {
    loadApi();
  }, []);


  
  function mostrarPokemon(nome) {
    let url = `https://pokeapi.co/api/v2/pokemon/${nome}`;

    fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        setPokemon(json)
    })
      .catch(err => console.log(err))
  }

  
  return (
    <div className="container">
      <header>
        <strong>Pokemon API</strong>
      </header>
      <div>
        
        <form onSubmit={mostrarPokemon(nomePokemon)}>
          <input type="text" name='name' value={nomePokemon} onChange={(e) => setNome(e.target.value)} />
          
        </form>
        
        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        <div>Nome: {pokemon.name}</div>
        <div>Nº: {pokemon.id}</div>
        <div>Peso: {pokemon.weight / 10}Kg</div>
        <div>Altura: {pokemon.height / 10}m</div>
      </div>
    </div>
  );
}
// PErguntar sobre imagem, que tenta ser carregada antes de termos pokemon definido e apresenta erra
// form que envia a informação antes de clicar em submit

export default App;
