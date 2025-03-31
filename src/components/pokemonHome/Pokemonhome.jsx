import { useState } from "react"
import Search from "../search/Search"
import Pokemons from "../pokemonDiv/pokemon"

export default function PokemonHome() {
  const [searchPokemon , setPokemon] = useState(null)


    return (
        <div className="main-container">
                <div className="Heading-SearchBar">
                    <h1>Pokemons</h1>

                    <Search calback={(name)=>setPokemon(name)}/>
        
                </div>
            {
                searchPokemon === null ?
                    <Pokemons /> : <Pokemons PokemonName={searchPokemon}/>  
            }
        </div>
    )
}