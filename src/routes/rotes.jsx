import { Route, Routes } from "react-router-dom";
import PokemonHome from "../components/pokemonHome/Pokemonhome";
import PokemonDetail from "../components/pokemonDetail/PokemonDetail";

export default function PokemonRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PokemonHome />}/>
            <Route path="/details/:id" element={<PokemonDetail />}/>
        </Routes>
        
    )
}