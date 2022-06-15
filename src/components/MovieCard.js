import { Link } from "react-router-dom";
const MovieCard=({movie})=>{
    return <Link to={`/${movie.id}` } className='w-full'><div  className="rounded  w-40 h-56   shadow-shadow border-gray-700  border-4 cursor-pointer">
         <img src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt='movie' 
         className="w-full h-full  rounded " />
    </div></Link> 
}

export default MovieCard;