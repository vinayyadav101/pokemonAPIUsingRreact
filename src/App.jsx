import Pokemons from "./components/pokemonDiv/pokemon";
import Search from "./components/search/Search";
import './App.css'
import { useState } from "react";

export default function App() {
  const [searchPokemon , setPokemon] = useState(null)


  return (
    <div className="main-container">
      <div className="Heading-SearchBar">
        <h1>Pokemons</h1>
        <Search calback={(name)=>setPokemon(name)}/>
        {searchPokemon}
        
      </div>
        {
          searchPokemon === null ?
          <Pokemons /> : <Pokemons PokemonName={searchPokemon}/>  
        }
    </div>
  )
}