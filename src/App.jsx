import './App.css'
import { BrowserRouter, Link } from "react-router-dom";
import PokemonRoutes from './routes/rotes';

export default function App() {
  return (
  <BrowserRouter>
        <div className='heading'>
          <Link to={"http://localhost:5173"}>
            <h1>Pokemons</h1>
          </Link>
        </div>
      <PokemonRoutes />
  </BrowserRouter>
  )
}