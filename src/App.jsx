import './App.css'
import { BrowserRouter } from "react-router-dom";
import PokemonHome from "./components/pokemonHome/Pokemonhome";

export default function App() {
  return (
    <BrowserRouter>
      <PokemonHome />
  </BrowserRouter>
  )
}