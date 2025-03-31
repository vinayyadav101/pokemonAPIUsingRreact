import { Route, Routes } from "react-router-dom";
import PokemonHome from "../components/pokemonHome/Pokemonhome";

export default function PokemonRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PokemonHome />}/>
        </Routes>
    )
}