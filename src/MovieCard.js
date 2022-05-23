import { Link } from "react-router-dom";
const MovieCard=({movie})=>{
    return <Link to={`/${movie.id}`}><div  className="rounded mx-4 shadow-md shadow-shadow border-gray-700  border-4 cursor-pointer">
         <img src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt='movie' 
         className="w-full h-full  rounded " />
    </div></Link> 
}

export default MovieCard;