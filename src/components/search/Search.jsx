import Pokemons from '../pokemonDiv/pokemon'
import './Search.css'

export default function Search({calback}) {
    return <input type="text" placeholder="Type pokemon name" id="search-bar" onKeyDown={(e)=>{
        if (e.key === "Enter") {
            console.log(typeof e.target.value);
            
            calback(e.target.value)
        }
    }
    }/>
}