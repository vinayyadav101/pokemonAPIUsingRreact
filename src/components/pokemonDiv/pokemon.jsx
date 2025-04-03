import './pokemon.css'
import PokemonList from '../pokemonList/PokemonList';
import usePokemon from '../../Hooks/usePokemon';
export default function Pokemons({url}) {



    const [pokemonState , setPokemonState] = usePokemon(url || "")

    
  
    return <>
        <div className='pokemonDiv'>
            {pokemonState.downloading ? "Images is loading ..." :
                pokemonState.pokemonList.map((el) =><PokemonList id={el.id} image={el.image} key={el.id} buttonActive={el.buttonActive || false}/>)
            }
        </div>
        <div className='buttons'>
            <button disabled={pokemonState.previousUrl === null} onClick={() =>setPokemonState((state)=>({...state , pokemonUrl:state.previousUrl}))}>Previous</button>
            <button disabled={pokemonState.nextUrl === null} onClick={() => setPokemonState((state)=>({...state , pokemonUrl:state.nextUrl}))}>Next</button>
        </div>
    </>
}