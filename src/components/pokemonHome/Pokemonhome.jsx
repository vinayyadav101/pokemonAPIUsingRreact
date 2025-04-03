import { useState } from "react"
import Search from "../search/Search"
import Pokemons from "../pokemonDiv/pokemon"

export default function PokemonHome() {
  const [searchPokemon , setPokemon] = useState(null)


    return (
        <div className="main-container">
                <div className="Heading-SearchBar">
                    <Search calback={(name)=>{
                        if (name !== '') {
                            
                            setPokemon(`https://pokeapi.co/api/v2/pokemon/${name}`)
                        }else{
                            setPokemon(null)
                        } 
                    }}/>
        
                </div>
            {
                searchPokemon === null ?
                    <Pokemons /> : <Pokemons url={searchPokemon}/>  
            }
        </div>
    )
}