import { useEffect, useState } from "react";

export default function usePokemon(url){


      const [pokemonState ,setPokemonState] = useState({
            pokemonList:[],
            downloading:true,
            pokemonUrl: 'https://pokeapi.co/api/v2/pokemon',
            nextUrl:null,
            previousUrl:null
        })
    
        
        
    
    
        async function PokemonData() {
            try {
                setPokemonState((state)=>({...state , downloading:true}))
    
                const response = await fetch(pokemonState.pokemonUrl).then(data => data.json()).catch(err => console.error(err))
                let result;
    
    
                if (!url || url === "") {
                    setPokemonState((state)=>(
                        {
                            ...state , previousUrl:response.previous , nextUrl:response.next
                        }
                    ))
                    const pokemons = response.results.map(async (el) => await fetch(el.url).then(d => d.json()))
    
                    const pokemonDetails = await Promise.all(pokemons)

                    result = pokemonDetails.map((el) => {
                        return {
                            id: el.id,
                            name: el.name,
                            image: el.sprites.other.dream_world.front_default,
                            buttonActive:true
                        }
                    })
                } else {
    
                    result = Object.entries(response.sprites.other).map(([key, value]) => {
                        if (typeof value === 'object') {
                            for (const key1 in value) {
                                return {
                                    id: key,
                                    image: value[key1]
                                }
                            }
                        }
                    })
    
    
                }
    
                if (result) setPokemonState((state)=>({...state , pokemonList:result , downloading:false}))
            } catch (error) {
                return alert(error)
            }
    
    
    
        }
    useEffect(()=>{
        
        if (url !== '') {
            setPokemonState((state)=>({...state , 
                pokemonList:[],
                downloading:true,
                pokemonUrl: url,
                nextUrl:null,
                previousUrl:null
            }))
        }else{
            setPokemonState((state)=>({...state , pokemonUrl:'https://pokeapi.co/api/v2/pokemon'}))
        }
    },[url])
    
        useEffect(() => {
            PokemonData()
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [pokemonState.pokemonUrl])

        return [pokemonState ,setPokemonState]
    
}