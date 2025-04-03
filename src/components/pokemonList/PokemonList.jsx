import { Link } from "react-router-dom";

export default function PokemonList({image , id ,buttonActive}) {

    if (buttonActive) {
        return (
            <Link to={`http://localhost:5173/details/${id}`}>
                <div key={id}>
                    <img src={image} />
                </div>
            </Link>
        )
    }

    return(
        <div key={id}>
            <img src={image} />
        </div>
    )
}