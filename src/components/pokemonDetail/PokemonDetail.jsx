import { useState } from "react"
import { useEffect } from "react";
import { useParams } from "react-router-dom"

import './pokemonDetails.css'

export default  function PokemonDetail() {
    // // eslint-disable-next-line react-hooks/rules-of-hooks
    const {id} = useParams()
    const [details , setDetails] = useState({})


    async function detail() {
        try {
            
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(d=>d.json())

        

            setDetails({
                name:response.name,
                image: response.sprites.other.dream_world.front_default,
                type : response.types.map(el => el.type.name),
                weight: response.weight,
                height:response.height
            })
            
        } catch (error) {
            return alert(error)
        }
        
        
    }
    
    useEffect(()=>{
        detail()
    },[])
            return (
                    <div className="PokemonDetail" >
                            <div className="image">
                                <img src={details.image}/>
                            </div>
                            <div className="details">
                                <h1>{details.name}</h1>
                                <p>Weight: {details.weight}</p>
                                <p>Height: {details.height}</p>
                                <h1>Types</h1>
                                <div className="types">
                                {details?.type?.length > 0 ? (
                                        details.type.map(el => <p key={el}>{el}</p>)
                                    ) : (
                                        <p>No types available</p>
                                )}
                                </div>
                            </div>
                    </div>
                    
                )

       
}