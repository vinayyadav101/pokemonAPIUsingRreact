import { useEffect, useState } from 'react';
import './pokemon.css'
export default function Pokemons({PokemonName}) {
 

    const [pokemonList , setPokemonList] = useState([])
    const [downloading , setDownloading] =useState(true)

    const [pokemonUrl, setPokemonUrl] = useState(`https://pokeapi.co/api/v2/pokemon`)

    const [nextUrl , setNextUrl] = useState(null)
    const [previousUrl , setPreviousUrl] = useState(null)


    async function PokemonData(){
        setDownloading(true)
    
       const response =  await fetch(pokemonUrl).then(data => data.json()).catch(err=>console.error(err))
       let result;
            if (!PokemonName) {
                    setNextUrl(response.next)
                    setPreviousUrl(response.previous)
                const pokemons = response.results.map(async(el) =>  await fetch(el.url).then(d => d.json()))

                const pokemonDetails = await Promise.all(pokemons)
    
                result = pokemonDetails.map((el)=>{
                    return {
                        id:el.id,
                        name: el.name,
                        image: el.sprites.other.dream_world.front_default
                    }
                })
            }else{

                result = Object.entries(response.sprites.other).map(([,value])=>{
                    if(typeof value === 'object'){
                        for (const key1 in value) {
                            return {
                                id:key1,
                                image:value[key1]
                            }
                        }
                    }
                })

            }
            
            
            

            if (result)  setPokemonList(result)
                setDownloading(false)
    }

    useEffect(()=>{
        if (PokemonName) {
            setPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`)
        }
    },[PokemonName])

    useEffect(()=>{
        PokemonData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pokemonUrl])

    return <>
            <div className='pokemonDiv'>
            { downloading ? "Images is loading ..." :
                pokemonList.map((el)=> 
                    <div key={el.id}>
                        <img src={el.image}></img>
                    </div>)
             }
        </div>
        <div className='buttons'>
            <button disabled={previousUrl === null} onClick={()=>setPokemonUrl(previousUrl)}>Previous</button>
            <button disabled={nextUrl === null} onClick={()=>setPokemonUrl(nextUrl)}>Next</button>
        </div>
    </>
}